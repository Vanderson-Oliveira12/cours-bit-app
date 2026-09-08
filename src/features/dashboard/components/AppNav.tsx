import { PanelLeftClose, PanelLeftOpen, User } from 'lucide-react';

import { Button } from '@/shared/components/button';
import { useAside } from '../providers/AsideProvider';

export default function AppNav() {
  const { opened, toggle } = useAside();

  return (
    <nav
      aria-label="Barra superior"
      className="sticky top-0 left-0 z-20 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4"
    >
      <NavButton
        onClick={toggle}
        aria-controls="app-sidebar"
        aria-expanded={opened}
        aria-label={opened ? 'Recolher menu lateral' : 'Expandir menu lateral'}
        title={opened ? 'Recolher menu' : 'Expandir menu'}
      >
        {opened ? (
          <PanelLeftClose size={18} aria-hidden="true" />
        ) : (
          <PanelLeftOpen size={18} aria-hidden="true" />
        )}
      </NavButton>

      <NavButton aria-label="Abrir perfil" title="Perfil">
        <User size={18} aria-hidden="true" />
      </NavButton>
    </nav>
  );
}

type NavButtonProps = React.ComponentProps<typeof Button>;

function NavButton({ children, className, ...props }: NavButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="xs"
      className={[
        'size-9 cursor-pointer rounded-md bg-transparent p-0 text-gray-600',
        'hover:bg-gray-100 hover:text-gray-900',
        'active:bg-gray-200',
        'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Button>
  );
}
