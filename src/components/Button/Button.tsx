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
};

export function Button({
  type,
  size,
  children,
  href,
  onClick,
  disabled,
  forceState,
}: ButtonProps) {
  const isForced = forceState !== undefined;
  const effectiveState: ButtonState = forceState ?? (disabled ? "disabled" : "default");
  const colors = COLORS[type][effectiveState];

  const baseStyle: React.CSSProperties = {
    backgroundColor: colors.bg,
    borderColor: colors.border,
    color: colors.text,
    fontSize: FONT_SIZE_VAR[size],
    paddingBlock: PADDING_BLOCK_VAR[size],
  };

  const interactiveClassName = isForced
    ? ""
    : type === "primary"
      ? "enabled:hover:bg-[var(--color-accent-hover)] enabled:active:bg-[var(--color-accent-pressed)] disabled:bg-[var(--color-disabled-bg)] disabled:text-[var(--color-disabled-text)]"
      : "enabled:hover:border-[var(--color-accent-hover)] enabled:hover:text-[var(--color-accent)] enabled:active:border-[var(--color-accent-pressed)] enabled:active:text-[var(--color-text-primary)] disabled:border-[var(--color-disabled-bg)] disabled:text-[var(--color-disabled-text)]";

  const className = `inline-flex items-center justify-center rounded-[var(--button-radius)] border border-solid px-[var(--button-padding-inline)] font-medium whitespace-nowrap transition-colors ${interactiveClassName}`;

  if (href && effectiveState !== "disabled") {
    return (
      <a href={href} className={className} style={baseStyle} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      style={baseStyle}
      onClick={onClick}
      disabled={effectiveState === "disabled"}
    >
      {children}
    </button>
  );
}
