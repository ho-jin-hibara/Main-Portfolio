import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { ZodError } from 'zod';
import { db } from '@/db';
import { contacts, insertContactSchema } from '@shared/schema';
import { getResend, CONTACT_EMAIL, FROM_EMAIL } from '@/lib/resend';
import { buildNotificationEmail, buildAutoReplyEmail } from '@/lib/email-templates';
import { checkRateLimit } from '@/lib/rate-limit';

function getClientIp(headersList: Headers): string {
  return (
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headersList.get('x-real-ip') ||
    'unknown'
  );
}

function detectLocale(headersList: Headers): 'en' | 'ja' {
  const referer = headersList.get('referer') || '';
  if (referer.includes('/ja/')) return 'ja';
  return 'en';
}

export async function POST(request: Request) {
  try {
    const headersList = await headers();

    // Rate limiting
    const ip = getClientIp(headersList);
    const { allowed, retryAfterSeconds } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } }
      );
    }

    const body = await request.json();

    // Extract tracking data before validation (not stored in DB)
    const trackingData = body._tracking || {};
    delete body._tracking;

    // Validate the request body
    const validatedData = insertContactSchema.parse(body);

    // Insert into database
    const [result] = await db.insert(contacts).values(validatedData).returning();

    // Send emails (non-blocking - don't fail the request if email fails)
    const resend = getResend();
    if (resend) {
      const locale = detectLocale(headersList);
      const emailPromises: Promise<unknown>[] = [];

      // Notification email to site owner
      const notification = buildNotificationEmail(validatedData, trackingData);
      emailPromises.push(
        resend.emails.send({
          from: FROM_EMAIL,
          to: CONTACT_EMAIL,
          subject: notification.subject,
          html: notification.html,
        }).catch((err) => {
          console.error('Failed to send notification email:', err);
        })
      );

      // Auto-reply to the user
      const autoReply = buildAutoReplyEmail({ name: validatedData.name, locale });
      emailPromises.push(
        resend.emails.send({
          from: FROM_EMAIL,
          to: validatedData.email,
          subject: autoReply.subject,
          html: autoReply.html,
        }).catch((err) => {
          console.error('Failed to send auto-reply email:', err);
        })
      );

      // Fire and forget - don't await for response time
      Promise.all(emailPromises).catch(() => {});
    }

    return NextResponse.json({ success: true, id: result.id }, { status: 201 });
  } catch (error) {
    console.error('Contact form submission error:', error);

    if (error instanceof ZodError) {
      const messages = error.errors.map((e) => `${e.path.join('.')}: ${e.message}`);
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: messages },
        { status: 400 }
      );
    }

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
