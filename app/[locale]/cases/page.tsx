import { Metadata } from 'next';
import CasesClient from './cases-client';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ja' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Case Studies | AI Automation Results | Kazuya Hibara';
  const description = locale === 'en'
    ? 'Real-world AI workflow automation case studies and n8n workflow examples. See how solopreneurs and small teams save 60+ hours per month.'
    : 'AIワークフロー自動化の実例とn8nワークフロー事例集。個人事業主・少人数チームが月60時間以上を削減した成果をご覧ください。';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/cases`,
      images: [{ url: '/api/og?title=Case+Studies&subtitle=AI+Automation+Results', width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      images: [{ url: '/api/og?title=Case+Studies&subtitle=AI+Automation+Results', width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/cases`,
      languages: {
        en: `${BASE_URL}/en/cases`,
        ja: `${BASE_URL}/ja/cases`,
      },
    },
  };
}

export default async function Cases({ params }: PageProps) {
  const { locale } = await params;
  return <CasesClient locale={locale} />;
}
