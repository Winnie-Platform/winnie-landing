'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionTitle, Card } from '@/components/ui';

const testimonials = [
  {
    name: '김민수',
    location: '호치민',
    avatar: '👨',
    rating: 5,
    text: '베트남에서 한인 가게 찾기가 너무 편해졌어요. 회원권으로 할인도 받고 일석이조!',
  },
  {
    name: 'Nguyễn Thị',
    location: '하노이',
    avatar: '👩',
    rating: 5,
    text: 'Ứng dụng rất tiện lợi. Quản lý thẻ thành viên dễ dàng và tiết kiệm được nhiều.',
  },
  {
    name: '이정화',
    location: '다낭',
    avatar: '👩',
    rating: 5,
    text: '회원권 관리가 한눈에 돼서 좋아요. 가게 사장님과 채팅도 바로 할 수 있어서 편리해요.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="사용자 후기"
          subtitle="위니를 사용하는 분들의 이야기"
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                variant="outlined"
                padding="lg"
                rounded="lg"
                className="relative shadow-sm"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-gray-100" />

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600">{testimonial.text}</p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
