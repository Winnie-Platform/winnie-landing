'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Bell, Award, TrendingUp, Users, Calendar } from 'lucide-react';
import { SectionTitle, Button, Card } from '@/components/ui';

const customerBenefits = [
  { icon: Heart, key: 0 },
  { icon: Bell, key: 1 },
  { icon: Award, key: 2 },
];

const businessBenefits = [
  { icon: TrendingUp, key: 0 },
  { icon: Users, key: 1 },
  { icon: Calendar, key: 2 },
];

export default function Benefits() {
  const t = useTranslations('benefits');

  return (
    <section id="benefits" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="모두를 위한 혜택"
          subtitle="고객과 사업자 모두 윈-윈하는 플랫폼"
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Customer Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] p-8 text-white"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <span className="text-2xl">👤</span>
            </div>
            <h3 className="text-2xl font-bold">{t('customer.title')}</h3>
            <div className="mt-8 space-y-6">
              {customerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <p className="text-lg">{t(`customer.items.${benefit.key}`)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Business Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-[var(--color-secondary-500)] to-[var(--color-secondary-600)] p-8 text-white"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <span className="text-2xl">🏪</span>
            </div>
            <h3 className="text-2xl font-bold">{t('business.title')}</h3>
            <div className="mt-8 space-y-6">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <p className="text-lg">{t(`business.items.${benefit.key}`)}</p>
                </div>
              ))}
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-8 h-12 rounded-full border-white bg-white px-6 text-[var(--color-secondary-600)] hover:scale-105 hover:bg-white/90"
            >
              <a
                href="https://winnievendor.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                비즈니스 포털 가입하기
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card variant="default" padding="lg" rounded="lg" className="bg-gray-50 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-400)]">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">직접 지불 방식</h3>
            <p className="mx-auto mt-2 max-w-xl text-gray-600">
              위니는 플랫폼 수수료가 없습니다. 고객과 가게 사이의 직접 결제로 투명하고 합리적인 거래를 지원합니다.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
