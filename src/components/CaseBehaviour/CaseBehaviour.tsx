import { IconCard } from "@/components/IconCard/IconCard";
import styles from "./CaseBehaviour.module.css";

/*
 * "We applied it by: …" is its own line block (12px at S/XS, the body
 * size elsewhere) after one blank line.
 */
function Description({ text, applied }: { text: string; applied: string }) {
  return (
    <>
      {text}
      {"\n\n"}
      <span className={styles.applied}>{applied}</span>
    </>
  );
}

const PRINCIPLES = [
  {
    icon: "/case-asr/icons/filter.svg",
    title: "Cognitive Load Reduction",
    description: (
      <Description
        text={"Every extra thought requires effort, so make information easy to understand and process."}
        applied={"We applied it by: Logical grouping · Clear language · Question sequencing"}
      />
    ),
    tag: "Simple by default",
    tag2: "Effortless",
    tag3: "Clear & transparent",
  },
  {
    icon: "/case-asr/icons/git-merge.svg",
    title: "Decision Load Reduction",
    description: (
      <Description
        text={"Every choice requires mental effort, so reduce unnecessary decisions and make choosing feel effortless."}
        applied={"We applied it by: Smart defaults · Fewer choices · Postpone unnecessary decisions"}
      />
    ),
    tag: "Understand",
    tag2: "Explore & learn",
    tag3: "Validate",
  },
  {
    icon: "/case-asr/icons/eye.svg",
    title: "Progressive Disclosure",
    description: (
      <Description
        text={"Information is most useful when it’s relevant so show users what they need, when they need it."}
        applied={"We applied it by: Contextual information · Relevant follow-up questions · Exceptions only when needed"}
      />
    ),
    tag: "Simple by default",
    tag2: "Effortless",
    tag3: "Clear & transparent",
  },
  {
    icon: "/case-asr/icons/feather.svg",
    title: "Perceived Effort",
    description: (
      <Description
        text={"How hard it feels matters more than how many steps it takes so \nreduce the perceived effort throughout the journey."}
        applied={"We applied it by: Smart prefill · Familiar formats · Early wins · Positive feedback"}
      />
    ),
    tag: "Understand",
    tag2: "Explore & learn",
    tag3: "Validate",
  },
];

export function CaseBehaviour() {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Designing for human behaviour</h2>
        <p className={styles.intro}>
          Principles gave us direction, but we also wanted to understand how
          we could reduce effort throughout the journey. We translated
          behavioural insights into four principles that could guide
          concrete design decisions.
        </p>
      </div>
      <div className={styles.cards}>
        {PRINCIPLES.map((principle) => (
          <IconCard key={principle.title} size="l" {...principle} />
        ))}
      </div>
    </div>
  );
}
