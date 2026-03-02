import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_landing/")({
  component: PageHome,
});

function PageHome() {
  return <div>Home</div>;
}
