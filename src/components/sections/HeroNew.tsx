'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroNew() {
  const t = useTranslations('hero');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation on scroll
      gsap.fromTo(
        titleRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '50% top',
            scrub: true,
          },
        }
      );

      // Subtitle parallax
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -80,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '10% top',
            end: '60% top',
            scrub: true,
          },
        }
      );

      // CTA fade out
      gsap.fromTo(
        ctaRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -60,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '20% top',
            end: '70% top',
            scrub: true,
          },
        }
      );

      // Phone scale and move
      gsap.fromTo(
        phoneRef.current,
        { scale: 1, y: 0 },
        {
          scale: 0.8,
          y: -150,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] flex items-start pt-32 lg:pt-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-50)] via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand-100)_0%,_transparent_50%)]" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[var(--color-brand-200)] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[var(--color-brand-100)] rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-100)] border border-[var(--color-brand-200)] px-4 py-2 mb-8"
          >
            <Sparkles className="h-4 w-4 text-[var(--color-brand-600)]" />
            <span className="text-sm font-medium text-[var(--color-brand-700)]">
              {t('badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            ref={subtitleRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#download"
              className="group flex items-center gap-2 rounded-full bg-[var(--color-brand-600)] px-8 py-4 text-white font-medium transition-all hover:bg-[var(--color-brand-700)] hover:shadow-xl hover:shadow-[var(--color-brand-500)]/25"
            >
              {t('cta')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#ecosystem"
              className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-8 py-4 text-gray-700 font-medium transition-all hover:border-gray-400 hover:shadow-lg"
            >
              {t('learnMore')}
            </a>
          </motion.div>
        </div>

        {/* Phone Mockups */}
        <motion.div
          ref={phoneRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-16 lg:mt-20 flex justify-center items-end gap-4"
        >
          {/* Main Phone */}
          <div className="relative z-10">
            <div className="relative w-64 sm:w-72 lg:w-80 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full aspect-[9/19] bg-gradient-to-br from-[var(--color-brand-100)] to-white rounded-[2.5rem] overflow-hidden">
                <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-600)] flex items-center justify-center shadow-lg mb-4">
                    <span className="text-2xl font-bold text-white">W</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Winnie</h3>
                  <p className="text-sm text-gray-500 mt-1">{t('appPreview')}</p>
                </div>
              </div>
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full" />
            </div>
          </div>

          {/* Left Phone (smaller, behind) */}
          <div className="absolute left-[5%] sm:left-[10%] lg:left-[15%] bottom-8 -z-0 opacity-60 scale-75 blur-[1px]">
            <div className="relative w-56 sm:w-64 bg-gray-800 rounded-[2.5rem] p-2.5 shadow-xl">
              <div className="w-full aspect-[9/19] bg-gradient-to-br from-orange-100 to-white rounded-[2rem] overflow-hidden">
                <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow mb-3">
                    <span className="text-lg font-bold text-white">V</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">Vendor</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone (smaller, behind) */}
          <div className="absolute right-[5%] sm:right-[10%] lg:right-[15%] bottom-8 -z-0 opacity-60 scale-75 blur-[1px]">
            <div className="relative w-56 sm:w-64 bg-gray-800 rounded-[2.5rem] p-2.5 shadow-xl">
              <div className="w-full aspect-[9/19] bg-gradient-to-br from-yellow-100 to-white rounded-[2rem] overflow-hidden">
                <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center shadow mb-3">
                    <span className="text-lg font-bold text-white">Y</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">Yellow</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-gray-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
