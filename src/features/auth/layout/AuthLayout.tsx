import { Outlet } from '@tanstack/react-router';

import hero from '../../../assets/hero.jpg';

import Logo from '@/shared/components/logo';

export default function AuthLayout() {
  return (
    <main className="min-h-dvh bg-white">
      <aside className="fixed inset-y-0 left-0 hidden w-1/2 overflow-hidden lg:block">
        <img
          className="h-full w-full object-cover object-center"
          src={hero}
          alt="Imagem de destaque"
        />

        <div className="absolute inset-0 bg-linear-to-t from-primary/95 via-primary/50 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-6 p-12 text-white">
          <Logo />

          <div className="max-w-md space-y-4">
            <h1 className="text-heading-1 font-medium text-white">
              Desenvolva suas habilidades com a CoursBit.
            </h1>

            <p className="text-body-sm text-white/85">
              Aprenda no seu ritmo com conteúdos práticos, trilhas organizadas e uma experiência
              simples para evoluir todos os dias.
            </p>
          </div>
        </div>
      </aside>

      <section className="flex min-h-dvh items-center justify-center px-6 py-10 lg:ml-[50%] lg:w-1/2 lg:px-12">
        <Outlet />
      </section>
    </main>
  );
}
