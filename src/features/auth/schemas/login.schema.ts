import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.email('Email obrigatório'),
  password: z.string('Senha obrigatória'),
});

export type LoginFormData = z.infer<typeof LoginSchema>;
