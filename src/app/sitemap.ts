import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/wordpress';

const baseUrl = 'https://mywinnie.com';
const locales = ['ko', 'vi', 'en'] as const;

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postSlugs = await getPostSlugs();

  // Static pages
  const staticPages: Array<{ path: string; changeFrequency: ChangeFrequency; priority: number }> = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/blog', changeFrequency: 'daily', priority: 0.8 },
    { path: '/privacy', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'monthly', priority: 0.3 },
  ];

  const staticUrls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );

  // Blog posts
  const blogUrls: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    postSlugs.map((slug) => ({
      url: `${baseUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: 0.6,
    }))
  );

  return [...staticUrls, ...blogUrls];
}
