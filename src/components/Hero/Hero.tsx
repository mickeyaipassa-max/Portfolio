import Image from "next/image";
import styles from "./Hero.module.css";

const SKILLS = ["Ux & Ui design", "Product design", "AI-Driven"];

export function Hero() {
  return (
    <div className={`${styles.hero} grid-container`}>
      <h1>
        <img
          src="/hero/mickey-aipassa.svg"
          alt="Mickey Aipassa"
          className="block w-full"
        />
      </h1>

      <div className={`${styles.card} bg-background flex flex-col gap-[10px]`}>
        <p
          className="font-medium text-text-primary"
          style={{ fontSize: "var(--hero-tagline-size)", lineHeight: 1.4 }}
        >
          &ldquo;I design digital products from complex journeys to validated
          experiences.&rdquo;
        </p>
        <ul className="flex items-center gap-2">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-[90px] border border-accent bg-background px-6 py-2 font-normal text-text-primary whitespace-nowrap"
              style={{ fontSize: "var(--hero-chip-size)", lineHeight: 1.4 }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.photo}>
        <Image
          src="/hero/photo.png"
          alt="Portret van Mickey Aipassa"
          fill
          sizes="340px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
