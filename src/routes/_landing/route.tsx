import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_landing")({
  component: LayoutLanding,
});

function LayoutLanding() {
  return (
    <div>
      Landing Layout
      <Outlet />
    </div>
  );
}
