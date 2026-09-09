import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/shared/lib/utils';

const badgeVariants = cva(
  [
    'inline-flex w-fit shrink-0 items-center justify-center gap-1',
    'border border-transparent',
    'text-caption font-medium whitespace-nowrap',
    'outline-none',
    'transition-[background-color,color,border-color,box-shadow]',
    'duration-200',
    'focus-visible:ring-2 focus-visible:ring-primary/20',
    'aria-invalid:border-error aria-invalid:ring-2 aria-invalid:ring-error/20',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    "[&_svg:not([class*='size-'])]:size-3",
  ],
  {
    variants: {
      variant: {
        default: ['bg-primary', 'text-white', '[a&]:hover:bg-primary-hover'],

        neutral: ['bg-white', 'text-gray-700', 'shadow-sm', '[a&]:hover:bg-gray-50'],

        secondary: ['bg-gray-100', 'text-gray-800', '[a&]:hover:bg-gray-200'],

        soft: ['bg-primary-light', 'text-primary', '[a&]:hover:bg-primary/10'],

        destructive: [
          'bg-error',
          'text-white',
          '[a&]:hover:bg-error/90',
          'focus-visible:ring-error/20',
        ],

        success: ['bg-success-light', 'text-success', '[a&]:hover:bg-success/10'],

        warning: ['bg-warning-light', 'text-warning', '[a&]:hover:bg-warning/10'],

        info: ['bg-info-light', 'text-info', '[a&]:hover:bg-info/10'],

        outline: [
          'border-gray-300',
          'text-gray-700',
          '[a&]:hover:bg-gray-50',
          '[a&]:hover:text-gray-900',
        ],

        ghost: ['text-gray-700', '[a&]:hover:bg-gray-100', '[a&]:hover:text-gray-900'],

        link: ['text-primary', 'underline-offset-4', '[a&]:hover:underline'],
      },
      size: {
        sm: 'px-2 py-0.5',
        default: 'px-2.5 py-1',
        lg: 'px-3 py-1',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
      rounded: 'full',
    },
  },
);

type BadgeProps = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

function Badge({
  className,
  variant = 'default',
  size = 'sm',
  rounded = 'full',
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size, rounded }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
export type { BadgeProps };
