import { Outlet } from '@tanstack/react-router';

import { cn } from '@/shared/lib/utils';

import AppAside from '../components/AppAside';
import AppNav from '../components/AppNav';
import { AsideProvider, useAside } from '../providers/AsideProvider';
import UserOverviewDrawer from '../components/UserOverviewDrawer';

export default function DashboardLayout() {
  return (
    <AsideProvider>
      <DashboardContent />
    </AsideProvider>
  );
}

function DashboardContent() {
  const { opened } = useAside();

  return (
    <>
      <div
        className={cn(
          'grid h-dvh overflow-x-hidden transition-[grid-template-columns] duration-300',
          opened ? 'lg:grid-cols-[280px_1fr]' : 'lg:grid-cols-[72px_1fr]',
        )}
      >
        <AppAside />

        <div className="min-w-0">
          <AppNav />

          <main id="main-content">
            <Outlet />
          </main>
        </div>
      </div>

      <UserOverviewDrawer isOpen />
    </>
  );
}
