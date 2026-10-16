import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";
import { LatestWorkHero } from "@/components/LatestWorkHero/LatestWorkHero";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Latest work — Mickey Aipassa",
  description: "Latest work by Mickey Aipassa",
};

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
