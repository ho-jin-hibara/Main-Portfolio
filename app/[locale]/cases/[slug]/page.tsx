import { Metadata } from 'next';
import { getArticleBySlug, getAllArticles, isWorkflow } from '@/lib/content';
import { generateArticleSchema } from '@/lib/schema/article';
import { generateHowToSchema, parseWorkflowStep } from '@/lib/schema/howto';
import { JsonLd } from '@/components/json-ld';
import { ArticleContent, ArticleNotFound } from '@/components/article-content';
import type { WorkflowArticle } from '@/lib/content';
import { locales } from '@/i18n';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com';

interface PageProps {
  params: Promise<{ locale: 'en' | 'ja'; slug: string }>;
}

export function generateStaticParams() {
  const articles = getAllArticles();
  return locales.flatMap((locale) =>
    articles.map((article) => ({ locale, slug: article.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Not Found | Kazuya Hibara',
    };
  }

  const title = locale === 'en'
    ? `${article.titleEn} | Kazuya Hibara`
    : `${article.titleJa} | Kazuya Hibara`;
  const description = locale === 'en' ? article.descriptionEn : article.descriptionJa;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/cases/${slug}`,
      images: [
        { url: `/api/og?title=${encodeURIComponent(article.titleEn)}&subtitle=Case+Study`, width: 1200, height: 630 },
      ],
    },
    twitter: {
      title,
      description,
      images: [
        { url: `/api/og?title=${encodeURIComponent(article.titleEn)}&subtitle=Case+Study`, width: 1200, height: 630 },
      ],
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/cases/${slug}`,
      languages: {
        en: `${BASE_URL}/en/cases/${slug}`,
        ja: `${BASE_URL}/ja/cases/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return <ArticleNotFound locale={locale} />;
  }

  // Generate Article schema for JSON-LD
  const articleSchema = generateArticleSchema(
    {
      slug: article.slug,
      title: locale === 'en' ? article.titleEn : article.titleJa,
      description: locale === 'en' ? article.descriptionEn : article.descriptionJa,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      heroImage: article.heroImage,
      articleType: isWorkflow(article) ? 'workflow' : 'case-study',
    },
    locale
  );

  // Generate HowTo schema for workflow articles (step-by-step tutorials)
  let howToSchema = null;
  if (isWorkflow(article)) {
    const workflowArticle = article as WorkflowArticle;
    const steps = workflowArticle.sections.howItWorks[locale];

    howToSchema = generateHowToSchema(
      {
        slug: workflowArticle.slug,
        title: locale === 'en' ? workflowArticle.titleEn : workflowArticle.titleJa,
        description: locale === 'en' ? workflowArticle.directAnswerEn : workflowArticle.directAnswerJa,
        heroImage: workflowArticle.heroImage,
        steps: steps.map(parseWorkflowStep),
        tools: workflowArticle.techStack,
      },
      locale
    );
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      {howToSchema && <JsonLd data={howToSchema} />}
      <ArticleContent article={article} locale={locale} />
    </>
  );
}
