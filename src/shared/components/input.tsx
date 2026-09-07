import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { controlVariants } from '@/shared/lib/control-variants';
import { cn } from '@/shared/lib/utils';

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> &
  VariantProps<typeof controlVariants> & { htmlSize?: number; };

function Input({ className, type, variant = 'default', size = 'default', htmlSize, ...props }: InputProps) {
  return (
    <input
      type={type}
      size={htmlSize}
      data-slot="input"
      data-variant={variant}
      data-size={size}
      className={cn(
        controlVariants({ variant, size }),
        'file:mr-3 file:border-0 file:bg-transparent file:text-label file:text-gray-700',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };
