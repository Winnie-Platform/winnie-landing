'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Smartphone, Search, CreditCard, Gift } from 'lucide-react';
import { SectionTitle, Button } from '@/components/ui';

const steps = [
  { icon: Smartphone, title: '앱 다운로드', desc: 'App Store/Google Play에서 위니 앱을 무료로 다운로드하세요' },
  { icon: Search, title: '주변 가게 검색', desc: '내 위치 기반으로 주변 가게와 회원권을 검색하세요' },
  { icon: CreditCard, title: '회원권 구매', desc: '마음에 드는 가게의 회원권을 간편하게 구매하세요' },
  { icon: Gift, title: '혜택 누리기', desc: '구매한 회원권으로 다양한 혜택과 할인을 누리세요' },
];

export default function HowItWorks() {
  const t = useTranslations();

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="이렇게 시작하세요"
          subtitle="단 4단계로 시작하는 스마트한 소비생활"
          align="center"
        />

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-0 right-0 top-14 hidden h-0.5 bg-gradient-to-r from-[var(--color-primary-500)] via-[var(--color-cta-500)] to-[var(--color-secondary-500)] lg:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number */}
                  <div className="relative z-10 mb-6 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white shadow-lg">
                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-cta-500)] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <step.icon className="h-10 w-10 text-[var(--color-primary-500)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            as="a"
            href="#download"
            variant="cta"
            size="lg"
            className="h-14 rounded-full px-10 text-lg shadow-lg hover:shadow-xl"
          >
            {t('common.getStarted')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
