import Image from "next/image";
import { ContactForm } from "./ContactForm";
import styles from "./ContactHero.module.css";

const EMAIL = "Mickeyaipassa@hotmail.com";
const PHONE = "+31(0) 61 56 85 638";

// The Contact design shows the number in this notation; the link keeps the
// plain international number.
const PHONE_HREF = "tel:+31615685638";

function DetailRow({
  pill,
  icon,
  href,
  text,
}: {
  pill: string;
  icon: string;
  href: string;
  text: string;
}) {
  return (
    <a href={href} className={styles.detail}>
      <span className={styles.pill}>{pill}</span>
      <span className={styles.detailItem}>
        {/* eslint-disable-next-line @next/next/no-img-element -- 24px Feather SVGs */}
        <img src={`/contact/${icon}.svg`} alt="" aria-hidden="true" className={styles.detailIcon} />
        <span className={styles.detailText}>{text}</span>
      </span>
    </a>
  );
}

export function ContactHero() {
  return (
    <section className={`grid-container ${styles.hero}`} aria-labelledby="contact-title">
      <span className={styles.word} aria-hidden="true">
        CONTACT
      </span>

      <div className={styles.cols}>
        <div className={styles.left}>
          <div className={`${styles.card} ${styles.intro} ${styles.blur}`}>
            <div className={styles.heading}>
              <p className={`${styles.label} ${styles.labelWide}`}>LET&apos;S WORK TOGETHER</p>
              <h1 id="contact-title" className={styles.title}>
                Looking for a product designer who turns ideas into{" "}
                <span className={styles.accent}>impact?</span>
              </h1>
            </div>
            <p className={styles.body}>
              I&apos;m open to new opportunities, from full-time roles to freelance projects.
              Let&apos;s connect and explore how I can help your team.
            </p>
          </div>

          <div className={`${styles.card} ${styles.details}`}>
            <p className={`${styles.label} ${styles.labelTight}`}>CONTACT DETAILS</p>
            <DetailRow pill="Mail me" icon="mail" href={`mailto:${EMAIL}`} text={EMAIL} />
            <DetailRow pill="Call me" icon="phone" href={PHONE_HREF} text={PHONE} />
          </div>
        </div>

        <div className={`${styles.card} ${styles.message} ${styles.blur}`}>
          <p className={`${styles.label} ${styles.labelTight}`}>SEND A MESSAGE</p>
          <ContactForm />
        </div>
      </div>
      <div className={styles.photo}>
        <Image
          src="/contact/photo-chair.webp"
          alt="Mickey Aipassa zittend in een fauteuil met een laptop"
          fill
          sizes="(min-width: 1440px) 607px, (min-width: 1200px) 589px, (min-width: 900px) 427px, (min-width: 600px) 321px, 244px"
          className={styles.photoImg}
          priority
        />
      </div>
    </section>
  );
}
