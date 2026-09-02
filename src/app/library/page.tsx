import { Button } from "@/components/Button/Button";
import { Tag } from "@/components/Tag/Tag";
import { Card } from "@/components/Card/Card";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";

const BREAKPOINTS = [
  {
    label: "XXL — 1800px+",
    width: 1800,
    navHeight: 100,
    heroHeight: 700,
    productCardGroupHeight: 950,
    cardGridHeight: 450,
  },
  {
    label: "XL — 1440–1799px",
    width: 1440,
    navHeight: 100,
    heroHeight: 600,
    productCardGroupHeight: 800,
    cardGridHeight: 700,
  },
  {
    label: "L — 1200–1439px",
    width: 1200,
    navHeight: 100,
    heroHeight: 550,
    productCardGroupHeight: 720,
    cardGridHeight: 650,
  },
  {
    label: "M — 900–1199px",
    width: 900,
    navHeight: 100,
    heroHeight: 550,
    productCardGroupHeight: 640,
    cardGridHeight: 750,
  },
  {
    label: "S — 600–899px",
    width: 600,
    navHeight: 100,
    heroHeight: 500,
    productCardGroupHeight: 2550,
    cardGridHeight: 1050,
  },
  {
    label: "XS — <600px",
    width: 390,
    navHeight: 100,
    heroHeight: 450,
    productCardGroupHeight: 2550,
    cardGridHeight: 1200,
  },
];

function BreakpointFrame({
  src,
  width,
  height,
  label,
}: {
  src: string;
  width: number;
  height: number;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium text-text-secondary">{label}</p>
      <div className="overflow-auto rounded border border-border-subtle bg-surface-subtle p-4">
        <iframe
          src={src}
          width={width}
          height={height}
          className="border border-border-subtle bg-background"
          title={`${label} — ${src}`}
        />
      </div>
    </div>
  );
}

const NAV_SIZE_FONT: Record<"s" | "m" | "l", number> = { s: 14, m: 16, l: 18 };

function NavItemDemo({
  size,
  state,
}: {
  size: "s" | "m" | "l";
  state: "default" | "hover" | "active";
}) {
  const textColor = state === "default" ? "#000000" : "var(--color-accent)";
  const underline = state === "active";

  return (
    <div className="flex h-[42px] items-center">
      <img src="/nav/feather.svg" alt="" className="size-6 shrink-0" />
      <span className="flex items-center justify-center p-[10px]">
        <span
          className="font-medium whitespace-nowrap"
          style={{
            fontSize: `${NAV_SIZE_FONT[size]}px`,
            color: textColor,
            textDecoration: underline ? "underline" : "none",
          }}
        >
          Latest work
        </span>
      </span>
    </div>
  );
}

const BUTTON_TYPES = ["primary", "secondary"] as const;
const BUTTON_STATES = ["default", "hover", "pressed", "disabled"] as const;
const TAG_TYPES = ["primary", "secondary"] as const;
const SIZES = ["s", "m", "l"] as const;
const PRODUCT_CARD_SIZES = ["xs", "s", "m", "l"] as const;

