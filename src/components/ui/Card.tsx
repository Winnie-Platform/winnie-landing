'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ============================================
   Card Root
   ============================================ */
const cardVariants = cva('', {
  variants: {
    variant: {
      default: 'bg-white',
      elevated: 'bg-white shadow-lg hover:shadow-xl transition-shadow',
      outlined: 'bg-white border border-gray-200',
      glass: 'bg-white/80 backdrop-blur-md border border-white/20',
    },
    padding: {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    rounded: {
      sm: 'rounded-lg',
      md: 'rounded-xl',
      lg: 'rounded-2xl',
      xl: 'rounded-3xl',
      '2xl': 'rounded-[2rem]',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    rounded: 'lg',
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  hoverable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, rounded, hoverable = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, padding, rounded }),
          hoverable && 'hover-lift cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/* ============================================
   Card Header
   ============================================ */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

/* ============================================
   Card Title
   ============================================ */
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, as: Comp = 'h3', ...props }, ref) => (
    <Comp ref={ref} className={cn('text-xl font-semibold text-gray-900', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

/* ============================================
   Card Description
   ============================================ */
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('mt-2 text-gray-600', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

/* ============================================
   Card Content
   ============================================ */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

/* ============================================
   Card Footer
   ============================================ */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center pt-4', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

/* ============================================
   Card Badge
   ============================================ */
export interface CardBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

const CardBadge = React.forwardRef<HTMLSpanElement, CardBadgeProps>(
  ({ color = 'var(--color-primary-500)', className, style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('inline-block px-3 py-1 text-xs font-medium rounded-full', className)}
        style={{
          backgroundColor: `${color}15`,
          color: color,
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardBadge.displayName = 'CardBadge';

/* ============================================
   Card Image
   ============================================ */
const cardImageVariants = cva('relative overflow-hidden rounded-xl bg-gray-100', {
  variants: {
    aspectRatio: {
      video: 'aspect-video',
      square: 'aspect-square',
      portrait: 'aspect-[3/4]',
    },
  },
  defaultVariants: {
    aspectRatio: 'video',
  },
});

export interface CardImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardImageVariants> {
  src?: string;
  alt?: string;
}

const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, aspectRatio, src, alt, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(cardImageVariants({ aspectRatio }), className)} {...props}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt || ''} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          children
        )}
      </div>
    );
  }
);
CardImage.displayName = 'CardImage';

/* ============================================
   Exports
   ============================================ */
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardBadge,
  CardImage,
  cardVariants,
  cardImageVariants,
};
