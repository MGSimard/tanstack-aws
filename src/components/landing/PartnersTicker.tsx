import {
  IconCloudflare,
  IconCursor,
  IconLinear,
  IconMicrosoft,
  IconStripe,
  IconVoidZero,
  IconHTMX,
} from "@/components/landing/PartnerIcons";

const PARTNERS = [
  { name: "Microsoft", icon: IconMicrosoft },
  { name: "Linear", icon: IconLinear },
  { name: "Cursor", icon: IconCursor },
  { name: "Void Zero", icon: IconVoidZero },
  { name: "Stripe", icon: IconStripe },
  { name: "Cloudflare", icon: IconCloudflare },
  { name: "HTMX", icon: IconHTMX },
] as const;

const TICKER_COPIES = 4;
const TICKER_DURATION = "20s";

export function PartnersTicker() {
  return (
    <div
      className="overflow-hidden bg-landing-primary"
      style={{ "--ticker-copies": TICKER_COPIES, "--ticker-duration": TICKER_DURATION } as React.CSSProperties}>
      <div className="animate-ticker flex h-24 w-max shrink-0 items-center gap-32 py-8 will-change-transform *:h-full *:shrink-0 **:fill-landing-primary-foreground">
        {Array.from({ length: TICKER_COPIES }, (_, i) =>
          PARTNERS.map((partner) => {
            const Icon = partner.icon;
            return (
              <Icon
                key={`${i}-${partner.name}`}
                aria-label={partner.name}
                role="img"
                className={partner.name === "Void Zero" ? "p-1.5" : ""}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
