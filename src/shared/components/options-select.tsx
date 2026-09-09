import type { ComponentProps, ReactNode } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  type SelectTriggerProps,
} from '@/shared/components/select';

type SelectOption<T extends string = string> = {
  value: T;
  label: string;
  disabled?: boolean;
};

type OptionsSelectProps<T extends string> = Omit<
  ComponentProps<typeof Select>,
  'children' | 'value' | 'defaultValue' | 'onValueChange'
> &
  Pick<SelectTriggerProps, 'size' | 'variant' | 'className'> & {
    options: readonly SelectOption<T>[];
    label: string;
    icon?: ReactNode;
    placeholder?: string;
    groupLabel?: string;
    value?: NoInfer<T>;
    defaultValue?: NoInfer<T>;
    onValueChange?: (value: NoInfer<T>) => void;
    triggerProps?: Omit<SelectTriggerProps, 'children' | 'size' | 'variant' | 'className'>;
    contentProps?: Omit<ComponentProps<typeof SelectContent>, 'children'>;
  };

function OptionsSelect<T extends string>({
  options,
  label,
  icon,
  placeholder,
  groupLabel,
  size,
  variant,
  className,
  onValueChange,
  triggerProps,
  contentProps,
  ...props
}: OptionsSelectProps<T>) {
  function handleValueChange(value: string) {
    const option = options.find((option) => option.value === value);
    if (option) onValueChange?.(option.value);
  }

  return (
    <Select {...props} onValueChange={handleValueChange}>
      <SelectTrigger
        aria-label={label}
        size={size}
        variant={variant}
        className={className}
        {...triggerProps}
      >
        <span className="flex min-w-0 items-center gap-2">
          {icon && (
            <span aria-hidden="true" className="flex shrink-0 items-center text-gray-500">
              {icon}
            </span>
          )}
          <span className="truncate">
            <SelectValue placeholder={placeholder} />
          </span>
        </span>
      </SelectTrigger>
      <SelectContent {...contentProps}>
        <SelectGroup>
          {groupLabel && <SelectLabel>{groupLabel}</SelectLabel>}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { OptionsSelect };
export type { OptionsSelectProps, SelectOption };
