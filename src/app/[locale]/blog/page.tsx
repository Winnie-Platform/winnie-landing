import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';
import {
  getArticles,
  getStrapiImageUrl,
  formatDate,
  stripHtml,
  truncateText,
  calculateReadingTime,
} from '@/lib/strapi';
import { Calendar, User, Clock } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string; category?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const descriptions: Record<string, string> = {
    ko: '위니 블로그 - 베트남 로컬 비즈니스, 회원권 활용 팁, 파트너 가게 소개',
    vi: 'Blog Winnie - Kinh doanh địa phương Việt Nam, mẹo sử dụng thẻ thành viên',
    en: 'Winnie Blog - Vietnam local business, membership tips, partner stores',
  };

  return {
    title: `Blog | ${t('title')}`,
    description: descriptions[locale] || descriptions.ko,
  };
}

export default async function BlogPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { page: pageParam, category } = await searchParams;
  setRequestLocale(locale);

  const page = parseInt(pageParam || '1');
  const { articles, pagination } = await getArticles({
    locale,
    page,
    pageSize: 9,
    category,
  });

  const labels: Record<string, { title: string; subtitle: string; empty: string; prev: string; next: string; minRead: string }> = {
    ko: {
      title: '블로그',
      subtitle: '베트남 로컬 비즈니스, 회원권 활용 팁, 그리고 파트너 가게 소개',
      empty: '아직 게시된 글이 없습니다.',
      prev: '이전',
      next: '다음',
      minRead: '분',
    },
    vi: {
      title: 'Blog',
      subtitle: 'Kinh doanh địa phương Việt Nam, mẹo sử dụng thẻ thành viên',
      empty: 'Chưa có bài viết nào.',
      prev: 'Trước',
      next: 'Sau',
      minRead: 'phút',
    },
    en: {
      title: 'Blog',
      subtitle: 'Vietnam local business, membership tips, and partner stores',
      empty: 'No articles yet.',
      prev: 'Previous',
      next: 'Next',
      minRead: 'min',
    },
  };

  const t = labels[locale] || labels.ko;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900">{t.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{t.subtitle}</p>
          </div>

          {/* Posts Grid */}
          {articles.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => {
                  const featuredImage = getStrapiImageUrl(article.featuredImage);
                  const readingTime = calculateReadingTime(article.content, locale);

                  return (
                    <article
                      key={article.documentId}
                      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                    >
                      <Link href={`/${locale}/blog/${article.slug}`}>
                        {/* Featured Image */}
                        <div className="relative aspect-video overflow-hidden bg-gray-200">
                          {featuredImage ? (
                            <Image
                              src={featuredImage}
                              alt={article.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-primary-200)]">
                              <span className="text-4xl">🐰</span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Category */}
                          {article.category && (
                            <div className="mb-3">
                              <span className="rounded-full bg-[var(--color-primary-50)] px-3 py-1 text-xs font-medium text-[var(--color-primary-600)]">
                                {article.category.name}
                              </span>
                            </div>
                          )}

                          {/* Title */}
                          <h2 className="mb-3 text-xl font-semibold text-gray-900 line-clamp-2">
                            {article.title}
                          </h2>

                          {/* Excerpt */}
                          <p className="mb-4 text-gray-600 line-clamp-3">
                            {article.excerpt || truncateText(stripHtml(article.content), 120)}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(article.publishedAt, locale)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {readingTime}{t.minRead}
                            </span>
                            {article.author && (
                              <span className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                {article.author.name}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              {pagination.pageCount > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                  {page > 1 && (
                    <Link
                      href={`/${locale}/blog?page=${page - 1}${category ? `&category=${category}` : ''}`}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {t.prev}
                    </Link>
                  )}
                  {Array.from({ length: Math.min(pagination.pageCount, 5) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                      <Link
                        key={pageNum}
                        href={`/${locale}/blog?page=${pageNum}${category ? `&category=${category}` : ''}`}
                        className={`rounded-lg px-4 py-2 text-sm font-medium ${
                          pageNum === page
                            ? 'bg-[var(--color-primary-500)] text-white'
                            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </Link>
                    );
                  })}
                  {page < pagination.pageCount && (
                    <Link
                      href={`/${locale}/blog?page=${page + 1}${category ? `&category=${category}` : ''}`}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      {t.next}
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="py-20 text-center">
              <div className="mb-4 text-6xl">📝</div>
              <p className="text-lg text-gray-600">{t.empty}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
