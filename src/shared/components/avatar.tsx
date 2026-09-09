import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Avatar as AvatarPrimitive } from 'radix-ui';

import { cn } from '@/shared/lib/utils';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full text-label',
  {
    variants: {
      size: {
        sm: 'size-7 text-caption',
        default: 'size-10',
        lg: 'size-12',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

type AvatarProps = React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>;

function Avatar({ className, size = 'default', ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full object-cover', className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-gray-100 font-medium text-gray-700',
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
export type { AvatarProps };
