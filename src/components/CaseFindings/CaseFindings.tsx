import { IconCard } from "@/components/IconCard/IconCard";
import styles from "./CaseFindings.module.css";

const FINDINGS = [
  {
    icon: "/case-asr/icons/git-branch.svg",
    title: "Fragmented experience",
    description:
      "Different funnels used different structures and interaction patterns, creating an inconsistent experience.",
  },
  {
    icon: "/case-asr/icons/log-out.svg",
    title: "Early drop-off",
    description:
      "A significant number of users left during the first step of the application.",
  },
  {
    icon: "/case-asr/icons/compass.svg",
    title: "No sense of progress",
    description:
      "Users had little indication of where they were or what was still ahead.",
  },
  {
    icon: "/case-asr/icons/layers.svg",
    title: "High cognitive load",
    description:
      "Dense pages, insurance terminology and multiple questions increased complexity.",
  },
  {
    icon: "/case-asr/icons/alert-triangle.svg",
    title: "Legacy & accessibility",
    description:
      "Legacy solutions lacked design system components and introduced accessibility issues.",
  },
  {
    icon: "/case-asr/icons/sliders.svg",
    title: "Hard to experiment",
    description:
      "The technical setup made even small \nA/B tests development-heavy and slow to implement.",
  },
];

export function CaseFindings() {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <h2 className={styles.heading}>What we found</h2>
        <p className={styles.intro}>
          The existing journeys revealed recurring issues across experience,
          consistency, accessibility and technology.
        </p>
      </div>
      <div className={styles.cards}>
        {FINDINGS.map((finding) => (
          <IconCard key={finding.title} size="l" {...finding} />
        ))}
      </div>
    </div>
  );
}
