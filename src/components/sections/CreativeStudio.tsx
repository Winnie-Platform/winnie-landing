'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Palette, Video, PenTool, Camera,
  Megaphone, BarChart, Sparkles, ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Palette, key: 'branding' },
  { icon: Video, key: 'video' },
  { icon: PenTool, key: 'design' },
  { icon: Camera, key: 'photo' },
  { icon: Megaphone, key: 'social' },
  { icon: BarChart, key: 'marketing' },
];

export default function CreativeStudio() {
  const t = useTranslations('creativeStudio');
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
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
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="creative-studio"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-[var(--color-brand-900)]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-brand-600)] rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-brand-400)] rounded-full blur-[128px] opacity-15" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-[var(--color-brand-300)]" />
            <span className="text-sm font-medium text-white/90">{t('badge')}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t('title')}
          </h2>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.key}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-brand-500)] to-[var(--color-brand-700)] flex items-center justify-center mb-6 shadow-lg shadow-[var(--color-brand-500)]/20">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-white/60 leading-relaxed mb-6">
                {t(`services.${service.key}.description`)}
              </p>

              {/* Hover arrow */}
              <div className="flex items-center gap-2 text-[var(--color-brand-300)] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">{t('learnMore')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-brand-500)]/0 to-[var(--color-brand-600)]/0 group-hover:from-[var(--color-brand-500)]/5 group-hover:to-[var(--color-brand-600)]/10 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-gray-900 font-medium transition-all hover:shadow-xl hover:shadow-white/20 hover:scale-105"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
