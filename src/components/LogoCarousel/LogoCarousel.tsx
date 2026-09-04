import styles from "./LogoCarousel.module.css";

type LogoDef = {
  src: string;
  alt: string;
  style: React.CSSProperties;
};

const LOGOS: LogoDef[] = [
  {
    src: "/logos/openbaar-ministerie.png",
    alt: "Openbaar Ministerie",
    style: { width: "var(--logo-om-size)", height: "var(--logo-om-size)" },
  },
  {
    src: "/logos/lotus.svg",
    alt: "Lotus Cars",
    style: { width: "var(--logo-lotus-w)", height: "var(--logo-lotus-h)" },
  },
  {
    src: "/logos/asr.svg",
    alt: "a.s.r.",
    style: { width: "var(--logo-asr-w)", height: "var(--logo-asr-h)" },
  },
  {
    src: "/logos/freshcotton.svg",
    alt: "freshcotton",
    style: {
      width: "var(--logo-freshcotton-w)",
      height: "var(--logo-freshcotton-h)",
    },
  },
  {
    src: "/logos/rocketsourcers.svg",
    alt: "RocketSourcers",
    style: {
      width: "var(--logo-rocketsourcers-w)",
      height: "var(--logo-rocketsourcers-h)",
    },
  },
  {
    src: "/logos/knaap.svg",
    alt: "KNAAP",
    style: { width: "var(--logo-knaap-w)", height: "var(--logo-knaap-h)" },
  },
];

function LogoImage({ logo, decorative }: { logo: LogoDef; decorative?: boolean }) {
  return (
    <img
      src={logo.src}
      alt={decorative ? "" : logo.alt}
      aria-hidden={decorative || undefined}
      style={logo.style}
      className="shrink-0 object-contain"
    />
  );
}

export function LogoCarousel() {
  return (
    <div
      className="flex flex-col items-center rounded-[var(--logo-carousel-radius)] bg-surface-subtle"
      style={{
        paddingBlock: "var(--logo-carousel-padding-block)",
        gap: "var(--logo-carousel-gap)",
      }}
    >
      <p
        className="text-center font-semibold text-text-primary"
        style={{
          fontSize: "var(--font-size-logo-carousel-heading)",
          lineHeight: "normal",
        }}
      >
        Worked for
      </p>

      {/* XXL/XL/L (>=1200px): all logos, static, fully visible */}
      <div
        className="hidden flex-wrap items-center justify-center min-[1200px]:flex"
        style={{ gap: "var(--logo-carousel-row-gap)" }}
      >
        {LOGOS.map((logo) => (
          <LogoImage key={logo.alt} logo={logo} />
        ))}
      </div>

      {/* M/S/XS (<1200px): infinite seamless marquee */}
      <div className={`flex w-full min-[1200px]:hidden ${styles.viewport}`}>
        <div className={styles.track} style={{ gap: "var(--logo-carousel-row-gap)" }}>
          {LOGOS.map((logo) => (
            <LogoImage key={`a-${logo.alt}`} logo={logo} />
          ))}
          {LOGOS.map((logo) => (
            <LogoImage key={`b-${logo.alt}`} logo={logo} decorative />
          ))}
        </div>
      </div>
    </div>
  );
}
