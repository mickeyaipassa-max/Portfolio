import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";
import { Footer } from "@/components/Footer/Footer";
import { CaseHero } from "@/components/CaseHero/CaseHero";
import { CaseFacts } from "@/components/CaseFacts/CaseFacts";
import { CaseChallenge } from "@/components/CaseChallenge/CaseChallenge";
import { PhotoTextCard } from "@/components/PhotoTextCard/PhotoTextCard";
import { CaseFindings } from "@/components/CaseFindings/CaseFindings";
import { CaseConclusion } from "@/components/CaseConclusion/CaseConclusion";
import { CasePrinciples } from "@/components/CasePrinciples/CasePrinciples";
import { CaseBehaviour } from "@/components/CaseBehaviour/CaseBehaviour";
import { CaseCarousel } from "@/components/CaseCarousel/CaseCarousel";
import { CaseResults } from "@/components/CaseResults/CaseResults";
import styles from "./caseasr.module.css";

export const metadata: Metadata = {
  title: "Insurance Purchase Flow — a.s.r. Nederland",
};

const NAV_HREFS = {
  "latest-work": "/latest-work",
  "about-me": "/about",
  expertises: "/expertises",
  contact: "/contact",
};

export default function CaseAsr() {
  return (
    <div className={styles.page}>
      <Navigation hrefs={NAV_HREFS} />

      <div className={`grid-container ${styles.hero}`}>
        <CaseHero />
      </div>

      <div className={`grid-container ${styles.facts}`}>
        <CaseFacts />
      </div>

      <div className={`grid-container ${styles.challenge}`}>
        <CaseChallenge />
      </div>

      <div className={`grid-container ${styles.section} ${styles.journey}`}>
        <PhotoTextCard
          backPhoto={{
            src: "/case-asr/journey-back.webp",
            alt: "Een scherm uit de bestaande aanvraagflow",
            crop: { width: "100%", height: "239.36%", left: "0", top: "-0.05%" },
          }}
          frontPhoto={{
            src: "/case-asr/journey-front.webp",
            alt: "Een tweede scherm uit de bestaande aanvraagflow",
            crop: { width: "100%", height: "195.42%", left: "0", top: "0.05%" },
          }}
          heading="Understanding the"
          headingSecondLine="existing journey"
          paragraphs={[
            "Rather than starting with screens, I started by looking at the existing application journey as a whole. I mapped the flow from start to finish and combined this with available data, existing UX knowledge and the different requirements surrounding the application process.",
            "This helped me identify where customers experienced friction, where similar problems were solved in different ways, and where product-specific solutions had created unnecessary complexity.",
          ]}
          shadow
          variant="tight"
        />
      </div>

      <div className={`grid-container ${styles.section} ${styles.findings}`}>
        <CaseFindings />
      </div>

      <div className={`grid-container ${styles.section} ${styles.conclusion}`}>
        <CaseConclusion />
      </div>

      <div className={`grid-container ${styles.section} ${styles.principles}`}>
        <CasePrinciples />
      </div>

      <div className={`grid-container ${styles.section} ${styles.behaviour}`}>
        <CaseBehaviour />
      </div>

      <div className={`grid-container ${styles.section} ${styles.carousel}`}>
        <CaseCarousel />
      </div>

      <div className={`grid-container ${styles.section} ${styles.results}`}>
        <CaseResults />
      </div>

      <div className={`grid-container ${styles.section} ${styles.footer}`}>
        <Footer hrefs={NAV_HREFS} />
      </div>
    </div>
  );
}
