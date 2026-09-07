import Logo from '@/shared/components/logo';
import FormContainer from '../components/FormContainer';
import { Link } from '@tanstack/react-router';
import LoginForm from '../forms/LoginForm';

export default function LoginPage() {
  return (
    <FormContainer>
      <Logo />

      <div className="flex flex-col gap-1 mt-10.5 mb-7">
        <h1>Entrar</h1>

        <p>
          Novo usuário?{' '}
          <Link to="/register" className="font-medium underline">
            Crie uma conta
          </Link>
        </p>
      </div>

      <LoginForm />
    </FormContainer>
  );
}
