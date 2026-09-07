import type { Control, FieldValues, Path } from 'react-hook-form';
import { useController } from 'react-hook-form';

import { Field } from '@/shared/components/field';
import { Input } from '@/shared/components/input';
import { Label } from '@/shared/components/label';

type FormInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
};

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
}: FormInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>

      <Input {...field} id={name} type={type} placeholder={placeholder} aria-invalid={!!error} />

      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </Field>
  );
}
