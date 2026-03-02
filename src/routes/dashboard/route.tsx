import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: LayoutDashboard,
});

function LayoutDashboard() {
  return (
    <div>
      Dashboard Layout
      <Outlet />
    </div>
  );
}
