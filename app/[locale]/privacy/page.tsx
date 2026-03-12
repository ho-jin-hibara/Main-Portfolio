import { Metadata } from 'next';
import PrivacyClient from './privacy-client';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ja' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Privacy Policy | Kazuya Hibara';
  const description = locale === 'en'
    ? 'Privacy policy for kazuyahibara.com. Learn how your personal information is collected, used, and protected.'
    : 'kazuyahibara.comのプライバシーポリシー。個人情報の収集・利用・保護について説明します。';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/privacy`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/privacy`,
      languages: {
        en: `${BASE_URL}/en/privacy`,
        ja: `${BASE_URL}/ja/privacy`,
      },
    },
  };
}

export default async function Privacy({ params }: PageProps) {
  const { locale } = await params;
  return <PrivacyClient locale={locale} />;
}
