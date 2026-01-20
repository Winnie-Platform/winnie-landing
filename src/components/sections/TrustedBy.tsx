'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: 'Netflix', width: 80 },
  { name: 'Etsy', width: 60 },
  { name: 'Linear', width: 70 },
  { name: 'Notion', width: 80 },
  { name: 'Vercel', width: 70 },
  { name: 'Figma', width: 60 },
];

export default function TrustedBy() {
  const t = useTranslations('trustedBy');
  const sectionRef = useRef<HTMLElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        logosRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
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
      ref={sectionRef}
      className="relative py-16 lg:py-20 bg-white border-y border-gray-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-10">
          {t('title')}
        </p>

        <div
          ref={logosRef}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div
                className="bg-gray-300 rounded"
                style={{ width: logo.width, height: 24 }}
              >
                <div className="w-full h-full flex items-center justify-center text-[10px] font-medium text-gray-500">
                  {logo.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
