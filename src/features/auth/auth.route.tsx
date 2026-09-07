import { createRoute } from '@tanstack/react-router';
import AuthLayout from './layout/AuthLayout';
import { rootRoute } from '../../router';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const authRoute = createRoute({
  id: 'auth',

  getParentRoute: () => rootRoute,

  component: AuthLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => authRoute,

  path: 'login',

  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => authRoute,

  path: 'register',

  component: RegisterPage,
});

export const authTree = authRoute.addChildren([loginRoute, registerRoute]);
