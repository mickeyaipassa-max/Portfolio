import styles from "./CaseHero.module.css";

export function CaseHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <div className={styles.titleBlock}>
          <p className={styles.eyebrow}>Design a generic</p>
          <h1 className={styles.title}>
            Insurance
            <br />
            Purchase Flow
          </h1>
        </div>
        <p className={styles.subtitle}>
          How I redesigned our application flow into a scalable, reusable
          experience, balancing user needs, business requirements and design
          system standards.
        </p>
      </div>

      <div className={styles.media}>
        <div className={styles.group}>
          <img
            src="/case-asr/hero-main.webp"
            alt="Het herontworpen aanvraagproces voor een verzekering"
            className={styles.mainImg}
          />
          <img
            src="/case-asr/hero-secondary.webp"
            alt="Detail van het herontworpen aanvraagproces"
            className={styles.secondaryImg}
          />
        </div>
      </div>
    </div>
  );
}
