import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';
import {
  getPosts,
  getFeaturedImageUrl,
  getAuthorName,
  getCategoryNames,
  stripHtml,
  formatDate,
} from '@/lib/wordpress';
import { Calendar, User, Tag } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: `Blog | ${t('title')}`,
    description: 'Winnie 블로그 - 베트남 로컬 비즈니스, 회원권 활용 팁, 파트너 가게 소개',
  };
}

export default async function BlogPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { page: pageParam } = await searchParams;
  setRequestLocale(locale);

  const page = parseInt(pageParam || '1');
  const { posts, totalPages, total } = await getPosts({ page, perPage: 9 });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900">블로그</h1>
            <p className="mt-4 text-lg text-gray-600">
              베트남 로컬 비즈니스, 회원권 활용 팁, 그리고 파트너 가게 소개
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
                  const featuredImage = getFeaturedImageUrl(post);
                  const author = getAuthorName(post);
                  const categories = getCategoryNames(post);

                  return (
                    <article
                      key={post.id}
                      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg"
                    >
                      <Link href={`/${locale}/blog/${post.slug}`}>
                        {/* Featured Image */}
                        <div className="relative aspect-video overflow-hidden bg-gray-200">
                          {featuredImage ? (
                            <Image
                              src={featuredImage}
                              alt={post.title.rendered}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <span className="text-4xl">🐰</span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Categories */}
                          {categories.length > 0 && (
                            <div className="mb-3 flex flex-wrap gap-2">
                              {categories.slice(0, 2).map((cat) => (
                                <span
                                  key={cat}
                                  className="rounded-full bg-[var(--color-primary-50)] px-3 py-1 text-xs font-medium text-[var(--color-primary-600)]"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Title */}
                          <h2
                            className="mb-3 text-xl font-semibold text-gray-900 line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />

                          {/* Excerpt */}
                          <p className="mb-4 text-gray-600 line-clamp-3">
                            {stripHtml(post.excerpt.rendered)}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(post.date, locale)}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {author}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                  {page > 1 && (
                    <Link
                      href={`/${locale}/blog?page=${page - 1}`}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      이전
                    </Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link
                      key={p}
                      href={`/${locale}/blog?page=${p}`}
                      className={`rounded-lg px-4 py-2 text-sm font-medium ${
                        p === page
                          ? 'bg-[var(--color-primary-500)] text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {p}
                    </Link>
                  ))}
                  {page < totalPages && (
                    <Link
                      href={`/${locale}/blog?page=${page + 1}`}
                      className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      다음
                    </Link>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-gray-600">아직 게시된 글이 없습니다.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
