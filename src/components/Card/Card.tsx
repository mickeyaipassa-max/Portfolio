import { Tag } from "@/components/Tag/Tag";

type CardSize = "s" | "m" | "l";

const PADDING_VAR: Record<CardSize, string> = {
  s: "var(--card-padding-s)",
  m: "var(--card-padding-m)",
  l: "var(--card-padding-l)",
};

const TITLE_SIZE_VAR: Record<CardSize, string> = {
  s: "var(--font-size-card-title-s)",
  m: "var(--font-size-card-title-m)",
  l: "var(--font-size-card-title-l)",
};

const BODY_SIZE_VAR: Record<CardSize, string> = {
  s: "var(--font-size-card-body-s)",
  m: "var(--font-size-card-body-m)",
  l: "var(--font-size-card-body-l)",
};

type CardProps = {
  size: CardSize;
  tag: string;
  title: string;
  description: string;
  skills: string;
  /**
   * Fills the width of its parent instead of Figma's default fixed
   * 388px — used inside a card grid, where the parent controls each
   * card's column width.
   */
  fill?: boolean;
};

export function Card({
  size,
  tag,
  title,
  description,
  skills,
  fill = false,
}: CardProps) {
  return (
    <div
      className={`flex ${fill ? "w-full" : "w-[var(--card-width)]"} flex-col gap-[var(--card-gap)] rounded-[var(--card-radius)] border border-solid border-border-subtle bg-background`}
      style={{ padding: PADDING_VAR[size] }}
    >
      <Tag type="primary" size={size}>
        {tag}
      </Tag>
      <p
        className="font-semibold text-text-primary"
        style={{ fontSize: TITLE_SIZE_VAR[size], lineHeight: 1.4 }}
      >
        {title}
      </p>
      <p
        className="text-text-primary"
        style={{ fontSize: BODY_SIZE_VAR[size], lineHeight: 1.5 }}
      >
        {description}
      </p>
      <p className="italic" style={{ fontSize: BODY_SIZE_VAR[size], lineHeight: 1.5 }}>
        <span className="font-semibold text-accent">Skills: </span>
        <span className="text-text-primary">{skills}</span>
      </p>
    </div>
  );
}
