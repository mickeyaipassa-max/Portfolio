import { Navigation } from "@/components/Navigation/Navigation";
import { Hero } from "@/components/Hero/Hero";
import { CardGrid, type Service } from "@/components/CardGrid/CardGrid";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import {
  ProductCardGroup,
  type Project,
} from "@/components/ProductCardGroup/ProductCardGroup";
import styles from "./page.module.css";

const SERVICES: [Service, Service, Service, Service] = [
  {
    tag: "Strategy",
    title: "Turning complexity into direction",
    description:
      "I translate user needs, business goals and data into clear opportunities. Through journeys, hypotheses and stakeholder alignment, I help teams focus on what matters.",
    skills:
      "Product strategy · Customer journeys · Data & insights · Hypothesis building · Stakeholder management",
  },
  {
    tag: "Experience",
    title: "Designing experiences that work",
    description:
      "I turn insights into intuitive end-to-end experiences. From early flows and concepts to prototypes, testing and continuous optimisation.",
    skills:
      "UX design · User flows · Prototyping · Validation · Optimisation · Figma",
  },
  {
    tag: "UI & Systems",
    title: "Creating scalable experiences",
    description:
      "I craft polished interfaces and build design systems that create consistency, strengthen brands and help teams design and develop faster.",
    skills:
      "UI design · Design systems · Components · Figma · Branding · Visual identity",
  },
  {
    tag: "AI driven",
    title: "Exploring what AI makes possible",
    description:
      "I use AI throughout the design process to explore, prototype and validate faster, while designing new AI-powered experiences around real user needs.",
    skills:
      "AI prototyping · AI workflows · Concepting · Experimentation · AI experiences",
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

      <div className={`grid-container ${styles.heroToCards}`}>
        <CardGrid services={SERVICES} />
      </div>

      <div className={`grid-container ${styles.cardsToHeading}`}>
        <SectionHeading>Latest work...</SectionHeading>
      </div>

      <div className="grid-container relative isolate mt-6">
        <div className={styles.orangeBackdrop} aria-hidden="true" />
        <ProductCardGroup projects={PROJECTS} />
      </div>
    </>
  );
}
