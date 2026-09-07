import type { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import logo from '@/assets/logo.png';
import { cn } from '@/shared/lib/utils';

const logoVariants = cva('block h-auto max-w-full object-contain', {
  variants: {
    size: { sm: 'w-24', default: 'w-32', lg: 'w-40' },
  },
  defaultVariants: { size: 'default' },
});

type LogoProps = Omit<ComponentProps<'img'>, 'src'> & VariantProps<typeof logoVariants>;

export default function Logo({ className, size = 'default', alt = 'Logo da empresa', ...props }: LogoProps) {
  return <img src={logo} alt={alt} data-slot="logo" data-size={size} className={cn(logoVariants({ size }), className)} {...props} />;
}

export { logoVariants };
export type { LogoProps };
