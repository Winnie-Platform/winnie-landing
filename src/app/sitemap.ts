import { MetadataRoute } from 'next';
import { getAllArticleSlugs } from '@/lib/strapi';

const baseUrl = 'https://mywinnie.com';
const locales = ['ko', 'vi', 'en'] as const;

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get blog slugs from Strapi (다국어 별도 발행)
  const articleSlugs = await getAllArticleSlugs();

  // Static pages with priorities
  const staticPages: Array<{ path: string; changeFrequency: ChangeFrequency; priority: number }> = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
    { path: '/privacy', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'monthly', priority: 0.3 },
  ];

  // Generate URLs for static pages with alternates
  const staticUrls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${page.path}`])
        ),
      },
    }))
  );

  // Blog posts from Strapi (각 언어별 개별 URL)
  const blogUrls: MetadataRoute.Sitemap = articleSlugs.map(({ slug, locale }) => ({
    url: `${baseUrl}/${locale}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as ChangeFrequency,
    priority: 0.7,
  }));

  return [...staticUrls, ...blogUrls];
}
