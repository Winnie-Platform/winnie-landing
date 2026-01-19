'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

export default function UserAppSection() {
  const t = useTranslations('userApp');

  return (
    <section id="user-app" className="relative overflow-hidden bg-[var(--color-primary-100)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-[var(--color-primary-600)]">{t('badge')}</span>
            <span className="text-lg text-gray-600">{t('tagline')}</span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left - Feature Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl bg-[var(--color-primary-500)] p-8 text-white overflow-hidden">
              <h3 className="text-2xl font-bold leading-tight lg:text-3xl">
                {t('headline')}
              </h3>

              {/* Phone Mockup Placeholder */}
              <div className="mt-8 flex justify-center">
                <div className="relative w-48 h-80 bg-white/10 rounded-3xl flex items-center justify-center">
                  <div className="text-white/40 text-sm">{t('appPreview')}</div>
                </div>
              </div>

              <a
                href="#download"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[var(--color-primary-600)] hover:bg-gray-100 transition-colors"
              >
                {t('ctaButton')}
              </a>
            </div>
          </motion.div>

          {/* Right - App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              {/* Feature List */}
              <div className="space-y-4">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-100)]">
                      <span className="text-[var(--color-primary-600)] font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t(`features.${index}.title`)}</h4>
                      <p className="mt-1 text-sm text-gray-600">{t(`features.${index}.description`)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href="https://apps.apple.com/app/winnie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
                >
                  <Apple className="h-5 w-5" />
                  <span className="text-sm font-medium">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.mywinnie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-white hover:bg-gray-800 transition-colors"
                >
                  <Play className="h-5 w-5" />
                  <span className="text-sm font-medium">Google Play</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
