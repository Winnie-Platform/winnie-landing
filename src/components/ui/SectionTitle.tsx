'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionTitleAlign = 'left' | 'center' | 'right';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: SectionTitleAlign;
  animated?: boolean;
  className?: string;
}

const alignStyles: Record<SectionTitleAlign, string> = {
  left: 'text-left',
  center: 'text-center mx-auto',
  right: 'text-right ml-auto',
};

function SectionTitle({
  title,
  subtitle,
  badge,
  align = 'center',
  animated = true,
  className,
}: SectionTitleProps) {
  const content = (
    <>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-[var(--color-primary-100)] px-4 py-1.5 text-sm font-medium text-[var(--color-primary-700)]">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
    </>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn('max-w-2xl', alignStyles[align], className)}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={cn('max-w-2xl', alignStyles[align], className)}>
      {content}
    </div>
  );
}

export { SectionTitle };
export type { SectionTitleProps, SectionTitleAlign };
