import { Metadata } from 'next';
import { Nunito, Zen_Maru_Gothic } from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n';
import { Navbar } from '@/components/ui/navbar';
import { generateOrganizationSchema } from '@/lib/schema/organization';
import { JsonLd } from '@/components/json-ld';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@/components/google-analytics';
import '../globals.css';

const nunito = Nunito({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-maru-gothic',
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: 'Kazuya Hibara | AI Marketing Engineer',
      template: '%s',
    },
    description: locale === 'en'
      ? 'AI Marketing Engineer automating business workflows with n8n and AI. Transform your winning formula into a 24/7 marketing system.'
      : 'n8nとAIでビジネスワークフローを自動化するAIマーケティングエンジニア。勝ちパターンを24時間稼働のマーケティングシステムに変換します。',
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      title: 'Kazuya Hibara | AI Marketing Engineer',
      description: locale === 'en'
        ? 'AI Marketing Engineer automating business workflows with n8n and AI. Transform your winning formula into a 24/7 marketing system.'
        : 'n8nとAIでビジネスワークフローを自動化するAIマーケティングエンジニア。勝ちパターンを24時間稼働のマーケティングシステムに変換します。',
      type: 'website',
      siteName: 'Kazuya Hibara',
      locale: locale === 'ja' ? 'ja_JP' : 'en_US',
      images: ['/opengraph.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kazuya Hibara | AI Marketing Engineer',
      description: locale === 'en'
        ? 'AI Marketing Engineer automating business workflows with n8n and AI. Transform your winning formula into a 24/7 marketing system.'
        : 'n8nとAIでビジネスワークフローを自動化するAIマーケティングエンジニア。勝ちパターンを24時間稼働のマーケティングシステムに変換します。',
      images: ['/opengraph.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering for this locale
  setRequestLocale(locale);

  const messages = await getMessages();
  const organizationSchema = generateOrganizationSchema(locale as 'en' | 'ja');

  return (
    <html lang={locale} className={`${nunito.variable} ${zenMaruGothic.variable}`}>
      <head>
        <link rel="author" href="/llms.txt" />
      </head>
      <body>
        <JsonLd data={organizationSchema} />
        <NextIntlClientProvider messages={messages}>
          <Navbar locale={locale as 'en' | 'ja'} />
          {children}
        </NextIntlClientProvider>
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
