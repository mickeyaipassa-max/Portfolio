"use client";

import Image from "next/image";

type NavKey = "latest-work" | "about-me" | "expertises" | "contact";

const NAV_ITEMS: { key: NavKey; label: string; icon: string }[] = [
  { key: "latest-work", label: "Latest work", icon: "/nav/feather.svg" },
  { key: "about-me", label: "About me", icon: "/nav/smile.svg" },
  { key: "expertises", label: "Expertises", icon: "/nav/award.svg" },
  { key: "contact", label: "Contact", icon: "/nav/message-circle.svg" },
];

type NavigationProps = {
  /** Figma defines no link destinations — the caller must supply real routes. */
  hrefs: Record<NavKey, string>;
  activeItem?: NavKey;
  onMenuToggle?: () => void;
};

function NavItem({
  href,
  label,
  icon,
  isActive,
}: {
  href: string;
  label: string;
  icon: string;
  isActive: boolean;
}) {
  return (
    <a
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`hidden min-[900px]:flex h-[42px] items-center ${
        isActive ? "text-accent" : "text-text-primary hover:text-accent"
      }`}
    >
      <img src={icon} alt="" aria-hidden="true" className="size-6 shrink-0" />
      <span className="flex items-center justify-center p-[10px]">
        <span
          className={`text-[length:var(--font-size-nav-link)] leading-[normal] font-medium whitespace-nowrap ${
            isActive ? "underline" : ""
          }`}
        >
          {label}
        </span>
      </span>
    </a>
  );
}

function Logo() {
  return (
    <a
      href="/"
      aria-label="Home"
      className="relative block size-[var(--nav-logo-size)] shrink-0"
    >
      <Image
        src="/nav/logo.png"
        alt=""
        fill
        sizes="120px"
        className="object-cover"
        priority
      />
    </a>
  );
}

function MenuIcon() {
  return (
    <span className="relative block size-8" aria-hidden="true">
      <span className="absolute inset-x-[12.5%] top-[41.67%] h-0.5 bg-black" />
      <span className="absolute inset-x-[12.5%] top-1/4 h-0.5 bg-black" />
      <span className="absolute inset-x-[12.5%] top-[58.33%] h-0.5 bg-black" />
      <span className="absolute left-1/2 right-[12.5%] top-3/4 h-0.5 bg-accent" />
    </span>
  );
}

export function Navigation({ hrefs, activeItem, onMenuToggle }: NavigationProps) {
  return (
    <nav aria-label="Hoofdnavigatie" className="w-full py-2">
      <div className="grid-container flex items-center justify-between">
        {NAV_ITEMS.slice(0, 2).map((item) => (
          <NavItem
            key={item.key}
            href={hrefs[item.key]}
            label={item.label}
            icon={item.icon}
            isActive={activeItem === item.key}
          />
        ))}

        <Logo />

        {NAV_ITEMS.slice(2).map((item) => (
          <NavItem
            key={item.key}
            href={hrefs[item.key]}
            label={item.label}
            icon={item.icon}
            isActive={activeItem === item.key}
          />
        ))}

        <button
          type="button"
          aria-label="Menu"
          onClick={onMenuToggle}
          className="flex min-[900px]:hidden"
        >
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}
