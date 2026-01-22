'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionTitle, Card } from '@/components/ui';

const faqs = [
  {
    question: '위니 앱은 무료인가요?',
    answer: '네, 위니 앱은 완전 무료입니다. App Store와 Google Play에서 무료로 다운로드하실 수 있습니다.',
  },
  {
    question: '어떤 가게에서 사용할 수 있나요?',
    answer: '베트남 전역의 다양한 업종의 파트너 가게에서 사용 가능합니다. 음식점, 카페, 뷰티샵, 피트니스 센터 등 다양한 업종이 입점해 있습니다.',
  },
  {
    question: '회원권 결제는 어떻게 하나요?',
    answer: '위니는 직접 지불 방식을 사용합니다. 가게에서 직접 결제하시면 되며, 플랫폼 수수료가 없어 더 합리적인 가격에 이용 가능합니다.',
  },
  {
    question: '회원권 환불이 가능한가요?',
    answer: '환불 정책은 각 가게별로 다릅니다. 구매 전 가게의 환불 정책을 확인해 주세요. 문의사항은 앱 내 채팅으로 가게에 직접 문의하실 수 있습니다.',
  },
  {
    question: '사업자로 입점하려면 어떻게 하나요?',
    answer: 'winnievendor.com에서 비즈니스 포털에 가입하시면 됩니다. 간단한 가게 정보 등록 후 바로 회원권 상품을 등록하실 수 있습니다.',
  },
  {
    question: '한국어 외 다른 언어도 지원하나요?',
    answer: '네, 위니 앱과 웹사이트는 한국어, 베트남어, 영어를 지원합니다. 앱 내에서 언어를 변경하실 수 있습니다.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="자주 묻는 질문"
          subtitle="궁금한 점이 있으신가요?"
          align="center"
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-gray-500 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-t border-gray-100 px-6 py-5">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            더 궁금한 점이 있으신가요?{' '}
            <a
              href="mailto:winnie@yeowubie.com"
              className="font-medium text-[var(--color-primary-500)] hover:underline"
            >
              문의하기
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
