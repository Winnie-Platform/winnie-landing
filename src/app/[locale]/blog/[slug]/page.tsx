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
  sanitizeContent,
} from '@/lib/wordpress';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { locales } from '@/i18n/config';
import ShareButtons from './ShareButtons';

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];

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
  const title = stripHtml(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered).slice(0, 160);
  const url = `https://mywinnie.com/${locale}/blog/${slug}`;

  return {
    title,
    description,
    authors: [{ name: getAuthorName(post) }],
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: 'Winnie',
      images: featuredImage
        ? [
            {
              url: featuredImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
      publishedTime: post.date,
      modifiedTime: post.modified,
      locale: locale === 'ko' ? 'ko_KR' : locale === 'vi' ? 'vi_VN' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: featuredImage ? [featuredImage] : [],
    },
    alternates: {
      canonical: url,
      languages: {
        'ko': `https://mywinnie.com/ko/blog/${slug}`,
        'vi': `https://mywinnie.com/vi/blog/${slug}`,
        'en': `https://mywinnie.com/en/blog/${slug}`,
      },
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
  const postUrl = `https://mywinnie.com/${locale}/blog/${slug}`;
  const postTitle = stripHtml(post.title.rendered);

  const labels: Record<string, {
    back: string;
    share: string;
    cta: string;
    ctaDesc: string;
    ctaBtn: string;
    minRead: string;
  }> = {
    ko: {
      back: '블로그로 돌아가기',
      share: '공유하기',
      cta: '위니 앱에서 더 많은 혜택을 만나보세요',
      ctaDesc: '베트남 로컬 가게의 회원권을 한눈에 검색하고 구매하세요',
      ctaBtn: '앱 다운로드',
      minRead: '분',
    },
    vi: {
      back: 'Quay lại blog',
      share: 'Chia sẻ',
      cta: 'Khám phá thêm ưu đãi trên Winnie',
      ctaDesc: 'Tìm kiếm và mua thẻ thành viên của các cửa hàng địa phương Việt Nam',
      ctaBtn: 'Tải ứng dụng',
      minRead: 'phút',
    },
    en: {
      back: 'Back to blog',
      share: 'Share',
      cta: 'Discover more benefits on Winnie',
      ctaDesc: 'Search and purchase membership cards from local Vietnamese stores',
      ctaBtn: 'Download App',
      minRead: 'min',
    },
  };

  const t = labels[locale] || labels.ko;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20 sm:pt-24">
        <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {/* Back link */}
          <Link
            href={`/${locale}/blog`}
            className="mb-6 sm:mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>

          {/* Category */}
          {categories.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <span className="rounded-full bg-[var(--color-brand-50)] px-3 py-1.5 text-xs sm:text-sm font-medium text-[var(--color-brand-600)]">
                {categories[0]}
              </span>
            </div>
          )}

          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-5 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date, locale)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {readingTime}{t.minRead}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {authorName}
            </span>
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div className="relative mt-6 sm:mt-8 aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
              <Image
                src={featuredImage}
                alt={postTitle}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
                quality={85}
              />
            </div>
          )}

          {/* Content */}
          <div
            className="blog-content mt-8 sm:mt-10"
            dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content.rendered) }}
          />

          {/* Share */}
          <div className="mt-10 sm:mt-12 border-t border-gray-200 pt-6 sm:pt-8">
            <p className="text-sm font-medium text-gray-600 mb-4">{t.share}</p>
            <ShareButtons url={postUrl} title={postTitle} />
          </div>

          {/* CTA */}
          <div className="mt-10 sm:mt-12 rounded-2xl bg-gradient-to-br from-[var(--color-brand-50)] to-[var(--color-brand-100)] p-6 sm:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">{t.cta}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">{t.ctaDesc}</p>
            <a
              href="#download"
              className="mt-5 sm:mt-6 inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-[var(--color-brand-600)] px-6 sm:px-8 text-sm sm:text-base font-semibold text-white hover:bg-[var(--color-brand-700)] transition-colors"
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
