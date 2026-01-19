'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function NewsSection() {
  const t = useTranslations('news');
  const locale = useLocale();

  // Static news items (can be replaced with dynamic data from Strapi)
  const newsItems = [
    {
      id: 1,
      image: '/images/news-1.jpg',
      title: t('items.0.title'),
      excerpt: t('items.0.excerpt'),
      link: `/${locale}/blog`,
    },
    {
      id: 2,
      image: '/images/news-2.jpg',
      title: t('items.1.title'),
      excerpt: t('items.1.excerpt'),
      link: `/${locale}/blog`,
    },
    {
      id: 3,
      image: '/images/news-3.jpg',
      title: t('items.2.title'),
      excerpt: t('items.2.excerpt'),
      link: `/${locale}/blog`,
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[var(--color-primary-500)] uppercase tracking-wider mb-2">
            {t('badge')}
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
        </motion.div>

        {/* News Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={item.link} className="block">
                <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] mb-4">
                  <div className="h-full w-full bg-gradient-to-br from-[var(--color-primary-100)] to-[var(--color-secondary-100)] flex items-center justify-center">
                    <span className="text-4xl opacity-50">📰</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[var(--color-primary-500)] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {item.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-[var(--color-primary-500)]">
                  {t('readMore')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {t('viewAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
