'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, Globe, Map, ArrowRight, ArrowLeftRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 'winnie',
    icon: Smartphone,
    color: 'var(--color-brand-600)',
    bgColor: 'var(--color-brand-100)',
  },
  {
    id: 'vendor',
    icon: Globe,
    color: '#F97316',
    bgColor: '#FFF7ED',
  },
  {
    id: 'yellow',
    icon: Map,
    color: '#EAB308',
    bgColor: '#FEFCE8',
  },
];

export default function Ecosystem() {
  const t = useTranslations('ecosystem');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const connectorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Connectors animation
      gsap.fromTo(
        connectorsRef.current?.children || [],
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 0.5,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[var(--color-brand-100)] rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span className="inline-block text-sm font-semibold text-[var(--color-brand-600)] uppercase tracking-wider mb-4">
            {t('badge')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Ecosystem Diagram */}
        <div className="relative">
          {/* Cards Container */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/70 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: product.bgColor }}
                >
                  <product.icon
                    className="w-7 h-7"
                    style={{ color: product.color }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`products.${product.id}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t(`products.${product.id}.description`)}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: product.color }}
                      />
                      {t(`products.${product.id}.features.${i}`)}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href={`#${product.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: product.color }}
                >
                  {t('learnMore')}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

          {/* Connection Lines (Desktop) */}
          <div
            ref={connectorsRef}
            className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 justify-center items-center pointer-events-none"
            style={{ marginTop: '-80px' }}
          >
            {/* Left connector */}
            <div className="absolute left-[30%] flex items-center gap-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[var(--color-brand-400)] to-orange-400" />
              <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-[var(--color-brand-400)]" />
            </div>

            {/* Right connector */}
            <div className="absolute right-[30%] flex items-center gap-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400" />
              <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                <ArrowLeftRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">{t('cta.text')}</p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-white font-medium transition-all hover:bg-gray-800 hover:shadow-xl"
          >
            {t('cta.button')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
