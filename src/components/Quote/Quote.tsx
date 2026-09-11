import styles from "./Quote.module.css";

export function Quote() {
  return (
    <div className={styles.quote}>
      <p className={styles.quoteText}>
        &ldquo;I believe the best solutions emerge when different
        perspectives come together.&rdquo;
      </p>
      <p className={styles.eyebrow}>Better together</p>
    </div>
  );
}
