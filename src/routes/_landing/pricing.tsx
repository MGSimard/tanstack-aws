import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_landing/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section>
        <h1>Pricing</h1>
      </section>
      <section>
        <div>Yearly/Monthly switcher with % savings</div>
        <h2>Pricing Cards</h2>
        <ul>
          <li>Starter</li>
          <li>Pro</li>
          <li>Enterprise</li>
        </ul>
      </section>
      <section>
        <h2>Social Proof</h2>
      </section>
      <section>
        <h2>Feature Comparison</h2>
      </section>
      <section>
        <h2>Testimonials</h2>
      </section>
      <section>
        <h2>FAQ</h2>
      </section>
      <section>
        <h2>CTA</h2>
      </section>
    </>
  );
}