export default function LibraryPage() {
  return (
    <div className="mx-auto flex max-w-[1900px] flex-col gap-16 p-8">
      <header>
        <h1 className="text-2xl font-semibold">Component library</h1>
        <p className="text-text-secondary">
          Elk component met al zijn states en variants, exact zoals gedefinieerd
          in Figma. Dit is nog niet de samengestelde website.
        </p>
      </header>

      {/* Nav Item — State (Default/Hover/Active) × Size (S/M/L) */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Nav Item</h2>
        <p className="text-sm text-text-secondary">
          9 varianten: State × Size. Hover/Active zijn hier statisch geforceerd
          ter demonstratie — in de echte navigatie is Hover een interactieve
          :hover state.
        </p>
        <div className="overflow-x-auto">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-left text-sm text-text-secondary">
                  State \ Size
                </th>
                {SIZES.map((size) => (
                  <th
                    key={size}
                    className="p-3 text-left text-sm text-text-secondary uppercase"
                  >
                    {size}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(["default", "hover", "active"] as const).map((state) => (
                <tr key={state} className="border-t border-border-subtle">
                  <td className="p-3 text-sm font-medium capitalize">{state}</td>
                  {SIZES.map((size) => (
                    <td key={size} className="p-3">
                      <NavItemDemo size={size} state={state} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigatie — the full assembled nav bar, per breakpoint */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Navigatie</h2>
        <p className="text-sm text-text-secondary">
          6 breakpoint-varianten, hier getoond als losse iframes zodat elk op
          zijn eigen exacte viewportbreedte rendert (het component gebruikt
          100vw-gebaseerde CSS, dus een gewone scherm-container zou dit niet
          correct simuleren).
        </p>
        <div className="flex flex-wrap gap-6">
          {BREAKPOINTS.map((bp) => (
            <BreakpointFrame
              key={bp.label}
              src="/library/preview/navigation"
              width={bp.width}
              height={bp.navHeight}
              label={bp.label}
            />
          ))}
        </div>
      </section>

      {/* Hero Home — 6 breakpoint variants */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Hero Home</h2>
        <p className="text-sm text-text-secondary">
          6 breakpoint-varianten, elk in een eigen iframe om de fluid
          interpolatie tussen breakpoints correct te tonen op zijn eigen
          viewport.
        </p>
        <div className="flex flex-wrap gap-6">
          {BREAKPOINTS.map((bp) => (
            <BreakpointFrame
              key={bp.label}
              src="/library/preview/hero"
              width={bp.width}
              height={bp.heroHeight}
              label={bp.label}
            />
          ))}
        </div>
      </section>

      {/* Button — Type × State × Size */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Button</h2>
        <p className="text-sm text-text-secondary">
          24 varianten: Type (Primary/Secondary) × State (Default/Hover/Pressed/
          Disabled) × Size (S/M/L). Hover/Pressed zijn hier statisch geforceerd
          ter demonstratie.
        </p>
        {BUTTON_TYPES.map((type) => (
          <div key={type} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium capitalize text-text-secondary">
              {type}
            </h3>
            <div className="overflow-x-auto">
              <table className="border-collapse">
                <thead>
                  <tr>
                    <th className="p-3 text-left text-sm text-text-secondary">
                      State \ Size
                    </th>
                    {SIZES.map((size) => (
                      <th
                        key={size}
                        className="p-3 text-left text-sm text-text-secondary uppercase"
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {BUTTON_STATES.map((state) => (
                    <tr key={state} className="border-t border-border-subtle">
                      <td className="p-3 text-sm font-medium capitalize">
                        {state}
                      </td>
                      {SIZES.map((size) => (
                        <td key={size} className="p-3">
                          <Button type={type} size={size} forceState={state}>
                            View project
                          </Button>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      {/* Tag — Type × Size, no states */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Tag</h2>
        <p className="text-sm text-text-secondary">
          6 varianten: Type (Primary/Secondary) × Size (S/M/L). Geen states —
          dit is een statisch label.
        </p>
        <div className="overflow-x-auto">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-left text-sm text-text-secondary">
                  Type \ Size
                </th>
                {SIZES.map((size) => (
                  <th
                    key={size}
                    className="p-3 text-left text-sm text-text-secondary uppercase"
                  >
                    {size}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TAG_TYPES.map((type) => (
                <tr key={type} className="border-t border-border-subtle">
                  <td className="p-3 text-sm font-medium capitalize">{type}</td>
                  {SIZES.map((size) => (
                    <td key={size} className="p-3">
                      <Tag type={type} size={size}>
                        Strategy
                      </Tag>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Card — Size only (S/M/L), no other states */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Card</h2>
        <p className="text-sm text-text-secondary">
          3 varianten: Size (S/M/L). Vaste breedte (388px) in Figma, hoogte is
          content-driven.
        </p>
        <div className="flex flex-wrap items-start gap-6">
          {SIZES.map((size) => (
            <div key={size} className="flex flex-col gap-2">
              <p className="text-sm font-medium text-text-secondary uppercase">
                {size}
              </p>
              <Card
                size={size}
                tag="Strategy"
                title="Turning complexity into direction"
                description="I translate user needs, business goals and data into clear opportunities. Through journeys, hypotheses and stakeholder alignment, I help teams focus on what matters."
                skills="Product strategy · Customer journeys · Data & insights · Hypothesis building · Stakeholder management"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Product Card — Size only (XS/S/M/L), no other states */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Product Card</h2>
        <p className="text-sm text-text-secondary">
          4 varianten: Size (XS/S/M/L). Media-vlak is in Figma een lege
          video-fill (placeholder zonder bronbestand) — hier vervangen door
          een bestaande projectfoto ter demonstratie. Hergebruikt Tag
          (Secondary) en Button (Primary).
        </p>
        <div className="flex flex-wrap items-start gap-6">
          {PRODUCT_CARD_SIZES.map((size) => (
            <div key={size} className="flex flex-col gap-2">
              <p className="text-sm font-medium text-text-secondary uppercase">
                {size}
              </p>
              <ProductCard
                size={size}
                client="a.s.r. Nederland"
                title="Service & Contact"
                discipline="Ux & Ui Design"
                href="#"
                mediaSrc="/hero/photo.png"
                mediaAlt="Placeholder projectafbeelding"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Product Card Group — 3-column row that stacks below 900px */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Product Card Group</h2>
        <p className="text-sm text-text-secondary">
          6 breakpoint-varianten (Figma definieert er 5; onder 600px is het
          bevestigde &lt;900px-gedrag doorgetrokken bij gebrek aan een eigen
          XS-variant). Rij van 3 kolommen zonder gap ≥900px, daaronder een
          verticale stapel. Elke Product Card gebruikt hier zijn eigen
          "l"-tokens die per breakpoint lokaal worden overschreven, zodat
          Product Card/Tag/Button ongewijzigd blijven.
        </p>
        <div className="flex flex-wrap gap-6">
          {BREAKPOINTS.map((bp) => (
            <BreakpointFrame
              key={bp.label}
              src="/library/preview/product-card-group"
              width={bp.width}
              height={bp.productCardGroupHeight}
              label={bp.label}
            />
          ))}
        </div>
      </section>

      {/* Card Grid — responsive 4/2/1-column grid of Card, per breakpoint */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Card Grid</h2>
        <p className="text-sm text-text-secondary">
          6 breakpoint-varianten. Dit is geen Figma component/variant-set
          (zoals Hero of Product Card Group) maar een losse, handmatig per
          breakpoint opgebouwde layout — 4 kolommen bij 1800px+, 2 kolommen
          900–1799px, 1 kolom daaronder, telkens 16px gap. Card gebruikt
          dezelfde "altijd size=l, lokaal overschreven"-techniek als Product
          Card Group.
        </p>
        <div className="flex flex-wrap gap-6">
          {BREAKPOINTS.map((bp) => (
            <BreakpointFrame
              key={bp.label}
              src="/library/preview/card-grid"
              width={bp.width}
              height={bp.cardGridHeight}
              label={bp.label}
            />
          ))}
        </div>
      </section>

      {/* Section Heading — constant across all breakpoints */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Section Heading</h2>
        <p className="text-sm text-text-secondary">
          Gemeten als een constante 40px Semi Bold, gecentreerd, op alle 6
          breakpoints — volgt niet de responsive schaal van
          --font-size-heading-primary, dus als eigen token bewaard.
        </p>
        <SectionHeading>Latest work...</SectionHeading>
      </section>
    </div>
  );
}
