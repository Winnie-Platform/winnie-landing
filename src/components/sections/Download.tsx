'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Apple, Play, QrCode } from 'lucide-react';

export default function Download() {
  const t = useTranslations('download');

  return (
    <section id="download" className="relative overflow-hidden bg-[var(--color-primary-500)] py-20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center text-white lg:text-left"
          >
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {t('subtitle')}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://apps.apple.com/app/winnie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 text-gray-900 transition-transform hover:scale-105 sm:w-auto"
              >
                <Apple className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download on the</div>
                  <div className="text-lg font-semibold">{t('appStore')}</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mywinnie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 text-gray-900 transition-transform hover:scale-105 sm:w-auto"
              >
                <Play className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Get it on</div>
                  <div className="text-lg font-semibold">{t('playStore')}</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <div className="text-center">
                <div className="mb-4 flex h-48 w-48 items-center justify-center rounded-2xl bg-gray-100">
                  <QrCode className="h-32 w-32 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-600">QR 코드를 스캔하여</p>
                <p className="text-sm font-medium text-gray-600">앱을 다운로드하세요</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
