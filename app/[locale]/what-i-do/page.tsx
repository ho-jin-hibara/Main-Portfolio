import { Metadata } from 'next';
import { WhatIDoContent } from '@/components/what-i-do-content';
import { faqContent } from '@/lib/content/faq';
import { JsonLd } from '@/components/json-ld';
import { generateFAQSchema } from '@/lib/schema/faq';
import { BASE_URL } from '@/lib/schema/types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ja' }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = 'AI Workflow Automation Services | Kazuya Hibara';
  const description = locale === 'en'
    ? 'Custom AI workflow automation services using n8n, Google tools, and LLMs. Automate marketing, operations, and fulfillment for your business.'
    : 'n8n・Googleツール・LLMを活用したAIワークフロー自動化サービス。マーケティング・業務・フルフィルメントを自動化します。';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}/what-i-do`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/what-i-do`,
      languages: {
        en: `${SITE_URL}/en/what-i-do`,
        ja: `${SITE_URL}/ja/what-i-do`,
      },
    },
  };
}

export default async function WhatIDo({ params }: PageProps) {
  const { locale } = await params;

  // Generate FAQ schema from visible content
  const pageUrl = `${BASE_URL}/${locale}/what-i-do`;
  const faqSchema = generateFAQSchema(faqContent[locale], pageUrl, locale);

  return (
    <>
      <JsonLd data={faqSchema} />
      <WhatIDoContent locale={locale} />
    </>
  );
}
