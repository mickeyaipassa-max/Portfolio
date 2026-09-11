import { Card } from "@/components/Card/Card";
import styles from "./WhatIBring.module.css";

const CARDS: {
  tag: string;
  title: string;
  description: string | string[];
  skills: string;
  skillsItalic?: boolean;
}[] = [
  {
    tag: "Strategy",
    title: "Finding direction in complexity",
    description:
      "I help teams understand complex challenges and turn them into clear opportunities. By combining user needs, business goals, data and stakeholder perspectives, I create focus on what we’re solving and why.",
    skills:
      "Customer journeys · Product thinking · Data & insights · Hypotheses · Stakeholder alignment",
  },
  {
    tag: "Leadership & Collaboration",
    title: "Creating impact beyond design",
    description:
      "I bring people together around design. By managing stakeholders, creating visibility and connecting user needs with business goals, I help teams align, make better decisions and move forward together.",
    skills: "Stakeholder management · Facilitation · Presenting · Alignment · Design advocacy",
  },
  {
    tag: "UI & Systems",
    title: "Crafting experiences that scale",
    description:
      "I care about the details that make an experience feel right. With a background in branding and visual design, I create interfaces that are intuitive, consistent and recognisable, and build systems that help teams maintain that quality at scale.",
    skills: "UI design · Design systems · Components · Figma · Branding · Visual identity",
    skillsItalic: false,
  },
  {
    tag: "AI driven",
    title: "Explore what AI makes possible",
    description: [
      "I use AI as both a design tool and a new design space. It helps me explore ideas, prototype and learn faster, while also challenging me to rethink how people interact with digital products.",
      "I’m interested in finding where AI creates genuine value, not simply adding it because we can.",
    ],
    skills: "AI prototyping · AI workflows · AI experiences · Concepting · Experimentation",
  },
];

export function WhatIBring() {
  return (
    <div className={styles.section}>
      <p className={styles.heading}>What I bring</p>
      <div className={styles.grid}>
        {CARDS.map((card) => (
          <Card key={card.tag} size="l" fill {...card} />
        ))}
      </div>
    </div>
  );
}
