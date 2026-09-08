import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterFormData } from '../schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export function useRegister() {
  const form = useForm<RegisterFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(registerSchema),
  });

  return {
    ...form,
  };
}
