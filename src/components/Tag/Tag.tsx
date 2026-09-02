type TagType = "primary" | "secondary";
type TagSize = "s" | "m" | "l";

const FONT_SIZE_VAR: Record<TagSize, string> = {
  s: "var(--font-size-tag-s)",
  m: "var(--font-size-tag-m)",
  l: "var(--font-size-tag-l)",
};

const PADDING_INLINE_VAR: Record<TagSize, string> = {
  s: "var(--tag-padding-inline-s)",
  m: "var(--tag-padding-inline-m)",
  l: "var(--tag-padding-inline-l)",
};

type TagProps = {
  type: TagType;
  size: TagSize;
  children: React.ReactNode;
};

export function Tag({ type, size, children }: TagProps) {
  const isPrimary = type === "primary";

  return (
    <span
      className="inline-flex w-fit shrink-0 items-center justify-center whitespace-nowrap rounded-[var(--tag-radius)] border border-solid border-accent font-medium"
      style={{
        backgroundColor: isPrimary ? "var(--color-accent)" : "transparent",
        color: isPrimary ? "#ffffff" : "var(--color-brand-black)",
        fontSize: FONT_SIZE_VAR[size],
        paddingBlock: "var(--tag-padding-block)",
        paddingInline: PADDING_INLINE_VAR[size],
      }}
    >
      {children}
    </span>
  );
}
