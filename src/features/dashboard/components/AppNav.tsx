import AppToggleAside from './AppToggleAside';
import UserExperience from './UserExperience';

export default function AppNav() {
  return (
    <nav
      aria-label="Barra superior"
      className="sticky top-0 left-0 z-20 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4"
    >
      <AppToggleAside />

      <UserExperience />
    </nav>
  );
}
