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
  getAuthorName,
  getCategoryNames,
  stripHtml,
  formatDate,
} from '@/lib/wordpress';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  const locales = ['ko', 'vi', 'en'];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: 'Not Found' };
  }

  const featuredImage = getFeaturedImageUrl(post);

  return {
    title: stripHtml(post.title.rendered),
    description: stripHtml(post.excerpt.rendered).slice(0, 160),
    openGraph: {
      type: 'article',
      title: stripHtml(post.title.rendered),
      description: stripHtml(post.excerpt.rendered).slice(0, 160),
      images: featuredImage ? [{ url: featuredImage }] : [],
      publishedTime: post.date,
      modifiedTime: post.modified,
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
  const author = getAuthorName(post);
  const categories = getCategoryNames(post);

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
            블로그로 돌아가기
          </Link>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-[var(--color-primary-50)] px-3 py-1 text-sm font-medium text-[var(--color-primary-600)]"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date, locale)}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {author}
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
              공유하기
            </span>
            <div className="flex gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://mywinnie.com/${locale}/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
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
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-[var(--color-primary-50)] p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900">위니 앱에서 더 많은 혜택을 만나보세요</h3>
            <p className="mt-2 text-gray-600">베트남 로컬 가게의 회원권을 한눈에 검색하고 구매하세요</p>
            <a
              href="#download"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-cta-500)] px-8 font-semibold text-white hover:bg-[var(--color-cta-600)]"
            >
              앱 다운로드
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
