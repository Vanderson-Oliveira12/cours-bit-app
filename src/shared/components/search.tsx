import { Search as SearchIcon } from 'lucide-react';

import { Input, type InputProps } from '@/shared/components/input';
import { cn } from '@/shared/lib/utils';

type SearchProps = Omit<InputProps, 'type'> & {
  containerClassName?: string;
  fullWidth?: boolean;
};

function Search({
  className,
  containerClassName,
  size = 'lg',
  fullWidth = false,
  placeholder = 'Buscar...',
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  disabled,
  ...props
}: SearchProps) {
  return (
    <div
      data-slot="search"
      data-size={size}
      className={cn('relative w-full min-w-0', !fullWidth && 'max-w-105', containerClassName)}
    >
      <SearchIcon
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-1/2 size-4 -translate-y-1/2 text-gray-500',
          size === 'xs' && 'left-2.5',
          size === 'sm' && 'left-3',
          size === 'default' && 'left-3.5',
          size === 'lg' && 'left-4',
          disabled && 'opacity-50',
        )}
      />
      <Input
        {...props}
        type="search"
        size={size}
        placeholder={placeholder}
        aria-label={ariaLabel ?? (ariaLabelledBy ? undefined : 'Buscar')}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        className={cn(
          size === 'xs' && 'pl-8.5',
          size === 'sm' && 'pl-9',
          size === 'default' && 'pl-9.5',
          size === 'lg' && 'pl-10',
          className,
        )}
      />
    </div>
  );
}

export { Search };
export type { SearchProps };
