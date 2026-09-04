type ButtonType = "primary" | "secondary";
type ButtonSize = "s" | "m" | "l";
type ButtonState = "default" | "hover" | "pressed" | "disabled";

type ColorSet = { bg: string; border: string; text: string };

const COLORS: Record<ButtonType, Record<ButtonState, ColorSet>> = {
  primary: {
    default: { bg: "var(--color-accent)", border: "transparent", text: "#ffffff" },
    hover: { bg: "var(--color-accent-hover)", border: "transparent", text: "#ffffff" },
    pressed: { bg: "var(--color-accent-pressed)", border: "transparent", text: "#ffffff" },
    disabled: {
      bg: "var(--color-disabled-bg)",
      border: "transparent",
      text: "var(--color-disabled-text)",
    },
  },
  secondary: {
    default: {
      bg: "transparent",
      border: "var(--color-accent)",
      text: "var(--color-text-primary)",
    },
    hover: { bg: "transparent", border: "var(--color-accent-hover)", text: "var(--color-accent)" },
    pressed: {
      bg: "transparent",
      border: "var(--color-accent-pressed)",
      text: "var(--color-text-primary)",
    },
    disabled: {
      bg: "transparent",
      border: "var(--color-disabled-bg)",
      text: "var(--color-disabled-text)",
    },
  },
};

const FONT_SIZE_VAR: Record<ButtonSize, string> = {
  s: "var(--font-size-button-s)",
  m: "var(--font-size-button-m)",
  l: "var(--font-size-button-l)",
};

const PADDING_BLOCK_VAR: Record<ButtonSize, string> = {
  s: "var(--button-padding-block-s)",
  m: "var(--button-padding-block-m)",
  l: "var(--button-padding-block-l)",
};

// Live (non-forced) color + interaction classes, fully static so
// Tailwind's scanner can see every one of them. Colors can't be set
// via inline `style` here: an inline style always wins the cascade
// over a class, including hover:/active: classes, which would make
// hover impossible to ever show. `:enabled`/`:disabled` only ever
// match real form controls, never <a>, so the link variant drops that
// guard entirely and has no disabled state (a disabled Button never
// renders as a link — see isLink below).
const LIVE_CLASSES: Record<ButtonType, { link: string; button: string }> = {
  primary: {
    link: "bg-[var(--color-accent)] text-white border-transparent hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-pressed)]",
    button:
      "bg-[var(--color-accent)] text-white border-transparent enabled:hover:bg-[var(--color-accent-hover)] enabled:active:bg-[var(--color-accent-pressed)] disabled:bg-[var(--color-disabled-bg)] disabled:text-[var(--color-disabled-text)]",
  },
  secondary: {
    link: "bg-transparent text-text-primary border-[var(--color-accent)] hover:border-[var(--color-accent-hover)] hover:text-[var(--color-accent)] active:border-[var(--color-accent-pressed)] active:text-text-primary",
    button:
      "bg-transparent text-text-primary border-[var(--color-accent)] enabled:hover:border-[var(--color-accent-hover)] enabled:hover:text-[var(--color-accent)] enabled:active:border-[var(--color-accent-pressed)] enabled:active:text-text-primary disabled:border-[var(--color-disabled-bg)] disabled:text-[var(--color-disabled-text)]",
  },
};

type ButtonProps = {
  type: ButtonType;
  size: ButtonSize;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  /**
   * Forces a specific visual state regardless of real interaction —
   * used only by the component library showcase to demo Hover/Pressed
   * states statically. Live usage should omit this and rely on real
   * :hover/:active/:disabled.
   */
  forceState?: ButtonState;
  /** Fills the width of its parent instead of hugging its own content. */
  fill?: boolean;
};

export function Button({
  type,
  size,
  children,
  href,
  onClick,
  disabled,
  forceState,
  fill = false,
}: ButtonProps) {
  const isForced = forceState !== undefined;
  const effectiveState: ButtonState = forceState ?? (disabled ? "disabled" : "default");
  const isLink = Boolean(href) && effectiveState !== "disabled";

  const sizeStyle: React.CSSProperties = {
    fontSize: FONT_SIZE_VAR[size],
    lineHeight: "normal",
    paddingBlock: PADDING_BLOCK_VAR[size],
  };

  const colorClassName = isForced
    ? ""
    : LIVE_CLASSES[type][isLink ? "link" : "button"];

  const colorStyle: React.CSSProperties = isForced
    ? (() => {
        const colors = COLORS[type][effectiveState];
        return { backgroundColor: colors.bg, borderColor: colors.border, color: colors.text };
      })()
    : {};

  const className = `${fill ? "flex w-full" : "inline-flex"} items-center justify-center rounded-[var(--button-radius)] border border-solid px-[var(--button-padding-inline)] font-medium whitespace-nowrap transition-colors ${colorClassName}`;
  const style = { ...sizeStyle, ...colorStyle };

  if (isLink) {
    return (
      <a href={href} className={className} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={onClick}
      disabled={effectiveState === "disabled"}
    >
      {children}
    </button>
  );
}
