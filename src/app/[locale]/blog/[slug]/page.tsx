import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { Header, Footer } from '@/components/layout';
import {
  getPost,
  getPostSlugs,
  getFeaturedImageUrl,
  formatDate,
  stripHtml,
  calculateReadingTime,
  getCategoryNames,
  getAuthorName,
} from '@/lib/wordpress';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';
import { locales } from '@/i18n/config';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];

  // 각 언어별로 해당 언어 카테고리의 슬러그만 가져옴
  for (const locale of locales) {
    const slugs = await getPostSlugs(locale);
    params.push(...slugs.map((slug) => ({ locale, slug })));
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: 'Not Found' };
  }

  const featuredImage = getFeaturedImageUrl(post);

  return {
    title: post.title.rendered,
    description: stripHtml(post.excerpt.rendered).slice(0, 160),
    openGraph: {
      type: 'article',
      title: post.title.rendered,
      description: stripHtml(post.excerpt.rendered).slice(0, 160),
      images: featuredImage ? [{ url: featuredImage }] : [],
      publishedTime: post.date,
      modifiedTime: post.modified,
      locale: locale,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = getFeaturedImageUrl(post);
  const readingTime = calculateReadingTime(post.content.rendered, locale);
  const categories = getCategoryNames(post);
  const authorName = getAuthorName(post);

  const labels: Record<string, { back: string; share: string; cta: string; ctaDesc: string; ctaBtn: string; minRead: string }> = {
    ko: {
      back: '블로그로 돌아가기',
      share: '공유하기',
      cta: '위니 앱에서 더 많은 혜택을 만나보세요',
      ctaDesc: '베트남 로컬 가게의 회원권을 한눈에 검색하고 구매하세요',
      ctaBtn: '앱 다운로드',
      minRead: '분 읽기',
    },
    vi: {
      back: 'Quay lại blog',
      share: 'Chia sẻ',
      cta: 'Khám phá thêm ưu đãi trên Winnie',
      ctaDesc: 'Tìm kiếm và mua thẻ thành viên của các cửa hàng địa phương Việt Nam',
      ctaBtn: 'Tải ứng dụng',
      minRead: 'phút đọc',
    },
    en: {
      back: 'Back to blog',
      share: 'Share',
      cta: 'Discover more benefits on Winnie',
      ctaDesc: 'Search and purchase membership cards from local Vietnamese stores',
      ctaBtn: 'Download App',
      minRead: 'min read',
    },
  };

  const t = labels[locale] || labels.ko;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href={`/${locale}/blog`}
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>

          {/* Category */}
          {categories.length > 0 && (
            <div className="mb-4">
              <span className="rounded-full bg-[var(--color-primary-50)] px-3 py-1 text-sm font-medium text-[var(--color-primary-600)]">
                {categories[0]}
              </span>
            </div>
          )}

          {/* Title */}
          <h1
            className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date, locale)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readingTime} {t.minRead}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {authorName}
            </span>
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={featuredImage}
                alt={stripHtml(post.title.rendered)}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg mt-10 max-w-none prose-headings:font-bold prose-a:text-[var(--color-primary-500)] prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Share */}
          <div className="mt-12 flex items-center gap-4 border-t border-gray-200 pt-8">
            <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Share2 className="h-4 w-4" />
              {t.share}
            </span>
            <div className="flex gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://mywinnie.com/${locale}/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                aria-label="Share on Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://mywinnie.com/${locale}/blog/${slug}`)}&text=${encodeURIComponent(stripHtml(post.title.rendered))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                aria-label="Share on X"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://mywinnie.com/${locale}/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                aria-label="Share on LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-[var(--color-primary-50)] p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900">{t.cta}</h3>
            <p className="mt-2 text-gray-600">{t.ctaDesc}</p>
            <a
              href="#download"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-cta-500)] px-8 font-semibold text-white hover:bg-[var(--color-cta-600)]"
            >
              {t.ctaBtn}
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
