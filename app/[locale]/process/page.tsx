import { Metadata } from 'next';
import ProcessClient from './process-client';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ja' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = 'How I Work | Kazuya Hibara';
  const description = locale === 'en'
    ? 'A clear 5-step process from consultation to working automation system. See how Kazuya Hibara builds AI workflow automation using n8n.'
    : '相談から稼働する自動化システムまでの明確な5ステッププロセス。n8nを使ったAIワークフロー自動化の構築方法をご覧ください。';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/process`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/process`,
      languages: {
        en: `${BASE_URL}/en/process`,
        ja: `${BASE_URL}/ja/process`,
      },
    },
  };
}

export default async function Process({ params }: PageProps) {
  const { locale } = await params;
  return <ProcessClient locale={locale} />;
}
