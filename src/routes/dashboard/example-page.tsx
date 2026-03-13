import { createFileRoute } from "@tanstack/react-router";
import { LayoutPage } from "@/components/dashboard/LayoutPage";

export const Route = createFileRoute("/dashboard/example-page")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <LayoutPage>
      <section>
        <h1>Example Page</h1>
      </section>
    </LayoutPage>
  );
}
