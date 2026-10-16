import Image from "next/image";
import { Tag } from "@/components/Tag/Tag";
import { IconButton } from "@/components/IconButton/IconButton";

type ProductCardSize = "xs" | "s" | "m" | "l";
type TagSize = "s" | "m" | "l";

const TAG_SIZE: Record<ProductCardSize, TagSize> = {
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
   * How the media sits in its square: "cover" crops to fill (photos),
   * "contain" shows the whole image (UI mockups that must not be cropped).
   */
  mediaFit?: "cover" | "contain";
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
  mediaFit = "cover",
  fill = false,
}: ProductCardProps) {
  const tagSize = TAG_SIZE[size];

  return (
    <div
      // The whole card is one tile: the arrow link is stretched over it, so
      // hovering anywhere darkens the card and hovers the arrow with it.
      className={`relative flex ${fill ? "w-full" : "w-[var(--product-card-width)]"} flex-col items-center bg-surface-subtle transition-colors hover:bg-[var(--color-surface-subtle-hover)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-[-2px] has-[a:focus-visible]:outline-accent`}
      style={{
        gap: "var(--product-card-gap)",
        paddingBlock: "var(--product-card-padding-block)",
      }}
    >
      <div
        className="flex w-full flex-col"
        style={{
          gap: "var(--product-card-inner-gap)",
          paddingInline: "var(--product-card-media-inset, 0px)",
        }}
      >
        <p
          className="text-center font-semibold text-text-primary"
          style={{
            fontSize: EYEBROW_SIZE_VAR[size],
            lineHeight: "var(--product-card-eyebrow-lh, normal)",
          }}
        >
          {client}
        </p>
        <div className="relative aspect-square w-full">
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            fill
            className={mediaFit === "contain" ? "object-contain" : "object-cover"}
          />
        </div>
      </div>

      <div
        className="flex w-full flex-col items-center"
        style={{ gap: "var(--product-card-inner-gap)" }}
      >
        <p
          className="w-full text-center font-medium text-text-primary"
          // Figma's title is a fixed 38px-tall box: a longer title wraps and
          // overflows it instead of pushing the tag down.
          style={{ fontSize: TITLE_SIZE_VAR[size], lineHeight: "normal", height: "38px" }}
        >
          {title}
        </p>
        <Tag type="secondary" size={tagSize}>
          {discipline}
        </Tag>
      </div>

      <IconButton size="l" href={href} ariaLabel={`View project: ${title}`} stretch />
    </div>
  );
}
