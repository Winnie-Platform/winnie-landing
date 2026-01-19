'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-600)] shadow-sm hover:shadow-md focus-visible:ring-[var(--color-primary-500)]',
        secondary:
          'bg-[var(--color-secondary-500)] text-white hover:bg-[var(--color-secondary-600)] shadow-sm hover:shadow-md focus-visible:ring-[var(--color-secondary-500)]',
        cta: 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md focus-visible:ring-gray-900',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 shadow-sm focus-visible:ring-red-500',
        outline:
          'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus-visible:ring-[var(--color-primary-500)]',
        ghost: 'text-gray-600 hover:bg-gray-100 focus-visible:ring-gray-500',
        link: 'text-[var(--color-primary-500)] underline-offset-4 hover:underline focus-visible:ring-[var(--color-primary-500)]',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-full',
        md: 'h-10 px-6 text-sm rounded-full',
        lg: 'h-12 px-8 text-base rounded-full',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), isLoading && 'cursor-wait')}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
