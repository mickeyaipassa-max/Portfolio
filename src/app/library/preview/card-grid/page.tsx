import { CardGrid, type Service } from "@/components/CardGrid/CardGrid";

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

export default function CardGridPreview() {
  return (
    <div className="grid-container">
      <CardGrid services={SERVICES} />
    </div>
  );
}
