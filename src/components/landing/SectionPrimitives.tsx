import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentProps<"section"> {
  id: string;
}
export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-16 px-6 py-16 md:px-8", className)} {...props}>
      {children}
    </section>
  );
}

interface HeadingLabelProps extends React.ComponentProps<"span"> {
  label: string;
}
export function HeadingLabel({ label, className, ...props }: HeadingLabelProps) {
  return (
    <span
      className={cn(
        "mb-2 inline-block bg-landing-primary px-2 py-1.5 font-mono leading-none text-landing-background uppercase tabular-nums",
        className
      )}
      {...props}>
      {label}
    </span>
  );
}

interface HeadingProps extends React.ComponentProps<"h2"> {
  heading: string;
}
export function Heading({ heading, className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        "mb-8 indent-[-0.05em] font-mono text-[clamp(2rem,6vw,4rem)]/tight font-bold tracking-tighter text-landing-primary",
        className
      )}
      {...props}>
      {heading}
    </h2>
  );
}
