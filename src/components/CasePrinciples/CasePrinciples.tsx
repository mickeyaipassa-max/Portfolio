import { Card } from "@/components/Card/Card";
import styles from "./CasePrinciples.module.css";

/*
 * The first two descriptions end in a line break in Figma, which makes
 * their text box one empty line taller; "\n\u200B" reproduces that line.
 */
const PRINCIPLES = [
  {
    tag: "Simple by default",
    title: "Simple where possible, detailed where needed.",
    description:
      "Keep the experience focused and only introduce complexity when it adds value or is necessary.\n\u200B",
  },
  {
    tag: "Effortless",
    title: "Remove unnecessary friction.",
    description:
      "Minimise the effort required to understand, navigate and complete the application.\n\u200B",
  },
  {
    tag: "Adaptive",
    title: "Make the journey respond to the user.",
    description:
      "Use known information and previous answers to show only what’s relevant and adapt the experience along the way.",
  },
  {
    tag: "Clear & transparent",
    title: "Always make it clear what we ask and why.",
    description:
      "Use understandable language, provide context when needed and help users know where they are and what comes next.",
  },
  {
    tag: "Effortless",
    title: "Get users to a meaningful outcome quickly.",
    description:
      "Reduce unnecessary steps and questions to shorten the path from starting an application to receiving a quote.",
  },
  {
    tag: "Consistent & evolving",
    title: "Build once, learn continuously.",
    description:
      "Use shared patterns across products and channels, while using data and experimentation to continuously improve the experience.",
  },
];

export function CasePrinciples() {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Our design principles</h2>
      <div className={styles.cards}>
        {PRINCIPLES.map((principle, i) => (
          <Card key={i} size="l" fill {...principle} />
        ))}
      </div>
    </div>
  );
}
