'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Apple, Play, Star, Shield, Zap, Users } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  const stats = [
    { icon: Users, value: '10K+', label: t('stats.users') },
    { icon: Star, value: '4.8', label: t('stats.rating') },
    { icon: Shield, value: '100%', label: t('stats.secure') },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute inset-0 bg-pattern opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[var(--color-brand-200)] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[var(--color-brand-300)] rounded-full blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-100)] px-4 py-2 mb-6"
            >
              <Zap className="h-4 w-4 text-[var(--color-brand-600)]" />
              <span className="text-sm font-medium text-[var(--color-brand-700)]">{t('badge')}</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/app/winnie"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gray-900 px-6 py-4 text-white transition-all hover:bg-gray-800 hover:shadow-xl active:scale-[0.98]"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                  <div className="text-base font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mywinnie"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-gray-900 px-6 py-4 text-white transition-all hover:bg-gray-800 hover:shadow-xl active:scale-[0.98]"
              >
                <Play className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">Get it on</div>
                  <div className="text-base font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1 text-2xl font-bold text-gray-900">
                    {stat.value}
                    {stat.icon === Star && <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Mockup */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[var(--color-brand-400)] rounded-[3rem] blur-3xl opacity-20 scale-90" />

              {/* Phone Frame */}
              <div className="relative w-64 h-[520px] sm:w-72 sm:h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-[var(--color-brand-100)] to-white rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  {/* App Content Preview */}
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-brand-600)] flex items-center justify-center mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">W</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Winnie</h3>
                    <p className="text-sm text-gray-500 mt-1">{t('appPreview')}</p>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{t('secure')}</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-[var(--color-brand-200)] border-2 border-white" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-gray-700">+10K</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
