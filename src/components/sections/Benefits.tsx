'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { UserCheck, Store, CreditCard } from 'lucide-react';

const benefits = [
  { icon: UserCheck, key: 'optimization' },
  { icon: Store, key: 'expansion' },
  { icon: CreditCard, key: 'payment' },
];

export default function Benefits() {
  const t = useTranslations('benefits');

  return (
    <section id="benefits" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[var(--color-primary-500)] uppercase tracking-wider mb-2">
            {t('subtitle')}
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Benefits Grid - 3 columns */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[var(--color-primary-200)] hover:shadow-lg">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-600)] transition-colors group-hover:bg-[var(--color-primary-500)] group-hover:text-white">
                  <benefit.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {t(`items.${benefit.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {t(`items.${benefit.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
