'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Play } from 'lucide-react';

export default function MobileStickyBar() {
  const t = useTranslations('download');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercent > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-500)]">
                <span className="text-lg">🐰</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Winnie</p>
                <p className="text-xs text-gray-500">무료 다운로드</p>
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="https://apps.apple.com/app/winnie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white"
                aria-label={t('appStore')}
              >
                <Apple className="h-5 w-5" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.mywinnie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white"
                aria-label={t('playStore')}
              >
                <Play className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
