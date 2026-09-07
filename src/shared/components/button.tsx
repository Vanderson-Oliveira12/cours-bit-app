import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center gap-2',
    'rounded-lg',
    'text-button whitespace-nowrap',
    'outline-none',
    'transition-[background-color,color,border-color,box-shadow,opacity]',
    'duration-200',

    'focus-visible:ring-2',
    'focus-visible:ring-primary/20',

    'disabled:pointer-events-none',
    'disabled:opacity-50',

    'aria-disabled:pointer-events-none',
    'aria-disabled:opacity-50',

    'aria-invalid:border-error',
    'aria-invalid:ring-2',
    'aria-invalid:ring-error/20',

    '[&_svg]:pointer-events-none',
    '[&_svg]:shrink-0',
    "[&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: ['bg-primary', 'text-white', 'hover:bg-primary-hover', 'active:bg-primary-active'],

        secondary: ['bg-gray-100', 'text-gray-800', 'hover:bg-gray-200', 'active:bg-gray-300'],

        soft: ['bg-primary-light', 'text-primary', 'hover:bg-primary/10', 'active:bg-primary/15'],

        outline: [
          'border',
          'border-gray-300',
          'bg-white',
          'text-gray-700',
          'hover:bg-gray-50',
          'hover:text-gray-900',
          'active:bg-gray-100',
        ],

        ghost: [
          'bg-transparent',
          'text-gray-700',
          'hover:bg-gray-100',
          'hover:text-gray-900',
          'active:bg-gray-200',
        ],

        destructive: [
          'bg-error',
          'text-white',
          'hover:bg-error/90',
          'active:bg-error/80',
          'focus-visible:ring-error/20',
        ],

        success: [
          'bg-success',
          'text-white',
          'hover:bg-success/90',
          'active:bg-success/80',
          'focus-visible:ring-success/20',
        ],

        link: ['bg-transparent', 'text-primary', 'underline-offset-4', 'hover:underline'],
      },

      size: {
        xs: 'h-8 px-3',

        sm: 'h-9 px-3.5',

        default: 'h-10 px-4',

        lg: 'h-12 px-6',

        icon: 'size-10 p-0',

        'icon-xs': 'size-8 p-0',

        'icon-sm': 'size-9 p-0',

        'icon-lg': 'size-12 p-0',
      },

      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    loadingText?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

function Button({
  className,
  variant = 'default',
  size = 'default',
  fullWidth = false,
  asChild = false,

  isLoading = false,
  loadingText,

  leftIcon,
  rightIcon,

  disabled,
  children,

  type,
  onClick,

  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button';

  const isDisabled = disabled || isLoading;

  const content = isLoading && loadingText && !asChild ? loadingText : children;

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (isDisabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);
  }

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-loading={isLoading || undefined}
      aria-busy={isLoading || undefined}
      aria-disabled={asChild ? isDisabled || undefined : undefined}
      disabled={asChild ? undefined : isDisabled}
      type={asChild ? undefined : (type ?? 'button')}
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      ) : (
        leftIcon
      )}

      {asChild ? <Slot.Slottable>{content}</Slot.Slottable> : content}

      {!isLoading && rightIcon}
    </Comp>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
