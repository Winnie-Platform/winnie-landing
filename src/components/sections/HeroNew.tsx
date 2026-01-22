'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const appImages = [
  { id: 'winnie', src: '/images/winnieapp.svg', label: 'Winnie' },
  { id: 'vendor', src: '/images/winnievendor.svg', label: 'Winnie Vendor' },
  { id: 'yellow', src: '/images/yellowwinnie.svg', label: 'Yellow Winnie' },
];

export default function HeroNew() {
  const t = useTranslations('hero');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Mobile swipe navigation
  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / appImages.length;
      container.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / appImages.length;
      const newIndex = Math.round(container.scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

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

        {/* App Images - Desktop */}
        <motion.div
          ref={phoneRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-16 lg:mt-20 hidden md:flex justify-center items-end gap-4"
        >
          {/* Main App - Winnie */}
          <div className="relative z-10">
            <div className="relative w-64 sm:w-72 lg:w-80">
              <Image
                src="/images/winnieapp.svg"
                alt="Winnie App"
                width={320}
                height={680}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Left App - Vendor */}
          <div className="absolute left-[5%] sm:left-[10%] lg:left-[15%] bottom-8 -z-0 opacity-70 scale-75">
            <div className="relative w-56 sm:w-64">
              <Image
                src="/images/winnievendor.svg"
                alt="Winnie Vendor"
                width={280}
                height={600}
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right App - Yellow Winnie */}
          <div className="absolute right-[5%] sm:right-[10%] lg:right-[15%] bottom-8 -z-0 opacity-70 scale-75">
            <div className="relative w-56 sm:w-64">
              <Image
                src="/images/yellowwinnie.svg"
                alt="Yellow Winnie"
                width={280}
                height={600}
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* App Images - Mobile Swipeable */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:hidden"
        >
          {/* Swipe Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {appImages.map((app) => (
              <div
                key={app.id}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <div className="relative w-full">
                  <Image
                    src={app.src}
                    alt={app.label}
                    width={280}
                    height={600}
                    className="w-full h-auto drop-shadow-xl"
                    priority
                  />
                </div>
                <p className="text-center text-sm font-medium text-gray-600 mt-3">{app.label}</p>
              </div>
            ))}
          </div>

          {/* Navigation Dots & Arrows */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex gap-2">
              {appImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-6 bg-[var(--color-brand-600)]'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToIndex(Math.min(appImages.length - 1, activeIndex + 1))}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow disabled:opacity-50"
              disabled={activeIndex === appImages.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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
