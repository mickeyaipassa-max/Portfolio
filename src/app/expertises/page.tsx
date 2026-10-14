import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";
import { ExpertisesHero } from "@/components/ExpertisesHero/ExpertisesHero";
import { ExpertisesWork } from "@/components/ExpertisesWork/ExpertisesWork";
import { ExpertisesCta } from "@/components/ExpertisesCta/ExpertisesCta";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Expertises — Mickey Aipassa",
  description: "Expertises of Mickey Aipassa",
};

export default function Expertises() {
  return (
    <>
      <Navigation
        hrefs={{
          "latest-work": "/#latest-work",
          "about-me": "/about",
          expertises: "/expertises",
          contact: "/contact",
        }}
        activeItem="expertises"
      />
      <ExpertisesHero />
      <ExpertisesWork />
      <ExpertisesCta />
      {/* The Figma footer frame wraps the Footer in 40px block padding */}
      <div className={styles.footer}>
        <Footer
          hrefs={{
            "latest-work": "/#latest-work",
            "about-me": "/about",
            expertises: "/expertises",
            contact: "/contact",
          }}
        />
      </div>
    </>
  );
}
