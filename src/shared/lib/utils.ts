import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Register typography tokens so text colors do not remove font-size classes.
const mergeClasses = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        { text: ['display', 'heading-1', 'heading-2', 'heading-3', 'heading-4', 'body-lg', 'body', 'body-sm', 'label', 'button', 'caption'] },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return mergeClasses(clsx(inputs));
}
