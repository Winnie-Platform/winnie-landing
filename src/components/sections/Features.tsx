'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, MessageCircle, Wallet } from 'lucide-react';

const features = [
  { key: 'search', icon: Search, color: 'var(--color-primary-500)' },
  { key: 'purchase', icon: ShoppingCart, color: 'var(--color-cta-500)' },
  { key: 'chat', icon: MessageCircle, color: 'var(--color-secondary-500)' },
  { key: 'manage', icon: Wallet, color: 'var(--color-accent-500)' },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            스마트한 소비생활을 위한 모든 기능이 하나의 앱에
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl bg-gray-50 p-8 transition-all hover:bg-white hover:shadow-xl"
            >
              <div
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon
                  className="h-7 w-7"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t(`${feature.key}.title`)}
              </h3>
              <p className="mt-3 text-gray-600">
                {t(`${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
