import { Metadata } from 'next';
import { generatePersonSchema } from '@/lib/schema/person';
import { JsonLd } from '@/components/json-ld';
import { AboutContent } from '@/components/about-content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'About Kazuya Hibara | AI Marketing Engineer';
  const description = locale === 'en'
    ? 'Meet Kazuya Hibara, an AI Marketing Engineer specializing in n8n workflow automation and AI-driven marketing systems for small businesses.'
    : 'n8nワークフロー自動化とAI駆動マーケティングシステムを専門とするAIマーケティングエンジニア、桧原和也のプロフィール。';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/about`,
      images: [{ url: '/api/og?title=About&subtitle=Kazuya+Hibara+-+AI+Marketing+Engineer', width: 1200, height: 630 }],
    },
    twitter: {
      title,
      description,
      images: [{ url: '/api/og?title=About&subtitle=Kazuya+Hibara+-+AI+Marketing+Engineer', width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/about`,
      languages: {
        en: `${BASE_URL}/en/about`,
        ja: `${BASE_URL}/ja/about`,
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'ja' }>;
}) {
  const { locale } = await params;
  const personSchema = generatePersonSchema(locale);

  return (
    <>
      <JsonLd data={personSchema} />
      <AboutContent locale={locale} />
    </>
  );
}
