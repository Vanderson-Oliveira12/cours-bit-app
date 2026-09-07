import { cva } from 'class-variance-authority';

// Shared appearance and height scale for text inputs and select triggers.
const controlVariants = cva(
  [
    'w-full min-w-0 rounded-lg border text-body text-gray-900 outline-none',
    'transition-[background-color,border-color,box-shadow,opacity] duration-200',
    'placeholder:text-sm',
    'placeholder:text-gray-500 selection:bg-primary selection:text-white',
    'focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'aria-invalid:border-error aria-invalid:ring-2 aria-invalid:ring-error/20',
  ],
  {
    variants: {
      variant: {
        default: 'border-gray-300 bg-white',
        filled: 'border-gray-300 bg-gray-100',
      },
      size: {
        xs: 'h-8 px-2.5',
        sm: 'h-9 px-3',
        default: 'h-10 px-3.5',
        lg: 'h-12 px-4',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

export { controlVariants };
