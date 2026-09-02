import Image from "next/image";
import { Tag } from "@/components/Tag/Tag";
import { Button } from "@/components/Button/Button";

type ProductCardSize = "xs" | "s" | "m" | "l";
type TagButtonSize = "s" | "m" | "l";

const TAG_BUTTON_SIZE: Record<ProductCardSize, TagButtonSize> = {
  xs: "s",
  s: "s",
  m: "m",
  l: "l",
};

const EYEBROW_SIZE_VAR: Record<ProductCardSize, string> = {
  xs: "var(--font-size-product-card-eyebrow-xs)",
  s: "var(--font-size-product-card-eyebrow-s)",
  m: "var(--font-size-product-card-eyebrow-m)",
  l: "var(--font-size-product-card-eyebrow-l)",
};

const TITLE_SIZE_VAR: Record<ProductCardSize, string> = {
  xs: "var(--font-size-product-card-title-xs)",
  s: "var(--font-size-product-card-title-s)",
  m: "var(--font-size-product-card-title-m)",
  l: "var(--font-size-product-card-title-l)",
};

type ProductCardProps = {
  size: ProductCardSize;
  client: string;
  title: string;
  discipline: string;
  href: string;
  mediaSrc: string;
  mediaAlt: string;
  /**
   * Fills the width of its parent instead of Figma's default fixed
   * 448px — used inside Product Card Group, where the parent grid
   * controls each card's width (equal columns, or full width when
   * stacked).
   */
  fill?: boolean;
};

export function ProductCard({
  size,
  client,
  title,
  discipline,
  href,
  mediaSrc,
  mediaAlt,
  fill = false,
}: ProductCardProps) {
  const tagButtonSize = TAG_BUTTON_SIZE[size];

  return (
    <div
      className={`flex ${fill ? "w-full" : "w-[var(--product-card-width)]"} flex-col items-center bg-surface-subtle`}
      style={{
        gap: "var(--product-card-gap)",
        paddingBlock: "var(--product-card-padding-block)",
      }}
    >
      <div
        className="flex w-full flex-col"
        style={{ gap: "var(--product-card-inner-gap)" }}
      >
        <p
          className="text-center font-semibold text-text-primary"
          style={{ fontSize: EYEBROW_SIZE_VAR[size] }}
        >
          {client}
        </p>
        <div className="relative aspect-square w-full">
          <Image src={mediaSrc} alt={mediaAlt} fill className="object-cover" />
        </div>
      </div>

      <div
        className="flex w-full flex-col items-center"
        style={{ gap: "var(--product-card-inner-gap)" }}
      >
        <p
          className="text-center font-medium text-text-primary"
          style={{ fontSize: TITLE_SIZE_VAR[size] }}
        >
          {title}
        </p>
        <Tag type="secondary" size={tagButtonSize}>
          {discipline}
        </Tag>
      </div>

      <Button type="primary" size={tagButtonSize} href={href}>
        View project
      </Button>
    </div>
  );
}
