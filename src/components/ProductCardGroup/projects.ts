import type { Project } from "./ProductCardGroup";

// The three cases shown on Home and on the Latest work page.
export const PROJECTS: [Project, Project, Project] = [
  {
    client: "a.s.r. Nederland",
    title: "Generic purchase flow",
    discipline: "Ux & Ui Design",
    href: "/caseasr",
    mediaSrc: "/product-cards/asr-nederland.webp",
    mediaAlt: "a.s.r. Nederland project",
    mediaFit: "contain",
  },
  {
    client: "RocketSourcers",
    title: "New website",
    discipline: "Ux, Ui & Visual Design",
    href: "#",
    mediaSrc: "/product-cards/rocketsourcers.webp",
    mediaAlt: "RocketSourcers project",
  },
  {
    client: "Lotus Cars",
    title: "Digital campaign",
    discipline: "Ux, Ui & Visual Design",
    href: "#",
    mediaSrc: "/product-cards/lotus-cars.webp",
    mediaAlt: "Lotus Cars project",
  },
];
