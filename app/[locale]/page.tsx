import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import HomeClient from './home-client';
import { JsonLd } from '@/components/json-ld';
import { generateFAQSchema } from '@/lib/schema/faq';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

const homeFAQs = {
  en: [
    { question: 'What is an AI Marketing Engineer?', answer: 'An AI Marketing Engineer combines marketing strategy with automation technology. I use n8n and AI (GPT-4o) to build systems that automate repetitive marketing tasks like social media posting, lead generation, invoice collection, and content creation — saving 60+ hours per month.' },
    { question: 'How much does workflow automation cost?', answer: 'Phase 1 starts with a free 30-minute consultation to identify automation opportunities. Implementation costs vary based on complexity, but most solo businesses see ROI within the first month through time savings alone.' },
    { question: 'What tools do you use for automation?', answer: 'I primarily use n8n (open-source workflow automation), Google Workspace tools, and AI models like GPT-4o. These integrate with tools you already use: Slack, LINE, Shopify, Stripe, Google Sheets, and more.' },
    { question: 'Do I need technical knowledge?', answer: 'No. I handle all technical design, implementation, and maintenance. You just need to describe your current workflow and challenges. The 30-minute consultation requires zero preparation.' },
    { question: 'How long does implementation take?', answer: 'A typical Phase 1 automation takes 1-2 weeks from consultation to deployment, including a trial period. You will have a working system with documentation at the end.' },
  ],
  ja: [
    { question: 'AIマーケティングエンジニアとは？', answer: 'AIマーケティングエンジニアは、マーケティング戦略と自動化技術を組み合わせた専門職です。n8nとAI（GPT-4o）を使い、SNS投稿、リード獲得、請求書回収、コンテンツ制作などの反復的なマーケティング業務を自動化するシステムを構築。月60時間以上の削減を実現します。' },
    { question: 'ワークフロー自動化の費用は？', answer: 'Phase 1は無料の30分コンサルテーションから始まります。実装費用は複雑さにより異なりますが、ほとんどの事業者は時間削減だけで初月からROIを実現しています。' },
    { question: 'どんなツールを使いますか？', answer: '主にn8n（オープンソースのワークフロー自動化）、Google Workspaceツール、GPT-4oなどのAIモデルを使用。Slack、LINE、Shopify、Stripe、Googleスプレッドシートなど、既にお使いのツールと連携します。' },
    { question: '技術的な知識は必要ですか？', answer: 'いいえ。技術的な設計・実装・保守はすべて私が担当します。現在のワークフローと課題を教えていただくだけです。30分コンサルテーションに事前準備は不要です。' },
    { question: '実装にはどのくらい時間がかかりますか？', answer: '一般的なPhase 1の自動化は、コンサルテーションからデプロイまで1〜2週間です（トライアル期間を含む）。最終的にドキュメント付きの稼働システムが納品されます。' },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Kazuya Hibara | AI Marketing Engineer';
  const description = locale === 'en'
    ? 'AI Marketing Engineer automating business workflows with n8n and AI. Transform your winning formula into a 24/7 marketing system.'
    : 'n8nとAIでビジネスワークフローを自動化するAIマーケティングエンジニア。勝ちパターンを24時間稼働のマーケティングシステムに変換します。';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}`,
      type: 'website',
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        en: `${BASE_URL}/en`,
        ja: `${BASE_URL}/ja`,
      },
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: 'en' | 'ja' }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const faqSchema = generateFAQSchema(
    homeFAQs[locale],
    `${BASE_URL}/${locale}`,
    locale
  );

  return (
    <>
      <JsonLd data={faqSchema} />
      <HomeClient locale={locale} />
    </>
  );
}
