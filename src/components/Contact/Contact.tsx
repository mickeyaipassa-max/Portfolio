import styles from "./Contact.module.css";

export function Contact({ phoneText = "+316 15 68 56 38" }: { phoneText?: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.group}>
        <a href="mailto:mickeyaipassa@hotmail.com" className={styles.item}>
          <span className={styles.pill}>Mail me</span>
          <span className={styles.itemContent}>
            <img src="/contact/mail.svg" alt="" className={styles.icon} />
            <span className={styles.itemText}>Mickeyaipassa@hotmail.com</span>
          </span>
        </a>
        <a href="tel:+31615685638" className={`${styles.item} ${styles.itemFill}`}>
          <span className={styles.pill}>Call me</span>
          <span className={styles.itemContent}>
            <img src="/contact/phone.svg" alt="" className={styles.icon} />
            <span className={styles.itemText}>{phoneText}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
