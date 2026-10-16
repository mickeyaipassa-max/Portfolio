import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({ url: path === "/" ? SITE_URL : `${SITE_URL}${path}` }));
}
