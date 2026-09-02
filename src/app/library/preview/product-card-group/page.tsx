import {
  ProductCardGroup,
  type Project,
} from "@/components/ProductCardGroup/ProductCardGroup";

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

export default function ProductCardGroupPreview() {
  return (
    <div className="grid-container">
      <ProductCardGroup projects={PROJECTS} />
    </div>
  );
}
