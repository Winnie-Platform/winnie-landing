'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Download() {
  const t = useTranslations('download');

  return (
    <section id="download" className="relative overflow-hidden bg-[var(--color-cta-500)] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {t('title')}
            </h2>
            <p className="mt-3 text-white/80 max-w-md">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Right CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://winnievendor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--color-cta-600)] hover:bg-gray-100 transition-colors"
            >
              {t('ctaButton')}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
