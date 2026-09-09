import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { useAside } from '../providers/AsideProvider';
import { Button } from '@/shared/components/button';

export default function AppToggleAside({ className }: { className?: string }) {
  const { opened, toggle } = useAside();

  return (
    <NavButton
      onClick={toggle}
      aria-controls="app-sidebar"
      aria-expanded={opened}
      aria-label={opened ? 'Recolher menu lateral' : 'Expandir menu lateral'}
      title={opened ? 'Recolher menu' : 'Expandir menu'}
      className={className}
    >
      {opened ? (
        <PanelLeftClose className="size-6" aria-hidden="true" />
      ) : (
        <PanelLeftOpen className="size-6" aria-hidden="true" />
      )}
    </NavButton>
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
