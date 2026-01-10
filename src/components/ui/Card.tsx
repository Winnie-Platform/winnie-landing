'use client';

import { HTMLAttributes, forwardRef, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

type CardVariant = 'default' | 'elevated' | 'outlined' | 'glass';

interface CardContextValue {
  variant: CardVariant;
}

const CardContext = createContext<CardContextValue>({ variant: 'default' });

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg hover:shadow-xl transition-shadow',
  outlined: 'bg-white border border-gray-200',
  glass: 'bg-white/80 backdrop-blur-md border border-white/20',
};

/* ============================================
   Card Root
   ============================================ */
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  hoverable?: boolean;
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const roundedStyles = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  '2xl': 'rounded-[2rem]',
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      rounded = 'lg',
      hoverable = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <CardContext.Provider value={{ variant }}>
        <div
          ref={ref}
          className={cn(
            variantStyles[variant],
            paddingStyles[padding],
            roundedStyles[rounded],
            hoverable && 'hover-lift cursor-pointer',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </CardContext.Provider>
    );
  }
);

Card.displayName = 'Card';

/* ============================================
   Card Badge
   ============================================ */
interface CardBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: string;
}

const CardBadge = forwardRef<HTMLSpanElement, CardBadgeProps>(
  ({ color = 'var(--color-primary-500)', className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-block px-3 py-1 text-xs font-medium rounded-full',
          className
        )}
        style={{
          backgroundColor: `${color}15`,
          color: color,
        }}
        {...props}
      >
        {children}
      </span>
    );
  }
);

CardBadge.displayName = 'CardBadge';

/* ============================================
   Card Image
   ============================================ */
interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

const aspectRatioStyles = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
};

const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ src, alt, aspectRatio = 'video', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-xl bg-gray-100',
          aspectRatioStyles[aspectRatio],
          className
        )}
        {...props}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt || ''}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          children
        )}
      </div>
    );
  }
);

CardImage.displayName = 'CardImage';

/* ============================================
   Card Content
   ============================================ */
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('', className)} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

/* ============================================
   Card Title
   ============================================ */
interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h2' | 'h3' | 'h4';
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-xl font-semibold text-gray-900', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardTitle.displayName = 'CardTitle';

/* ============================================
   Card Description
   ============================================ */
interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('mt-2 text-gray-600', className)} {...props}>
        {children}
      </p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

/* ============================================
   Exports
   ============================================ */
export {
  Card,
  CardBadge,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
};

export type {
  CardProps,
  CardBadgeProps,
  CardImageProps,
  CardContentProps,
  CardTitleProps,
  CardDescriptionProps,
  CardVariant,
};
