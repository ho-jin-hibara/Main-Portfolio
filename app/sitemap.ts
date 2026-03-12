import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/content'
import { routing } from '@/routing'

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

interface StaticPage {
  path: string
  priority: number
  changeFrequency: ChangeFrequency
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kazuyahibara.com'
  const locales = routing.locales
  const entries: MetadataRoute.Sitemap = []

  // Static pages configuration
  const staticPages: StaticPage[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: 'about', priority: 0.8, changeFrequency: 'monthly' },
    { path: 'what-i-do', priority: 0.9, changeFrequency: 'monthly' },
    { path: 'process', priority: 0.7, changeFrequency: 'monthly' },
    { path: 'cases', priority: 0.8, changeFrequency: 'weekly' },
    { path: 'contact', priority: 0.6, changeFrequency: 'yearly' },
    { path: 'privacy', priority: 0.3, changeFrequency: 'yearly' },
  ]

  // Add static pages with hreflang alternates
  for (const page of staticPages) {
    const pathSegment = page.path ? `/${page.path}` : ''

    // Build alternates object for all locales
    const alternateLanguages: Record<string, string> = {}
    for (const locale of locales) {
      alternateLanguages[locale] = `${baseUrl}/${locale}${pathSegment}`
    }

    entries.push({
      url: `${baseUrl}/en${pathSegment}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: alternateLanguages,
      },
    })
  }

  // Add article pages with hreflang alternates
  const articles = getAllArticles()
  for (const article of articles) {
    const articlePath = `/cases/${article.slug}`

    // Build alternates object for all locales
    const alternateLanguages: Record<string, string> = {}
    for (const locale of locales) {
      alternateLanguages[locale] = `${baseUrl}/${locale}${articlePath}`
    }

    entries.push({
      url: `${baseUrl}/en${articlePath}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: alternateLanguages,
      },
    })
  }

  return entries
}
