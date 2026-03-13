import { createFileRoute } from "@tanstack/react-router";
import { LayoutCanvas } from "@/components/dashboard/LayoutCanvas";

export const Route = createFileRoute("/dashboard/example-canvas")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LayoutCanvas>Hello "/dashboard/example-canvas"!</LayoutCanvas>;
}
