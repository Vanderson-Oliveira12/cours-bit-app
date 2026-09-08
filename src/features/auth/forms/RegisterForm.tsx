import { Button } from '@/shared/components/button';
import { FormInput } from '@/shared/components/form-input';
import { Link } from '@tanstack/react-router';
import { useRegister } from '../hooks/useRegister';
import { Checkbox } from '@/shared/components/checkbox';
import { Field, FieldContent, FieldLabel } from '@/shared/components/field';

export default function RegisterForm() {
  const { control } = useRegister();

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

        <Button className="mt-7.5 mb-6" type="submit">
          Criar conta
        </Button>

        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-2" name="terms-checkbox-2" />

          <FieldContent>
            <FieldLabel htmlFor="terms-checkbox-2" className="block">
              Li e aceito os <Link to="/">Termos de Uso</Link> e a{' '}
              <Link to="/">Política de Privacidade</Link>{' '}
            </FieldLabel>
          </FieldContent>
        </Field>
      </form>
    </div>
  );
}
