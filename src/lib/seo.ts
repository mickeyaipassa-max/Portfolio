import type { Metadata } from "next";

export const SITE_URL = "https://mickeyaipassa.nl";
export const SITE_NAME = "Mickey Aipassa";

// Public pages, in the order they appear in the menu (plus the case study).
export const PAGES = ["/", "/latest-work", "/about", "/expertises", "/contact", "/caseasr"] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path of the page, e.g. "/caseasr" — used for the canonical and og:url. */
  path: string;
};

// A page's own title/description, plus the canonical URL and the Open Graph
// and Twitter tags (Next does not copy these from the title/description).
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, type: "website" },
    twitter: { card: "summary", title, description },
  };
}
