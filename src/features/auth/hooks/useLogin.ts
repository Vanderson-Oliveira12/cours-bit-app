import { useForm } from 'react-hook-form';
import { LoginSchema, type LoginFormData } from '../schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function useLogin() {
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginSchema),
  });

  return {
    ...form,
  };
}
