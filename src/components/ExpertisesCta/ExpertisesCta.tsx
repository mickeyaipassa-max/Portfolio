import { Contact } from "@/components/Contact/Contact";
import styles from "./ExpertisesCta.module.css";

// Last section of the Expertises page: a centred call to action with the
// shared Contact component underneath (the earlier buttons are gone).
// The phone number is written the way the Expertises design shows it.
export function ExpertisesCta() {
  return (
    <section className={styles.cta} aria-labelledby="expertises-cta-title">
      <div className={`grid-container ${styles.copy}`}>
        <div className={styles.heading}>
          <p className={styles.label}>LET&apos;S WORK TOGETHER</p>
          <h2 id="expertises-cta-title" className={styles.title}>
            Looking for a product designer who
            <br className={styles.titleBreak} /> turns ideas into{" "}
            <span className={styles.accent}>impact?</span>
          </h2>
        </div>
        <p className={styles.text}>
          I&apos;m open to new opportunities, from full-time roles to freelance projects.
          <br className={styles.textBreak} /> Let&apos;s connect and explore how I can help your
          team.
        </p>
      </div>
      <div className={styles.contact}>
        <Contact phoneText="+31(0) 61 56 85 638" />
      </div>
    </section>
  );
}
