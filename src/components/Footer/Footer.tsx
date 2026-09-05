import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

type FooterNavKey = "latest-work" | "about-me" | "expertises" | "contact";

const FOOTER_LINKS: { key: FooterNavKey; label: string; icon: string }[] = [
  { key: "latest-work", label: "Latest work", icon: "/nav/feather.svg" },
  { key: "about-me", label: "About me", icon: "/nav/smile.svg" },
  { key: "expertises", label: "Expertises", icon: "/nav/award.svg" },
  { key: "contact", label: "Contact", icon: "/nav/message-circle.svg" },
];

type FooterProps = {
  /** Figma defines no link destinations — the caller must supply real routes. */
  hrefs: Record<FooterNavKey, string>;
};

function FooterLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a href={href} className={styles.link}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
      <span className={styles.linkLabel}>{label}</span>
    </a>
  );
}

function FooterLogo() {
  return (
    <Link href="/" aria-label="Home" className={styles.logo}>
      <Image src="/nav/logo.png" alt="" fill sizes="84px" className="object-cover" />
    </Link>
  );
}

export function Footer({ hrefs }: FooterProps) {
  const linkItems = FOOTER_LINKS.map((item) => (
    <FooterLink key={item.key} href={hrefs[item.key]} label={item.label} icon={item.icon} />
  ));
  const copyright = `© ${new Date().getFullYear()} Mickey Aipassa. All rights reserved.`;

  return (
    <footer className={styles.footer}>
      <div className={styles.wide}>
        <div className={styles.row}>
          <FooterLogo />
          <div className={styles.spacer} />
          <nav aria-label="Footer navigatie" className={styles.navLinksWide}>
            {linkItems}
          </nav>
        </div>
        <div className={styles.divider} />
        <p className={styles.copyrightWide}>{copyright}</p>
      </div>

      <div className={styles.narrow}>
        <FooterLogo />
        <nav aria-label="Footer navigatie" className={styles.navLinksNarrow}>
          {linkItems}
        </nav>
        <div className={styles.divider} />
        <p className={styles.copyrightNarrow}>{copyright}</p>
      </div>
    </footer>
  );
}
