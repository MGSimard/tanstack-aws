import { useEffect, useRef, useState } from "react";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { ThemeSelect } from "@/components/ThemeSelect";
import { Button } from "@/components/shadcnui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_landing")({
  component: LayoutLanding,
});

function LayoutLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => entry && setIsScrolled(!entry.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // data-layout is for css :has() html/body background color override
  // Cleaner than a wrapper div that would still expose site's bg color token
  // on overscroll (esp safari), paint delays etc

  return (
    <>
      <div ref={sentinelRef} className="h-px" aria-hidden />
      <header
        data-layout="landing"
        className={cn(
          "fixed inset-x-0 top-0 z-10 transition-colors duration-150",
          isScrolled && "bg-landing-background"
        )}>
        <nav className="flex h-16 items-center justify-between gap-4">
          <Link to="/">[ LOGO ]</Link>
          <ul className="flex items-center gap-4 uppercase [&_a]:hover:underline [&_a]:focus-visible:underline">
            <li>
              <Link to="/">FEATURES</Link>
            </li>
            <li>
              <Link to="/">PRICING</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
            <li>
              <ThemeSelect />
            </li>
            <li>
              <Button type="button" nativeButton={false} render={<Link to="/dashboard" />}>
                ACCESS
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
