import Logo from '@/shared/components/logo';
import FormContainer from '../components/FormContainer';
import { Link } from '@tanstack/react-router';
import { Button } from '@/shared/components/button';

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

      <Button className="w-full">Olá mundo</Button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non saepe placeat
        laboriosam nobis dolor quibusdam. Exercitationem aliquid quia rerum necessitatibus
        perspiciatis architecto numquam. Ab, quisquam ut. Laudantium, soluta expedita?
      </p>
    </FormContainer>
  );
}
