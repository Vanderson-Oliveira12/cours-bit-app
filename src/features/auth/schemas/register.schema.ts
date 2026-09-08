import * as z from 'zod';

export const registerSchema = z.object({
  email: z.email('Email é obrigatório'),
  password: z.minLength(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
