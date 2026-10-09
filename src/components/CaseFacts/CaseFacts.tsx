import styles from "./CaseFacts.module.css";

function Card({
  title,
  className,
  accent = false,
  children,
}: {
  title: string;
  className?: string;
  /** Impact cards: orange title instead of black. */
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.card}${className ? ` ${className}` : ""}`}>
      <p className={`${styles.title}${accent ? ` ${styles.titleAccent}` : ""}`}>
        {title}
      </p>
      <p className={styles.body}>{children}</p>
    </div>
  );
}

function Impact({
  title,
  figure,
  label,
  detail,
  className,
}: {
  title: string;
  figure: string;
  label: string;
  detail: string;
  className?: string;
}) {
  return (
    <Card title={title} className={className} accent>
      <span className={styles.figureLine}>
        <span className={styles.figure}>{figure}</span>
        <span className={styles.figureLabel}> {label}</span>
      </span>
      <span className={styles.figureDetail}>{detail}</span>
    </Card>
  );
}

const SCOPE = "UX · UI · Strategy · Design System · Validation";

export function CaseFacts() {
  return (
    <div className={styles.facts}>
      {/* XXL: five cards, organisation and role are separate. */}
      <div className={styles.wide}>
        <Card title="Role" className={styles.wideRole}>
          Senior Product Designer
        </Card>
        <Card title="Scope" className={styles.wideScope}>
          {SCOPE}
        </Card>
        <Card title="Organisation" className={styles.wideOrganisation}>
          a.s.r. Nederland
        </Card>
        <div className={styles.wideImpacts}>
          <Impact
            title="UX-impact"
            figure="+51%"
            label="Funnelconversie"
            detail="9,7% conversie (vs. 6,4% voorheen)"
          />
          <Impact
            title="Businessimpact"
            figure="+50%"
            label="Verkopen"
            detail="318 verkopen (vs. 212 voorheen)"
          />
        </div>
      </div>

      {/* Below XXL: four cards, organisation and role are merged. */}
      <div className={styles.compact}>
        <Card title="Organisation & Role" className={styles.compactOrganisation}>
          {"a.s.r. Nederland\nSenior Product Designer"}
        </Card>
        <Card title="Scope" className={styles.compactScope}>
          {SCOPE}
        </Card>
        <div className={styles.compactImpacts}>
          <Impact
            title="UX-impact"
            figure="+51%"
            label="Funnelconversie"
            detail="9,7% conversie (vs. 6,4% voorheen)"
          />
          <Impact
            title="Businessimpact"
            figure="+50%"
            label="Verkopen"
            detail="318 verkopen (vs. 212 voorheen)"
          />
        </div>
      </div>
    </div>
  );
}
