'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Apple, Play, Download, Star, Shield, Zap } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[var(--color-primary-50)] via-white to-[var(--color-secondary-50)] pt-20">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[var(--color-primary-200)] to-[var(--color-primary-100)] opacity-60 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[var(--color-secondary-200)] to-[var(--color-secondary-100)] opacity-40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-[var(--color-cta-100)] to-transparent opacity-50 blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-lg shadow-black/5 ring-1 ring-black/5 backdrop-blur-md"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">4.8 (1,200+ reviews)</span>
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="inline-block">{t('title')}</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              {t('subtitle')}
            </p>

            {/* Trust indicators - glassmorphism cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              <div className="flex items-center gap-2 rounded-xl bg-white/60 px-4 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                <Shield className="h-5 w-5 text-[var(--color-primary-500)]" />
                <span className="text-sm font-medium text-gray-700">Secure</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/60 px-4 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                <Zap className="h-5 w-5 text-[var(--color-cta-500)]" />
                <span className="text-sm font-medium text-gray-700">Fast</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/60 px-4 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
                <Download className="h-5 w-5 text-[var(--color-secondary-500)]" />
                <span className="text-sm font-medium text-gray-700">Free</span>
              </div>
            </motion.div>

            {/* Stats with modern styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-start"
            >
              {[
                { value: '10K+', label: 'Downloads' },
                { value: '500+', label: 'Partners' },
                { value: '4.8', label: 'Rating' },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 200 }}
                    className="text-3xl font-bold text-gray-900 sm:text-4xl"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="https://apps.apple.com/app/winnie"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gray-900 px-6 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/20 sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 transition-opacity group-hover:opacity-100" />
                <Apple className="relative h-6 w-6" />
                <div className="relative text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mywinnie"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gray-900 px-6 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/20 sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 transition-opacity group-hover:opacity-100" />
                <Play className="relative h-6 w-6" />
                <div className="relative text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* App Preview with 3D perspective */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
            style={{ perspective: '1000px' }}
          >
            {/* Phone mockup with 3D transform */}
            <motion.div
              className="relative"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[3rem] bg-gradient-to-b from-gray-800 to-gray-900 p-2 shadow-2xl shadow-gray-900/30 sm:h-[620px] sm:w-[310px]">
                {/* Screen reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[var(--color-primary-500)] to-[var(--color-primary-700)]">
                  {/* Dynamic island */}
                  <div className="absolute left-1/2 top-3 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />

                  {/* App content */}
                  <div className="flex h-full flex-col p-6 pt-14">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-white">winnie</span>
                      <div className="h-9 w-9 rounded-full bg-white/20 backdrop-blur-sm" />
                    </div>

                    {/* Search bar */}
                    <div className="mb-4 rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-white/30" />
                        <div className="h-3 w-32 rounded bg-white/30" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <p className="text-sm font-medium text-white/90">Popular near you</p>
                      <div className="mt-3 space-y-2">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.15 }}
                            className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-sm"
                          >
                            <div className="h-12 w-12 rounded-xl bg-white/20" />
                            <div className="flex-1">
                              <div className="h-3 w-24 rounded bg-white/40" />
                              <div className="mt-2 h-2 w-16 rounded bg-white/25" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="rounded-2xl bg-[var(--color-cta-500)] p-4 text-center shadow-lg shadow-[var(--color-cta-500)]/30"
                      >
                        <p className="font-semibold text-white">Get Free Voucher</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements with improved glassmorphism */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -left-6 top-24 rounded-2xl bg-white/90 p-4 shadow-xl shadow-black/10 ring-1 ring-black/5 backdrop-blur-md sm:-left-12"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-[var(--color-secondary-100)] p-2">
                    <Download className="h-4 w-4 text-[var(--color-secondary-600)]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Free Download</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1, ease: 'easeInOut' }}
                className="absolute -right-4 bottom-36 rounded-2xl bg-white/90 p-4 shadow-xl shadow-black/10 ring-1 ring-black/5 backdrop-blur-md sm:-right-10"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-yellow-100 p-2">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">4.8 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-gray-400">Scroll</span>
          <div className="h-10 w-6 rounded-full border-2 border-gray-300/50 p-1">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="h-2 w-2 rounded-full bg-gray-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
