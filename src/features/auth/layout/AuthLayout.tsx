import { Outlet } from '@tanstack/react-router';

export default function AuthLayout() {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <Outlet />
    </main>
  );
}
