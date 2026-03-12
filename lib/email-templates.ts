import type { InsertContact } from '@shared/schema';

export function buildNotificationEmail(data: InsertContact, tracking?: Record<string, string>): { subject: string; html: string } {
  const subject = `New inquiry from ${data.name}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Nunito', -apple-system, sans-serif; color: #595046; background: #F3F1E9; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .card { background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 2px 12px rgba(89,80,70,0.08); }
    h1 { font-size: 24px; margin: 0 0 24px; color: #595046; }
    .label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #FFBFA8; margin: 16px 0 4px; }
    .value { font-size: 16px; line-height: 1.6; margin: 0 0 16px; white-space: pre-wrap; }
    .footer { text-align: center; padding: 24px; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h1>New Contact Form Submission</h1>

      <div class="label">Name</div>
      <div class="value">${escapeHtml(data.name)}</div>

      <div class="label">Email</div>
      <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>

      <div class="label">Business Overview</div>
      <div class="value">${escapeHtml(data.businessOverview)}</div>

      ${data.currentChallenges ? `
      <div class="label">Current Challenges</div>
      <div class="value">${escapeHtml(data.currentChallenges)}</div>
      ` : ''}

      ${data.toolsUsed ? `
      <div class="label">Tools Used</div>
      <div class="value">${escapeHtml(data.toolsUsed)}</div>
      ` : ''}

      ${data.preferredContactMethod ? `
      <div class="label">Preferred Contact Method</div>
      <div class="value">${escapeHtml(data.preferredContactMethod)}</div>
      ` : ''}

      ${tracking && Object.keys(tracking).length > 0 ? `
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee;">
        <div class="label">Tracking Data</div>
        <div class="value" style="font-size: 13px; color: #999;">${Object.entries(tracking).map(([k, v]) => `${escapeHtml(k)}: ${escapeHtml(v)}`).join('<br>')}</div>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      Sent from your portfolio contact form
    </div>
  </div>
</body>
</html>`.trim();

  return { subject, html };
}

export function buildAutoReplyEmail(data: { name: string; locale: 'en' | 'ja' }): { subject: string; html: string } {
  if (data.locale === 'ja') {
    return buildAutoReplyJa(data.name);
  }
  return buildAutoReplyEn(data.name);
}

function buildAutoReplyEn(name: string): { subject: string; html: string } {
  const subject = 'Thank you for your inquiry - Kazuya Hibara';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Nunito', -apple-system, sans-serif; color: #595046; background: #F3F1E9; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .card { background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 2px 12px rgba(89,80,70,0.08); }
    h1 { font-size: 24px; margin: 0 0 24px; color: #595046; }
    p { font-size: 16px; line-height: 1.8; margin: 0 0 16px; }
    .highlight { color: #FFBFA8; font-weight: 700; }
    .footer { text-align: center; padding: 24px; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h1>Thank you, ${escapeHtml(name)}!</h1>
      <p>I've received your inquiry and will get back to you within <span class="highlight">2 business days</span>.</p>
      <p>In the meantime, feel free to check out my portfolio for more details on how I can help automate your marketing workflows.</p>
      <p>Best regards,<br><strong>Kazuya Hibara</strong><br>AI Marketing Engineer</p>
    </div>
    <div class="footer">
      This is an automated reply. Please do not reply to this email.
    </div>
  </div>
</body>
</html>`.trim();

  return { subject, html };
}

function buildAutoReplyJa(name: string): { subject: string; html: string } {
  const subject = 'お問い合わせありがとうございます - 桧原和也';

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Zen Maru Gothic', -apple-system, sans-serif; color: #595046; background: #F3F1E9; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
    .card { background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 2px 12px rgba(89,80,70,0.08); }
    h1 { font-size: 24px; margin: 0 0 24px; color: #595046; }
    p { font-size: 16px; line-height: 1.8; margin: 0 0 16px; }
    .highlight { color: #FFBFA8; font-weight: 700; }
    .footer { text-align: center; padding: 24px; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <h1>${escapeHtml(name)}様、お問い合わせありがとうございます！</h1>
      <p>お問い合わせを受け付けました。<span class="highlight">2営業日以内</span>にご連絡いたします。</p>
      <p>それまでの間、ポートフォリオサイトでマーケティング自動化のソリューションの詳細をご覧ください。</p>
      <p>よろしくお願いいたします。<br><strong>桧原和也</strong><br>AIマーケティングエンジニア</p>
    </div>
    <div class="footer">
      このメールは自動返信です。このメールへの返信はご遠慮ください。
    </div>
  </div>
</body>
</html>`.trim();

  return { subject, html };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
