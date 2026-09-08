import { rootRoute } from '@/router';
import { createRoute } from '@tanstack/react-router';
import DashboadLayout from './layout/DashboardLayout';
import OverviewPage from './pages/overview/OverviewPage';
import ExploreCoursesPage from './pages/exploreCourses/ExploreCoursesPage';
import MyCoursesPage from './pages/myCourses/MyCoursesPage';
import MessagesPage from './pages/messages/MessagesPage';
import SettingsPage from './pages/settings/SettingsPage';

const dashboardRoute = createRoute({
  path: 'dashboard',
  getParentRoute: () => rootRoute,
  component: DashboadLayout,
});

const overviewRoute = createRoute({
  path: '/',
  component: OverviewPage,
  getParentRoute: () => dashboardRoute,
});

const exploreCoursesRoute = createRoute({
  path: 'explore-courses',
  component: ExploreCoursesPage,
  getParentRoute: () => dashboardRoute,
});

const myCoursesRoute = createRoute({
  path: 'my-courses',
  component: MyCoursesPage,
  getParentRoute: () => dashboardRoute,
});

const messagesRoute = createRoute({
  path: 'messages',
  component: MessagesPage,
  getParentRoute: () => dashboardRoute,
});

const settingsRoute = createRoute({
  path: 'settings',
  component: SettingsPage,
  getParentRoute: () => dashboardRoute,
});

export const dashboardTree = dashboardRoute.addChildren([
  overviewRoute,
  exploreCoursesRoute,
  myCoursesRoute,
  messagesRoute,
  settingsRoute,
]);
