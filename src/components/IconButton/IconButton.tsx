type IconButtonSize = "s" | "m" | "l";
type IconButtonState = "default" | "hover" | "pressed";

const SIZE_STYLE: Record<IconButtonSize, { size: string; padding: string }> = {
  l: { size: "56px", padding: "20px" },
  m: { size: "48px", padding: "16px" },
  s: { size: "34px", padding: "10px" },
};

const FORCE_COLOR: Record<IconButtonState, string> = {
  default: "var(--color-accent)",
  hover: "var(--color-accent-hover)",
  pressed: "var(--color-accent-pressed)",
};

// Live (non-forced) colors go through static Tailwind classes rather
// than inline style — an inline background color would always beat
// hover:/active: classes in the cascade, making hover impossible to
// ever show (see Button.tsx for the same fix).
const LIVE_CLASSES =
  "bg-[var(--color-accent)] enabled:hover:bg-[var(--color-accent-hover)] enabled:active:bg-[var(--color-accent-pressed)]";

type IconButtonProps = {
  size: IconButtonSize;
  /** Accessible name — this button has no visible text, only an icon. */
  ariaLabel: string;
  href?: string;
  onClick?: () => void;
  /**
   * Forces a specific visual state regardless of real interaction —
   * used only by the component library showcase to demo Hover/Pressed
   * states statically. Live usage should omit this and rely on real
   * :hover/:active.
   */
  forceState?: IconButtonState;
};

export function IconButton({
  size,
  ariaLabel,
  href,
  onClick,
  forceState,
}: IconButtonProps) {
  const isForced = forceState !== undefined;
  const { size: boxSize, padding } = SIZE_STYLE[size];

  const style: React.CSSProperties = {
    width: boxSize,
    height: boxSize,
    padding,
    ...(isForced ? { backgroundColor: FORCE_COLOR[forceState] } : {}),
  };

  const className = `inline-flex shrink-0 items-center justify-center rounded-full transition-colors ${
    isForced ? "" : LIVE_CLASSES
  }`;

  const icon = (
    <img
      src="/icon-button/arrow.svg"
      alt=""
      aria-hidden="true"
      className="size-full"
    />
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={className} style={style}>
        {icon}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
      style={style}
    >
      {icon}
    </button>
  );
}
