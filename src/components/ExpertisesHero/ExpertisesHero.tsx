import Image from "next/image";
import { Button } from "@/components/Button/Button";
import styles from "./ExpertisesHero.module.css";

const AREAS: [string, string][] = [
  ["01", "PRODUCT STRATEGY & DISCOVERY"],
  ["02", "UX DESIGN & OPTIMISATION"],
  ["03", "UI DESIGN & DESIGN SYSTEMS"],
  ["04", "AI-DRIVEN DESIGN & PROTOTYPING"],
];

// [label, Feather icon file in /public/expertises/skills]
const SKILLS: [string, string][] = [
  ["User research", "search"],
  ["Problem definition", "target"],
  ["Business alignment", "briefcase"],
  ["Roadmapping", "map"],
  ["Journey mapping", "navigation"],
  ["Prototyping", "pen-tool"],
  ["Usability testing", "check-circle"],
  ["Conversion optimisation", "trending-up"],
  ["UI design", "layout"],
  ["Design systems", "layers"],
  ["Accessibility", "eye"],
  ["Component design", "box"],
  ["AI prototyping", "cpu"],
  ["Prompt design", "message-square"],
  ["AI-powered experiences", "zap"],
  ["Innovation", "star"],
];

const TITLE = "From complex challenges to meaningful digital experiences.";
const BODY =
  "I combine product thinking, UX design, and experimentation to turn complex challenges into intuitive digital experiences that deliver value for users and businesses.";

// Figma has no link destinations for these; the CV file doesn't exist yet.
const WORK_HREF = "/#contact";
const CV_HREF = "#";

function ButtonSet({ size, className }: { size: "l" | "m" | "s"; className: string }) {
  return (
    <div className={className}>
      <Button type="primary" size={size} href={WORK_HREF}>
        Let&rsquo;s work together
      </Button>
      <Button type="secondary" size={size} href={CV_HREF}>
        Download CV
      </Button>
    </div>
  );
}

export function ExpertisesHero() {
  return (
    <section className={`grid-container ${styles.hero}`} aria-labelledby="expertises-title">
      <span className={styles.word} aria-hidden="true">
        EXPERTISES
      </span>

      <div className={styles.portrait}>
        <Image
          src="/expertises/portrait-cutout.webp"
          alt="Portret van Mickey Aipassa"
          width={1452}
          height={2580}
          sizes="(min-width: 1800px) 840px, (min-width: 1440px) 630px, (min-width: 1200px) 525px, (min-width: 900px) 531px, (min-width: 600px) 409px, 307px"
          className={styles.portraitImg}
          priority
        />
      </div>

      <div className={styles.cols}>
        <div className={styles.left}>
          <div className={`${styles.card} ${styles.areas}`}>
            <p className={`${styles.label} ${styles.labelTight}`}>AREAS OF EXPERTISE</p>
            {AREAS.map(([n, name]) => (
              <p key={n} className={styles.area}>
                <span className={styles.areaNumber}>{n}</span>
                <span className={styles.areaName}>{name}</span>
              </p>
            ))}
          </div>

          <div className={`${styles.card} ${styles.copy}`}>
            <div className={styles.heading}>
              <p className={`${styles.label} ${styles.labelWide}`}>EXPERTISE</p>
              <h1 id="expertises-title" className={styles.title}>
                {TITLE}
              </h1>
            </div>
            <p className={styles.body}>{BODY}</p>
            <ButtonSet size="l" className={styles.buttonsL} />
            <ButtonSet size="m" className={styles.buttonsM} />
            <ButtonSet size="s" className={styles.buttonsS} />
          </div>
        </div>

        <div className={`${styles.card} ${styles.skills}`}>
          <p className={`${styles.label} ${styles.labelTight}`}>SKILLS</p>
          <ul className={styles.skillList}>
            {SKILLS.map(([name, icon]) => (
              <li key={name} className={styles.skill}>
                {/* eslint-disable-next-line @next/next/no-img-element -- 24px Feather SVGs */}
                <img src={`/expertises/skills/${icon}.svg`} alt="" aria-hidden="true" className={styles.skillIcon} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
