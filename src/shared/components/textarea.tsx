import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { controlVariants } from '@/shared/lib/control-variants';
import { cn } from '@/shared/lib/utils';

const textareaVariants = cva('field-sizing-content resize-y', {
  variants: {
    size: {
      xs: 'min-h-16 px-3 py-1.5',
      sm: 'min-h-20 px-3.5 py-2',
      default: 'min-h-24 px-4 py-2.5',
      lg: 'min-h-32 px-6 py-3',
    },
  },
  defaultVariants: { size: 'default' },
});

type TextareaProps = React.ComponentProps<'textarea'> &
  VariantProps<typeof textareaVariants> &
  Pick<VariantProps<typeof controlVariants>, 'variant'>;

function Textarea({ className, variant = 'default', size = 'default', ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-variant={variant}
      data-size={size}
      className={cn(controlVariants({ variant, size: null }), textareaVariants({ size }), className)}
      {...props}
    />
  );
}

export { Textarea, textareaVariants };
export type { TextareaProps };
