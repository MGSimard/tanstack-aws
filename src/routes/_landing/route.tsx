import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/shadcnui/button";

export const Route = createFileRoute("/_landing")({
  component: LayoutLanding,
});

function LayoutLanding() {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between gap-4">
          <div>Landing Layout</div>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Button type="button" nativeButton={false} render={<Link to="/dashboard" />}>
                Dashboard
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}
