import type React from 'react';

import { BookOpen, LayoutDashboard, MessageCircle, Search, Settings } from 'lucide-react';

export type MenuProp = {
  id: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
  index?: boolean;
};

export const MENUS: MenuProp[] = [
  {
    id: 'overview',
    label: 'Visão geral',
    path: '/dashboard',
    icon: <LayoutDashboard size={18} />,
    index: true,
  },
  {
    id: 'explore-courses',
    label: 'Explorar cursos',
    path: '/dashboard/explore-courses',
    icon: <Search size={18} />,
  },
  {
    id: 'my-courses',
    label: 'Meus cursos',
    path: '/dashboard/my-courses',
    icon: <BookOpen size={18} />,
  },
  {
    id: 'messages',
    label: 'Mensagens',
    path: '/dashboard/messages',
    icon: <MessageCircle size={18} />,
  },
];

export const SETTINGS_MENUS: MenuProp[] = [
  {
    id: 'settings',
    label: 'Configurações',
    path: '/dashboard/settings',
    icon: <Settings size={18} />,
  },
];
