import { Link } from '@tanstack/react-router';

import { Button } from '@/shared/components/button';

import useLogin from '../hooks/useLogin';
import { FormInput } from '@/shared/components/form-input';
import SocialButton from '@/shared/components/social-button';

export default function LoginForm() {
  const { control } = useLogin();

  return (
    <div>
      <form className="flex flex-col">
        <div className="flex flex-col gap-6">
          <FormInput
            control={control}
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            type="email"
          />

          <FormInput
            control={control}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
          />
        </div>

        <Link className="mt-3 font-medium underline text-body-sm" to="/">
          Esqueceu a senha?
        </Link>

        <Button className="mt-7.5" type="submit">
          Entrar
        </Button>
      </form>

      <div className="flex items-center justify-between gap-7 my-7.5">
        <span className="w-full h-[1px] bg-gray-300"></span>
        <p>Ou</p>
        <span className="w-full h-[1px] bg-gray-300"></span>
      </div>

      <div className="flex flex-col gap-4">
        <SocialButton className="rounded-4xl" provider="google" />
        <SocialButton className="rounded-4xl" provider="facebook" />
      </div>

      <p className="mt-7 text-caption">
        Este site é protegido pelo reCAPTCHA e está sujeito à{' '}
        <Link to="/">Política de Privacidade</Link> e aos <Link to="/">Termos de Serviço</Link> do
        Google.
      </p>
    </div>
  );
}
