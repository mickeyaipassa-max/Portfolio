"use client";

import { useRef } from "react";
import { Button } from "@/components/Button/Button";
import styles from "./ContactHero.module.css";

const CONTACT_EMAIL = "mickeyaipassa@hotmail.com";

// There is no backend: sending opens the visitor's mail app with the message
// filled in.
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = name ? `Message from ${name}` : "Message via your portfolio";
    const body = `${message}\n\n${name}\n${email}`.trim();
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const send = () => formRef.current?.requestSubmit();

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>Name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          className={styles.input}
        />
      </label>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>Email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email address"
          className={styles.input}
        />
      </label>
      <label className={`${styles.field} ${styles.fieldMessage}`}>
        <span className={styles.fieldLabel}>Message</span>
        <textarea name="message" placeholder="How can I help you?" className={styles.textarea} />
      </label>
      <div className={styles.buttonsL}>
        <Button type="primary" size="l" onClick={send}>
          Send message
        </Button>
      </div>
      <div className={styles.buttonsM}>
        <Button type="primary" size="m" onClick={send}>
          Send message
        </Button>
      </div>
      <div className={styles.buttonsS}>
        <Button type="primary" size="s" onClick={send}>
          Send message
        </Button>
      </div>
    </form>
  );
}
