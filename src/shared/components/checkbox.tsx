import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { MinusIcon } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { CheckIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';

const checkboxVariants = cva(
  'peer shrink-0 rounded-sm border border-gray-300 bg-white text-white outline-none transition-[background-color,border-color,box-shadow,opacity] duration-200 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:ring-2 aria-invalid:ring-error/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary',
  {
    variants: { size: { xs: 'size-3.5', sm: 'size-4', default: 'size-5', lg: 'size-6' } },
    defaultVariants: { size: 'default' },
  },
);

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>;

function Checkbox({ className, size = 'default', ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-size={size}
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="group/indicator flex size-full items-center justify-center"
      >
        <CheckIcon aria-hidden="true" className="size-3/4 group-data-[state=indeterminate]/indicator:hidden" />
        <MinusIcon aria-hidden="true" className="hidden size-3/4 group-data-[state=indeterminate]/indicator:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox, checkboxVariants };
export type { CheckboxProps };
