/**
 * Strapi CMS API Client
 *
 * 다국어 별도 발행 방식 (Separate Publication per Locale)
 * - 각 언어별로 독립적인 게시물 발행
 * - locale 필드로 언어 구분
 * - translations 관계로 다른 언어 버전 연결
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

// ============================================
// Types
// ============================================

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string; width: number; height: number };
    small?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    large?: { url: string; width: number; height: number };
  };
}

export interface StrapiAuthor {
  id: number;
  name: string;
  bio?: string;
  avatar?: StrapiImage;
}

export interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
}

export interface StrapiArticle {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  locale: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  featuredImage?: StrapiImage;
  author?: StrapiAuthor;
  category?: StrapiCategory;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
  };
  // 다른 언어 버전 연결 (다국어 별도 발행 구조)
  localizations?: Array<{
    id: number;
    documentId: string;
    locale: string;
    slug: string;
  }>;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiError {
  status: number;
  name: string;
  message: string;
}

// ============================================
// API Client
// ============================================

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add authorization if token exists
  if (STRAPI_API_TOKEN) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`;
  }

  const res = await fetch(url, {
    ...options,
    headers,
    next: { revalidate: 3600 }, // ISR: revalidate every hour
  });

  if (!res.ok) {
    const error: StrapiError = await res.json().catch(() => ({
      status: res.status,
      name: 'FetchError',
      message: `Strapi API error: ${res.status}`,
    }));
    throw new Error(error.message);
  }

  return res.json();
}

// ============================================
// Articles API (다국어 별도 발행)
// ============================================

/**
 * 특정 언어의 게시물 목록 조회
 * 다국어 별도 발행: locale 파라미터로 해당 언어의 게시물만 조회
 */
export async function getArticles(params: {
  locale: string;
  page?: number;
  pageSize?: number;
  category?: string;
  search?: string;
} = { locale: 'ko' }): Promise<{
  articles: StrapiArticle[];
  pagination: { page: number; pageSize: number; pageCount: number; total: number };
}> {
  const { locale, page = 1, pageSize = 10, category, search } = params;

  const queryParams = new URLSearchParams({
    'pagination[page]': page.toString(),
    'pagination[pageSize]': pageSize.toString(),
    'populate': '*',
    'sort': 'publishedAt:desc',
    'locale': locale,
  });

  // Category filter
  if (category) {
    queryParams.set('filters[category][slug][$eq]', category);
  }

  // Search filter
  if (search) {
    queryParams.set('filters[$or][0][title][$containsi]', search);
    queryParams.set('filters[$or][1][content][$containsi]', search);
  }

  try {
    const response = await fetchAPI<StrapiResponse<StrapiArticle[]>>(
      `/articles?${queryParams}`
    );

    return {
      articles: response.data || [],
      pagination: response.meta.pagination || {
        page: 1,
        pageSize: 10,
        pageCount: 0,
        total: 0,
      },
    };
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return {
      articles: [],
      pagination: { page: 1, pageSize: 10, pageCount: 0, total: 0 },
    };
  }
}

/**
 * 슬러그로 특정 게시물 조회
 * 다국어 별도 발행: locale과 slug 조합으로 유니크한 게시물 조회
 */
export async function getArticleBySlug(
  slug: string,
  locale: string
): Promise<StrapiArticle | null> {
  try {
    const queryParams = new URLSearchParams({
      'filters[slug][$eq]': slug,
      'locale': locale,
      'populate': '*',
    });

    const response = await fetchAPI<StrapiResponse<StrapiArticle[]>>(
      `/articles?${queryParams}`
    );

    return response.data?.[0] || null;
  } catch (error) {
    console.error('Failed to fetch article:', error);
    return null;
  }
}

/**
 * 모든 게시물 슬러그 조회 (정적 생성용)
 * 다국어 별도 발행: 모든 언어의 모든 슬러그 반환
 */
export async function getAllArticleSlugs(): Promise<
  Array<{ slug: string; locale: string }>
> {
  try {
    const locales = ['ko', 'vi', 'en'];
    const allSlugs: Array<{ slug: string; locale: string }> = [];

    for (const locale of locales) {
      const queryParams = new URLSearchParams({
        'fields[0]': 'slug',
        'pagination[pageSize]': '100',
        'locale': locale,
      });

      const response = await fetchAPI<StrapiResponse<Array<{ slug: string }>>>(
        `/articles?${queryParams}`
      );

      const slugs = response.data?.map((article) => ({
        slug: article.slug,
        locale,
      })) || [];

      allSlugs.push(...slugs);
    }

    return allSlugs;
  } catch (error) {
    console.error('Failed to fetch article slugs:', error);
    return [];
  }
}

/**
 * 게시물의 다른 언어 버전 조회
 * 다국어 별도 발행: localizations 관계를 통해 번역 버전 확인
 */
export async function getArticleLocalizations(
  documentId: string
): Promise<Array<{ locale: string; slug: string }>> {
  try {
    const queryParams = new URLSearchParams({
      'populate': 'localizations',
    });

    const response = await fetchAPI<StrapiResponse<StrapiArticle>>(
      `/articles/${documentId}?${queryParams}`
    );

    return response.data?.localizations?.map((loc) => ({
      locale: loc.locale,
      slug: loc.slug,
    })) || [];
  } catch (error) {
    console.error('Failed to fetch localizations:', error);
    return [];
  }
}

// ============================================
// Categories API
// ============================================

export async function getCategories(locale: string = 'ko'): Promise<StrapiCategory[]> {
  try {
    const queryParams = new URLSearchParams({
      'locale': locale,
      'pagination[pageSize]': '100',
    });

    const response = await fetchAPI<StrapiResponse<StrapiCategory[]>>(
      `/categories?${queryParams}`
    );

    return response.data || [];
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

// ============================================
// Helper Functions
// ============================================

/**
 * Strapi 이미지 URL을 절대 경로로 변환
 */
export function getStrapiImageUrl(image?: StrapiImage | null): string | null {
  if (!image?.url) return null;

  // 이미 절대 경로인 경우
  if (image.url.startsWith('http')) {
    return image.url;
  }

  // 상대 경로인 경우 Strapi URL 추가
  return `${STRAPI_URL}${image.url}`;
}

/**
 * 반응형 이미지 URL 가져오기
 */
export function getStrapiResponsiveImage(
  image?: StrapiImage | null,
  size: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'
): string | null {
  if (!image) return null;

  const formatUrl = image.formats?.[size]?.url;
  if (formatUrl) {
    return formatUrl.startsWith('http') ? formatUrl : `${STRAPI_URL}${formatUrl}`;
  }

  return getStrapiImageUrl(image);
}

/**
 * 날짜 포맷팅
 */
export function formatDate(dateString: string, locale: string = 'ko'): string {
  const date = new Date(dateString);
  const localeMap: Record<string, string> = {
    ko: 'ko-KR',
    vi: 'vi-VN',
    en: 'en-US',
  };

  return date.toLocaleDateString(localeMap[locale] || 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * HTML 태그 제거
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * 텍스트 자르기
 */
export function truncateText(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * 읽기 시간 계산 (한국어/베트남어/영어 기준)
 */
export function calculateReadingTime(content: string, locale: string = 'ko'): number {
  const plainText = stripHtml(content);
  const wordsPerMinute = locale === 'en' ? 200 : 500; // 영어는 단어 기준, 한국어/베트남어는 글자 기준
  const textLength = locale === 'en' ? plainText.split(/\s+/).length : plainText.length;
  return Math.ceil(textLength / wordsPerMinute);
}
