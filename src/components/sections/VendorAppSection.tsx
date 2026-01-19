'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function VendorAppSection() {
  const t = useTranslations('vendorApp');

  return (
    <section id="vendor-app" className="relative overflow-hidden bg-[var(--color-secondary-100)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-[var(--color-secondary-600)]">{t('badge')}</span>
            <span className="text-lg text-gray-600">{t('tagline')}</span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative order-2 lg:order-1"
          >
            <div className="flex justify-center gap-4">
              {/* Phone Mockup 1 */}
              <div className="relative w-40 h-72 bg-white rounded-3xl shadow-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--color-secondary-100)] flex items-center justify-center">
                    <span className="text-2xl">W</span>
                  </div>
                  <p className="text-xs text-gray-500">winnie</p>
                  <p className="mt-2 text-xs text-gray-400">{t('appPreview')}</p>
                </div>
              </div>

              {/* Feature Card */}
              <div className="relative w-48 rounded-3xl bg-[var(--color-secondary-500)] p-6 text-white shadow-xl">
                <h4 className="text-lg font-bold leading-tight">{t('featureCard.title')}</h4>
                <p className="mt-2 text-sm text-white/80">{t('featureCard.description')}</p>
                <a
                  href="https://winnievendor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white hover:bg-white/30 transition-colors"
                >
                  {t('featureCard.cta')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              {/* Features */}
              <div className="space-y-6">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-secondary-100)]">
                      <span className="text-[var(--color-secondary-600)] text-xl">{t(`features.${index}.icon`)}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t(`features.${index}.title`)}</h4>
                      <p className="mt-1 text-sm text-gray-600">{t(`features.${index}.description`)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://winnievendor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-secondary-500)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-secondary-600)] transition-colors"
              >
                {t('ctaButton')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
