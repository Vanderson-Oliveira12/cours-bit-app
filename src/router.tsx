import { authTree } from '@features/auth/auth.route';
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

function RootLayout() {
  return (
    <>
      <Outlet />

      <TanStackRouterDevtools />
    </>
  );
}

export const rootRoute = createRootRoute({
  component: RootLayout,

  notFoundComponent: () => <div>Página não encontrada</div>,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,

  path: '/',

  beforeLoad: () => {
    throw redirect({
      to: '/login',
    });
  },
});

const routeTree = rootRoute.addChildren([indexRoute, authTree]);

export const router = createRouter({
  routeTree,

  defaultPreload: 'intent',

  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
