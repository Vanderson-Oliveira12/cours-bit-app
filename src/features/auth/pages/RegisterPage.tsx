import Logo from '@/shared/components/logo';
import FormContainer from '../components/FormContainer';
import { Link } from '@tanstack/react-router';
import RegisterForm from '../forms/RegisterForm';

export default function RegisterPage() {
  return (
    <FormContainer>
      <Logo />

      <div className="flex flex-col gap-1 mt-10.5 mb-7">
        <h1>Criar conta</h1>

        <p>
          Você já possui uma conta?{' '}
          <Link to="/" className="font-medium underline">
            Entrar
          </Link>
        </p>
      </div>

      <RegisterForm />
    </FormContainer>
  );
}
