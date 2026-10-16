import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";
import { LatestWorkHero } from "@/components/LatestWorkHero/LatestWorkHero";
import { Footer } from "@/components/Footer/Footer";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Latest work — Mickey Aipassa",
  description:
    "Selected work by Mickey Aipassa: a generic purchase flow for a.s.r. Nederland, a new website for RocketSourcers and a digital campaign for Lotus Cars.",
  path: "/latest-work",
});

const HREFS = {
  "latest-work": "/latest-work",
  "about-me": "/about",
  expertises: "/expertises",
  contact: "/contact",
};

export default function LatestWork() {
  return (
    <>
      <Navigation hrefs={HREFS} activeItem="latest-work" />
      <LatestWorkHero />
      <div className={styles.footer}>
        <Footer hrefs={HREFS} />
      </div>
    </>
  );
}
