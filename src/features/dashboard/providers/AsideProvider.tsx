import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type AsideContextType = {
  opened: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const AsideContext = createContext<AsideContextType | null>(null);

type AsideProviderProps = { children: ReactNode };

export function AsideProvider({ children }: AsideProviderProps) {
  const [opened, setOpened] = useState(false);

  const value = useMemo(
    () => ({
      opened,
      open: () => setOpened(true),
      close: () => setOpened(false),
      toggle: () => setOpened((prev) => !prev),
    }),
    [opened],
  );

  return <AsideContext value={value}>{children}</AsideContext>;
}

export function useAside() {
  const context = useContext(AsideContext);
  if (!context) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return context;
}
