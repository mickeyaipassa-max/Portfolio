import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";
import { ContactHero } from "@/components/ContactHero/ContactHero";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — Mickey Aipassa",
  description: "Get in touch with Mickey Aipassa",
};

const HREFS = {
  "latest-work": "/latest-work",
  "about-me": "/about",
  expertises: "/expertises",
  contact: "/contact",
};

export default function Contact() {
  return (
    <>
      <Navigation hrefs={HREFS} activeItem="contact" />
      <ContactHero />
      <div className={styles.footer}>
        <Footer hrefs={HREFS} />
      </div>
    </>
  );
}
