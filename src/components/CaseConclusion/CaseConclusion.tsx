import styles from "./CaseConclusion.module.css";

export function CaseConclusion() {
  return (
    <div className={styles.conclusion}>
      <p className={styles.label}>What we concluded</p>
      <p className={styles.quote}>
        &ldquo;These weren&rsquo;t isolated UX issues. Together, they
        <br className={styles.lineBreak} /> pointed to a bigger problem: we
        needed to<br className={styles.lineBreak} /> rethink the application
        journey as a system.&rdquo;
      </p>
    </div>
  );
}
