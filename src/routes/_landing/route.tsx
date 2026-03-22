import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { LandingNoise } from "@/components/landing/LandingNoise";

export const Route = createFileRoute("/_landing")({
  component: LayoutLanding,
});

function LayoutLanding() {
  // data-layout is for css :has() html/body background color override
  // Cleaner than a wrapper div that would still expose site's bg color token
  // on overscroll (esp safari), paint delays etc

  return (
    <>
      <Header />
      <main data-layout="landing">
        <Outlet />
      </main>
      <Footer />
      <div
        className="pointer-events-none absolute inset-0 z-10 size-full bg-[url('/assets/images/noise.webp')] bg-repeat opacity-[0.075] select-none"
        aria-hidden
      />
      {/* <LandingNoise /> Can't use because firefox rendering is a fucking joke */}
    </>
  );
}
