'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, MessageCircle, Wallet } from 'lucide-react';
import { SectionTitle } from '@/components/ui';

const features = [
  {
    key: 'search',
    icon: Search,
  },
  {
    key: 'purchase',
    icon: ShoppingCart,
  },
  {
    key: 'chat',
    icon: MessageCircle,
  },
  {
    key: 'manage',
    icon: Wallet,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="relative py-24 sm:py-32 lg:py-40 bg-white overflow-hidden">
      {/* Minimal Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-brand-100)] rounded-full blur-[128px] opacity-40 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-brand-50)] rounded-full blur-[96px] opacity-50 translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <SectionTitle
            title={t('title')}
            subtitle={t('subtitle')}
            align="center"
          />
        </motion.div>

        {/* Features Grid - Mobile First */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.key}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full rounded-3xl bg-[var(--color-gray-50)] p-8 sm:p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[var(--color-brand-500)]/10">
                {/* Glassmorphism Overlay on Hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 glass pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[var(--color-brand-100)] transition-all duration-300 group-hover:bg-[var(--color-brand-500)] group-hover:shadow-lg group-hover:shadow-[var(--color-brand-500)]/30"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--color-brand-600)] transition-colors duration-300 group-hover:text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl sm:text-2xl font-bold text-[var(--color-gray-900)] transition-colors duration-300 group-hover:text-[var(--color-brand-700)]">
                    {t(`items.${feature.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-base sm:text-lg leading-relaxed text-[var(--color-gray-500)]">
                    {t(`items.${feature.key}.description`)}
                  </p>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[var(--color-brand-100)] to-transparent rounded-br-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
