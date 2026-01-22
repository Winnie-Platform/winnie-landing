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
      const scrollPercent =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
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
          <div className="flex gap-3">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com/vn/app/winnie/id6737789682?l"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black py-3 text-white transition-transform active:scale-95"
              aria-label={t('appStore')}
            >
              <Apple className="h-5 w-5" />
              <div className="text-left">
                <p className="text-[10px] leading-tight opacity-80">Download on the</p>
                <p className="text-sm font-semibold leading-tight">App Store</p>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.winnie.userapp.v1&pcampaignid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black py-3 text-white transition-transform active:scale-95"
              aria-label={t('playStore')}
            >
              <Play className="h-5 w-5" />
              <div className="text-left">
                <p className="text-[10px] leading-tight opacity-80">GET IT ON</p>
                <p className="text-sm font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
