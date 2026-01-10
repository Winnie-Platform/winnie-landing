'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, MessageCircle, Wallet, ArrowRight, Sparkles } from 'lucide-react';
import { SectionTitle } from '@/components/ui';

const features = [
  {
    key: 'search',
    icon: Search,
    color: 'var(--color-primary-500)',
    bgColor: 'from-[var(--color-primary-50)] to-[var(--color-primary-100)]',
    gridClass: 'md:col-span-2 md:row-span-2',
    featured: true,
  },
  {
    key: 'purchase',
    icon: ShoppingCart,
    color: 'var(--color-cta-500)',
    bgColor: 'from-orange-50 to-orange-100',
    gridClass: 'md:col-span-1 md:row-span-1',
    featured: false,
  },
  {
    key: 'chat',
    icon: MessageCircle,
    color: 'var(--color-secondary-500)',
    bgColor: 'from-green-50 to-green-100',
    gridClass: 'md:col-span-1 md:row-span-1',
    featured: false,
  },
  {
    key: 'manage',
    icon: Wallet,
    color: 'var(--color-accent-500)',
    bgColor: 'from-purple-50 to-purple-100',
    gridClass: 'md:col-span-2 md:row-span-1',
    featured: false,
  },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="relative overflow-hidden bg-white py-24">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[var(--color-primary-50)] to-transparent opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-[var(--color-secondary-50)] to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('title')}
          subtitle="Everything you need for smart membership management in one app"
          align="center"
        />

        {/* Bento Grid Layout */}
        <div className="mt-16 grid gap-4 md:grid-cols-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative ${feature.gridClass}`}
            >
              <div
                className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${feature.bgColor} p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 ${
                  feature.featured ? 'min-h-[400px] md:min-h-[500px]' : 'min-h-[200px]'
                }`}
              >
                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-white/0 backdrop-blur-0 transition-all duration-500 group-hover:bg-white/20 group-hover:backdrop-blur-sm" />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon with animated background */}
                  <motion.div
                    className="relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}20` }}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="h-7 w-7" style={{ color: feature.color }} />
                    {feature.featured && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -right-1 -top-1"
                      >
                        <Sparkles className="h-4 w-4" style={{ color: feature.color }} />
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Text content */}
                  <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="mt-2 flex-1 text-gray-600 md:text-lg">
                    {t(`${feature.key}.description`)}
                  </p>

                  {/* Featured card extra content */}
                  {feature.featured && (
                    <div className="mt-6">
                      {/* Mini feature list */}
                      <div className="space-y-3">
                        {['Real-time search', 'Location-based', 'Instant results'].map((item, i) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <div
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: feature.color }}
                            />
                            {item}
                          </motion.div>
                        ))}
                      </div>

                      {/* Interactive demo placeholder */}
                      <div className="mt-6 overflow-hidden rounded-2xl bg-white/60 p-4 shadow-inner backdrop-blur-sm">
                        <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
                          <Search className="h-5 w-5 text-gray-400" />
                          <span className="text-sm text-gray-400">Search memberships...</span>
                        </div>
                        <div className="mt-3 space-y-2">
                          {[1, 2].map((i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 rounded-xl bg-white/80 p-3"
                            >
                              <div className="h-10 w-10 rounded-lg bg-gray-100" />
                              <div className="flex-1">
                                <div className="h-2.5 w-20 rounded bg-gray-200" />
                                <div className="mt-1.5 h-2 w-14 rounded bg-gray-100" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Learn more link */}
                  <motion.div
                    className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: feature.color }}
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Decorative gradient orb */}
                <div
                  className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40"
                  style={{ backgroundColor: feature.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            Explore all features
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
