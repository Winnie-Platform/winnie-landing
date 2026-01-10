'use client';

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingCTAProps {
  show?: boolean;
  position?: 'bottom-right' | 'bottom-center' | 'bottom-left';
  showAfterScroll?: number;
  className?: string;
  children?: ReactNode;
}

const positionStyles = {
  'bottom-right': 'bottom-4 right-4 sm:bottom-6 sm:right-6',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6',
  'bottom-left': 'bottom-4 left-4 sm:bottom-6 sm:left-6',
};

function FloatingCTA({
  show = true,
  position = 'bottom-right',
  showAfterScroll = 300,
  className,
  children,
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  const shouldShow = show && isVisible;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'fixed z-50',
            positionStyles[position],
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

FloatingCTA.displayName = 'FloatingCTA';

export { FloatingCTA };
export type { FloatingCTAProps };
