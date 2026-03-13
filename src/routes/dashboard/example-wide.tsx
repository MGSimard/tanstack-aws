import { createFileRoute } from "@tanstack/react-router";
import { LayoutWide } from "@/components/dashboard/LayoutWide";

export const Route = createFileRoute("/dashboard/example-wide")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <LayoutWide>
      <h1>Example Wide</h1>
    </LayoutWide>
  );
}
