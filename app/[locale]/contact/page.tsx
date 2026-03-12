import { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { JsonLd } from '@/components/json-ld';
import { generateContactPageSchema } from '@/lib/schema/contact';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ja' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Contact | Book a Free Consultation | Kazuya Hibara';
  const description = locale === 'en'
    ? 'Book a free 30-minute consultation with Kazuya Hibara. Discuss AI workflow automation opportunities for your business using n8n and AI.'
    : '桧原和也との無料30分コンサルテーションを予約。n8nとAIを活用したワークフロー自動化の可能性をご相談ください。';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/contact`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact`,
      languages: {
        en: `${BASE_URL}/en/contact`,
        ja: `${BASE_URL}/ja/contact`,
      },
    },
  };
}

export default async function Contact({ params }: PageProps) {
  const { locale } = await params;

  // Generate ContactPage schema for JSON-LD
  const contactSchema = generateContactPageSchema(locale);

  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactForm locale={locale} />
    </>
  );
}
