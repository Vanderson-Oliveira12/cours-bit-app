import { Link } from '@tanstack/react-router';

import { LogOut } from 'lucide-react';

import { Button } from '@/shared/components/button';
import Logo from '@/shared/components/logo';
import { cn } from '@/shared/lib/utils';

import { MENUS, SETTINGS_MENUS, type MenuProp } from '../constants/menus.constant';
import { useIsMobile } from '@/shared/hooks/use-breakpoint';
import { useAside } from '../providers/AsideProvider';
import AppToggleAside from './AppToggleAside';

export default function AppAside() {
  const { opened, toggle } = useAside();
  const isMobile = useIsMobile();

  return (
    <>
      <div
        aria-hidden="true"
        onClick={toggle}
        className={cn(
          'fixed inset-0 z-40 bg-black transition-opacity duration-300 lg:hidden',
          opened ? 'pointer-events-auto opacity-50' : 'pointer-events-none opacity-0',
        )}
      />

      <aside
        id="app-sidebar"
        aria-label="Menu lateral"
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex h-dvh w-[70%] max-w-70 flex-col',
          'overflow-hidden border-r border-gray-200 bg-white py-6 shadow-sm',

          'transform transition-transform duration-300 ease-in-out',

          opened ? 'translate-x-0 px-4' : '-translate-x-full px-3',

          'lg:sticky lg:w-auto lg:max-w-none lg:translate-x-0',
        )}
      >
        <div
          className={cn(
            'flex min-h-8 items-center relative',
            opened ? 'justify-start' : 'justify-center',
          )}
        >
          <Logo />

          {isMobile && <AppToggleAside className="absolute right-0" />}
        </div>

        <nav
          aria-label="Navegação principal"
          className="mt-12 flex grow flex-col gap-2 overflow-y-auto overflow-x-hidden"
        >
          {MENUS.map((menu) => (
            <AppAsideItem key={menu.id} menu={menu} isOpen={opened} />
          ))}
        </nav>

        <div className="mt-4">
          <p
            className={cn(
              'text-caption font-medium tracking-widest text-gray-400 uppercase',
              opened ? 'px-3' : 'sr-only',
            )}
          >
            Configurações
          </p>

          <div className={cn('flex flex-col gap-2', opened && 'mt-3')}>
            {SETTINGS_MENUS.map((menu) => (
              <AppAsideItem key={menu.id} menu={menu} isOpen={opened} />
            ))}

            <Button
              type="button"
              variant="ghost"
              size="sm"
              aria-label="Sair da conta"
              title={!opened ? 'Sair' : undefined}
              className={cn(
                'text-error hover:bg-error-light hover:text-error',
                opened ? 'justify-start gap-3 px-3' : 'justify-center px-0',
              )}
            >
              <LogOut size={18} aria-hidden="true" className="shrink-0" />

              <span className={cn(!opened && 'sr-only')}>Sair</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

type AppAsideItemProps = {
  menu: MenuProp;
  isOpen: boolean;
};

function AppAsideItem({ menu, isOpen }: AppAsideItemProps) {
  const isMobile = useIsMobile();
  const { toggle } = useAside();

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className={cn('w-full p-0', isOpen ? 'justify-start' : 'justify-center')}
    >
      <Link
        to={menu.path}
        title={!isOpen ? menu.label : undefined}
        activeOptions={{
          exact: menu.index,
        }}
        onClick={() => {
          if (!isMobile) return;
          toggle();
        }}
        className={cn(
          'flex h-9 w-full items-center rounded-md bg-transparent text-gray-600 transition-colors',
          'hover:bg-gray-100 hover:text-gray-900',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          'focus-visible:ring-offset-2',
          isOpen ? 'justify-start gap-3 px-3' : 'justify-center px-0',
        )}
        activeProps={{
          className: 'bg-primary-light text-primary hover:bg-primary-light hover:text-primary',
        }}
      >
        <span aria-hidden="true" className="flex shrink-0 items-center justify-center">
          {menu.icon}
        </span>

        <span className={cn('whitespace-nowrap', !isOpen && 'sr-only')}>{menu.label}</span>
      </Link>
    </Button>
  );
}
