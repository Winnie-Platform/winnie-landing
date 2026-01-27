'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Search, ShoppingCart, MessageCircle, CreditCard,
  BarChart3, Users, Calendar, Bell,
  MapPin, Building2, Star, Filter
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProductShowcaseProps {
  productId: 'winnie' | 'vendor' | 'yellow';
}

const productConfig = {
  winnie: {
    color: 'var(--color-brand-600)',
    bgColor: 'var(--color-brand-50)',
    gradientFrom: 'var(--color-brand-500)',
    gradientTo: 'var(--color-brand-700)',
    icons: [Search, ShoppingCart, MessageCircle, CreditCard],
    mockupImage: '/images/winnieapp.svg',
  },
  vendor: {
    color: '#F97316',
    bgColor: '#FFF7ED',
    gradientFrom: '#FB923C',
    gradientTo: '#EA580C',
    icons: [BarChart3, Users, Calendar, Bell],
    mockupImage: '/images/winnievendor.svg',
  },
  yellow: {
    color: '#EAB308',
    bgColor: '#FEFCE8',
    gradientFrom: '#FACC15',
    gradientTo: '#CA8A04',
    icons: [MapPin, Building2, Star, Filter],
    mockupImage: '/images/yellowwinnie.svg',
  },
};

export default function ProductShowcase({ productId }: ProductShowcaseProps) {
  const t = useTranslations(`productShowcase.${productId}`);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const config = productConfig[productId];
  const isReversed = productId === 'vendor';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content slide in
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: isReversed ? 50 : -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Features stagger
      gsap.fromTo(
        featuresRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Image parallax
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: isReversed ? -50 : 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Continuous parallax on scroll
      gsap.to(imageRef.current, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isReversed]);

  return (
    <section
      id={productId}
      ref={sectionRef}
      className="relative py-24 lg:py-32"
      style={{ backgroundColor: productId === 'vendor' ? 'white' : config.bgColor }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div ref={contentRef} className={isReversed ? 'lg:order-2' : ''}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
              style={{ backgroundColor: config.bgColor, border: `1px solid ${config.color}20` }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: config.color }}
              />
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: config.color }}
              >
                {t('badge')}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t('title')}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {t('description')}
            </p>

            {/* Features Grid */}
            <div ref={featuresRef} className="grid sm:grid-cols-2 gap-4">
              {config.icons.map((Icon, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: config.bgColor }}
                  >
                    <Icon className="w-5 h-5" style={{ color: config.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t(`features.${index}.title`)}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t(`features.${index}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Mockup */}
          <div ref={imageRef} className={isReversed ? 'lg:order-1' : ''}>
            <div className="relative flex justify-center">
              {/* Glow */}
              <div
                className="absolute inset-0 blur-3xl opacity-30 scale-90"
                style={{
                  background: `linear-gradient(135deg, ${config.gradientFrom}, ${config.gradientTo})`,
                  borderRadius: '3rem',
                }}
              />

              {/* Phone Mockup Image */}
              <div className="relative mx-auto max-w-[280px] lg:max-w-[320px]">
                <Image
                  src={config.mockupImage}
                  alt={`${productId} app mockup`}
                  width={320}
                  height={640}
                  className="w-full h-auto drop-shadow-2xl"
                  priority={productId === 'winnie'}
                />
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                style={{ animation: 'float 3s ease-in-out infinite' }}
              >
                {(() => {
                  const Icon = config.icons[0];
                  return <Icon className="w-8 h-8" style={{ color: config.color }} />;
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
