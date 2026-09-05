import { Navigation } from "@/components/Navigation/Navigation";
import { Hero } from "@/components/Hero/Hero";
import { IHeartTo } from "@/components/IHeartTo/IHeartTo";
import { AboutIntro } from "@/components/AboutIntro/AboutIntro";
import { Contact } from "@/components/Contact/Contact";
import { CardGrid, type Service } from "@/components/CardGrid/CardGrid";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import {
  ProductCardGroup,
  type Project,
} from "@/components/ProductCardGroup/ProductCardGroup";
import { LogoCarousel } from "@/components/LogoCarousel/LogoCarousel";
import styles from "./page.module.css";

const HOW_I_WORK: [Service, Service, Service, Service] = [
  {
    tag: "Understand",
    title: "Start with the right problem",
    description:
      "I combine user needs, business goals and data to understand the bigger picture and identify where design can make the most impact.",
  },
  {
    tag: "Explore",
    title: "Turn insights into possibilities",
    description:
      "I translate insights into journeys, concepts and prototypes. I explore quickly, challenge assumptions and use AI where it helps accelerate the process.",
  },
  {
    tag: "Validate",
    title: "Learn before scaling",
    description:
      "I turn assumptions into hypotheses and validate ideas through user feedback, data and experimentation iterating based on what we learn.",
  },
  {
    tag: "Align & Deliver",
    title: "Bring people along",
    description:
      "I collaborate closely with product, tech and stakeholders to create alignment, make decisions and turn ideas into polished, scalable experiences.",
  },
];

const PROJECTS: [Project, Project, Project] = [
  {
    client: "a.s.r. Nederland",
    title: "Service & Contact",
    discipline: "Ux & Ui Design",
    href: "#",
    mediaSrc: "/product-cards/asr-nederland.png",
    mediaAlt: "a.s.r. Nederland project",
  },
  {
    client: "RocketSourcers",
    title: "New Website",
    discipline: "Ux, Ui & Visual Design",
    href: "#",
    mediaSrc: "/product-cards/rocketsourcers.png",
    mediaAlt: "RocketSourcers project",
  },
  {
    client: "Lotus Cars",
    title: "Digital campaign",
    discipline: "Ux, Ui & Visual Design",
    href: "#",
    mediaSrc: "/product-cards/lotus-cars.png",
    mediaAlt: "Lotus Cars project",
  },
];

export default function Home() {
  return (
    <>
      {/* Temporary test hrefs for visual validation only — Figma defines no
          link destinations, so these are not part of the component's design. */}
      <Navigation
        hrefs={{
          "latest-work": "#latest-work",
          "about-me": "#about-me",
          expertises: "#expertises",
          contact: "#contact",
        }}
        activeItem="about-me"
      />
      <Hero />

      <div className={`grid-container ${styles.heroToIlto}`}>
        <IHeartTo />
      </div>

      <div className={`grid-container ${styles.iltoToHeading}`}>
        <SectionHeading>Latest work...</SectionHeading>
      </div>

      <div className="grid-container relative isolate mt-6">
        <div className={styles.orangeBackdrop} aria-hidden="true" />
        <ProductCardGroup projects={PROJECTS} />
      </div>

      <div className={`grid-container ${styles.pcgToHowIWorkHeading}`}>
        <SectionHeading>How I work</SectionHeading>
      </div>

      <div className={`grid-container ${styles.howIWorkHeadingToCards}`}>
        <CardGrid services={HOW_I_WORK} />
      </div>

      <div className={`grid-container ${styles.howIWorkToLogoCarousel}`}>
        <LogoCarousel />
      </div>

      <div className={`${styles.aboutIntroWrap} ${styles.logoCarouselToAboutIntro}`}>
        <AboutIntro />
      </div>

      <div className={`${styles.contactWrap} ${styles.aboutIntroToContact}`}>
        <Contact />
      </div>
    </>
  );
}
