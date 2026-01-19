'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Download, Search, Heart } from 'lucide-react';

const steps = [
  { icon: Download, key: '0' },
  { icon: Search, key: '1' },
  { icon: Heart, key: '2' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[var(--color-brand-50)] opacity-40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          {/* Mobile: Vertical layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 h-8 w-0.5 bg-gradient-to-b from-[var(--color-brand-300)] to-[var(--color-brand-100)]" />
                )}

                <div className="flex items-start gap-5">
                  {/* Number + Icon container */}
                  <div className="relative flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-600)] shadow-lg shadow-[var(--color-brand-500)]/25">
                      <step.icon className="h-7 w-7 text-white" strokeWidth={2} />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-[var(--color-brand-600)] shadow-md ring-2 ring-[var(--color-brand-100)]">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal layout with connector */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-[var(--color-brand-200)] via-[var(--color-brand-400)] to-[var(--color-brand-200)]" />

              <div className="grid grid-cols-3 gap-8 lg:gap-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.key}
                    variants={itemVariants}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Number + Icon container */}
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-600)] shadow-xl shadow-[var(--color-brand-500)]/30"
                      >
                        <step.icon className="h-10 w-10 text-white" strokeWidth={1.5} />
                      </motion.div>
                      <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-base font-bold text-[var(--color-brand-600)] shadow-lg ring-2 ring-[var(--color-brand-100)]">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6 lg:mt-8">
                      <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl">
                        {t(`steps.${step.key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed lg:text-base lg:mt-3">
                        {t(`steps.${step.key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand-600)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--color-brand-500)]/30 transition-all duration-300 hover:bg-[var(--color-brand-700)] hover:shadow-xl hover:shadow-[var(--color-brand-500)]/40 hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-base"
          >
            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
            {t('cta') as string}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
