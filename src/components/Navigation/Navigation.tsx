"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <Link
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
    </Link>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="relative block size-[var(--nav-logo-size)] shrink-0"
    >
      <Image
        src="/nav/logo.webp"
        alt=""
        fill
        sizes="120px"
        className="object-cover"
        priority
      />
    </Link>
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

function NavRow({ hrefs, activeItem, onMenuToggle }: NavigationProps) {
  return (
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
  );
}

/*
 * Two bars: the regular header (in the page flow, no background of its own)
 * and a sticky copy that is pinned to the top of the viewport. The sticky one
 * only slides in once the regular header has scrolled out of view; it has a
 * white background and Figma's shadow (0 0 12.9px at 15%). Below 900px (S/XS)
 * its logo is 40% smaller (84px -> 50.4px), so the bar is 66.4px instead of
 * 100px. The sticky copy is fixed, so it never takes up space in the layout.
 */
export function Navigation(props: NavigationProps) {
  const barRef = useRef<HTMLElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const observer = new IntersectionObserver(([entry]) => {
      setStuck(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav ref={barRef} aria-label="Hoofdnavigatie" className="w-full py-2">
        <NavRow {...props} />
      </nav>

      <nav
        aria-label="Hoofdnavigatie (vast)"
        aria-hidden={!stuck}
        inert={!stuck}
        className={`fixed inset-x-0 top-0 z-50 bg-white py-2 shadow-[0_0_12.9px_rgba(0,0,0,0.15)] transition-[transform,visibility] duration-200 max-[899px]:[--nav-logo-size:50.4px] motion-reduce:transition-none ${
          stuck ? "visible translate-y-0" : "invisible -translate-y-full"
        }`}
      >
        <NavRow {...props} />
      </nav>
    </>
  );
}
