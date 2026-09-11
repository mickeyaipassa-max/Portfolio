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
  /**
   * A single paragraph, or several joined with a plain line break and
   * no extra gap (matching Figma instances — e.g. "What I bring"'s AI
   * card — where the description runs across two lines separated by a
   * single `\n`, not a blank-line spacer).
   */
  description: string | string[];
  /**
   * Optional — some Card usages (e.g. "How I work") omit this line
   * entirely rather than leaving it empty, per Figma. Rendered with a
   * blank-line-sized gap above it (bodyFontSize * 1.5), since Figma
   * separates it from the description with an explicit blank paragraph.
   */
  skills?: string;
  /**
   * Whether the skills line is italic. Defaults to true (the common
   * case) — false for the one Figma instance ("What I bring" — UI &
   * Systems) where it isn't.
   */
  skillsItalic?: boolean;
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
  skillsItalic = true,
  fill = false,
}: CardProps) {
  const descriptionText = Array.isArray(description)
    ? description.join("\n")
    : description;

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
        className="text-text-primary whitespace-pre-line"
        style={{ fontSize: BODY_SIZE_VAR[size], lineHeight: 1.5 }}
      >
        {descriptionText}
      </p>
      {skills && (
        <p
          className={`text-text-primary ${skillsItalic ? "italic" : ""}`}
          style={{
            fontSize: BODY_SIZE_VAR[size],
            lineHeight: 1.5,
            /* Flex `gap` already adds --card-gap above this element —
               top up to a full blank-line-sized gap on top of that. */
            marginTop: `calc(${BODY_SIZE_VAR[size]} * 1.5 - var(--card-gap))`,
          }}
        >
          {skills}
        </p>
      )}
    </div>
  );
}
