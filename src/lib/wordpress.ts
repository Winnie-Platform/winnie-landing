const WP_API_URL = process.env.WORDPRESS_API_URL || 'https://mywinnie.com/wp-json/wp/v2';

// 언어별 카테고리 슬러그 매핑
const LOCALE_CATEGORY_MAP: Record<string, string> = {
  ko: 'korean',
  vi: 'vietnamese',
  en: 'english',
};

// 카테고리 ID 캐시
const categoryIdCache: Record<string, number | null> = {};

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
    author?: Array<{
      name: string;
      avatar_urls: Record<string, string>;
    }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

async function fetchAPI<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${WP_API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status}`);
  }

  return res.json();
}

export async function getPosts(params: {
  locale?: string;
  page?: number;
  perPage?: number;
  categories?: number[];
  search?: string;
} = {}): Promise<{ posts: WPPost[]; totalPages: number; total: number }> {
  const { locale, page = 1, perPage = 10, categories, search } = params;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
    _embed: 'true',
  });

  // 언어별 카테고리 필터링
  if (locale) {
    const localeCategoryId = await getLocaleCategoryId(locale);
    if (localeCategoryId) {
      const allCategories = categories ? [...categories, localeCategoryId] : [localeCategoryId];
      queryParams.set('categories', allCategories.join(','));
    }
  } else if (categories?.length) {
    queryParams.set('categories', categories.join(','));
  }

  if (search) {
    queryParams.set('search', search);
  }

  const res = await fetch(`${WP_API_URL}/posts?${queryParams}`, {
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return { posts: [], totalPages: 0, total: 0 };
  }

  const posts = await res.json();
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
  const total = parseInt(res.headers.get('X-WP-Total') || '0');

  return { posts, totalPages, total };
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const posts = await fetchAPI<WPPost[]>(`/posts?slug=${slug}&_embed=true`);
    return posts[0] || null;
  } catch {
    return null;
  }
}

export async function getPostById(id: number): Promise<WPPost | null> {
  try {
    return await fetchAPI<WPPost>(`/posts/${id}?_embed=true`);
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    return await fetchAPI<WPCategory[]>('/categories?per_page=100');
  } catch {
    return [];
  }
}

export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  // 캐시 확인
  if (slug in categoryIdCache) {
    const cachedId = categoryIdCache[slug];
    if (cachedId === null) return null;
    return { id: cachedId, name: slug, slug, count: 0 };
  }

  try {
    const categories = await fetchAPI<WPCategory[]>(`/categories?slug=${slug}`);
    const category = categories[0] || null;
    categoryIdCache[slug] = category?.id || null;
    return category;
  } catch {
    categoryIdCache[slug] = null;
    return null;
  }
}

export async function getLocaleCategoryId(locale: string): Promise<number | null> {
  const categorySlug = LOCALE_CATEGORY_MAP[locale];
  if (!categorySlug) return null;

  const category = await getCategoryBySlug(categorySlug);
  return category?.id || null;
}

export async function getPostSlugs(locale?: string): Promise<string[]> {
  try {
    let endpoint = '/posts?per_page=100&_fields=slug,categories';

    // 언어별 카테고리 필터링
    if (locale) {
      const localeCategoryId = await getLocaleCategoryId(locale);
      if (localeCategoryId) {
        endpoint += `&categories=${localeCategoryId}`;
      }
    }

    const posts = await fetchAPI<WPPost[]>(endpoint);
    return posts.map((post) => post.slug);
  } catch {
    return [];
  }
}

export function getFeaturedImageUrl(post: WPPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name || 'Winnie Team';
}

export function getCategoryNames(post: WPPost): string[] {
  return post._embedded?.['wp:term']?.[0]?.map((term) => term.name) || [];
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export function formatDate(dateString: string, locale: string = 'ko'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === 'ko' ? 'ko-KR' : locale === 'vi' ? 'vi-VN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function calculateReadingTime(content: string, locale: string = 'ko'): number {
  const plainText = stripHtml(content);
  const wordsPerMinute = locale === 'en' ? 200 : 500;
  const textLength = locale === 'en' ? plainText.split(/\s+/).length : plainText.length;
  return Math.max(1, Math.ceil(textLength / wordsPerMinute));
}

export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
