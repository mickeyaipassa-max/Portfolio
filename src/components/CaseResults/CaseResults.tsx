import { Tag } from "@/components/Tag/Tag";
import styles from "./CaseResults.module.css";

function ResultCard({
  icon,
  title,
  figure,
  label,
  description,
  detailStrong,
  detail,
}: {
  icon: string;
  title: string;
  figure: string;
  label: string;
  description: string;
  detailStrong: string;
  detail: string;
}) {
  return (
    <div className={styles.card}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardText}>
        <span className={`${styles.line} ${styles.line1}`}>
          <span className={styles.figure}>{figure}</span>
          <span className={styles.label}>{`   ${label}`}</span>
        </span>
        <span className={`${styles.line} ${styles.description}`}>{description}</span>
        <span className={`${styles.line} ${styles.detail}`}>
          <span className={styles.detailStrong}>{detailStrong}</span>
          <span>{detail}</span>
        </span>
      </p>
    </div>
  );
}

export function CaseResults() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <Tag type="primary" size="l">
          RESULTS
        </Tag>
        <h2 className={styles.heading}>Higher funnel conversion and more sales</h2>
        <p className={styles.intro}>
          The redesigned funnel helps a greater share of visitors complete
          their application (UX impact), resulting in more insurance policies
          sold (business impact).
        </p>
      </div>
      <div className={styles.cards}>
        <ResultCard
          icon="/icon-card/users.svg"
          title="UX impact"
          figure="+51%"
          label="Funnel conversion"
          description="A greater share of visitors complete their application."
          detailStrong="9.7% conversion "
          detail="(vs. 6.4% previously)"
        />
        <ResultCard
          icon="/icon-card/pie-chart.svg"
          title="Business impact"
          figure="+50%"
          label="Sales"
          description="More insurance policies sold through the improved funnel."
          detailStrong="318 sales "
          detail="(vs. 212 previously)"
        />
      </div>
    </div>
  );
}
