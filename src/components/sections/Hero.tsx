'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Apple, Play, Download, Star } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[var(--color-primary-50)] to-white pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-primary-100)] opacity-50 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-[var(--color-secondary-400)] opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">4.8 (1,200+ 리뷰)</span>
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl">
              {t('subtitle')}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 lg:justify-start">
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary-500)]">10,000+</p>
                <p className="text-sm text-gray-500">다운로드</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary-500)]">500+</p>
                <p className="text-sm text-gray-500">파트너 가게</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[var(--color-primary-500)]">4.8</p>
                <p className="text-sm text-gray-500">앱스토어 평점</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://apps.apple.com/app/winnie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-black px-6 text-white transition-transform hover:scale-105 sm:w-auto"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mywinnie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-black px-6 text-white transition-transform hover:scale-105 sm:w-auto"
              >
                <Play className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone mockup placeholder */}
            <div className="relative">
              <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[3rem] bg-gray-900 p-2 shadow-2xl sm:h-[600px] sm:w-[300px]">
                <div className="h-full w-full rounded-[2.5rem] bg-gradient-to-b from-[var(--color-primary-500)] to-[var(--color-primary-700)] p-6">
                  {/* App mockup content */}
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-white">🐰 winnie</span>
                      <div className="h-8 w-8 rounded-full bg-white/20" />
                    </div>
                    <div className="mt-4 rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-white/80">내 주변 인기 회원권</p>
                      <div className="mt-3 space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                            <div className="h-12 w-12 rounded-lg bg-white/20" />
                            <div className="flex-1">
                              <div className="h-3 w-24 rounded bg-white/30" />
                              <div className="mt-2 h-2 w-16 rounded bg-white/20" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="rounded-2xl bg-[var(--color-cta-500)] p-4 text-center">
                        <p className="font-semibold text-white">무료 바우처 받기</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -left-8 top-20 rounded-2xl bg-white p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-[var(--color-secondary-500)]" />
                  <span className="text-sm font-medium">무료 다운로드</span>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute -right-8 bottom-32 rounded-2xl bg-white p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.8점 평점</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">스크롤</span>
          <div className="h-10 w-6 rounded-full border-2 border-gray-300 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="h-2 w-2 rounded-full bg-gray-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
