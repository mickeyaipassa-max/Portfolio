import styles from "./ExpertisesWork.module.css";

type Metric = [value: string, label: string];
type Item = [icon: string, label: string];

type Expertise = {
  number: string;
  icon: string;
  label: string;
  title: string;
  text: string;
  tags: string[];
  work: {
    title: string;
    text: string;
    href: string;
    items?: Item[];
    metrics?: Metric[];
  };
};

// Copy from the Figma "Expertises" page. Only the a.s.r. case has a page of
// its own; the other "View case study" links have no destination yet.
const EXPERTISES: Expertise[] = [
  {
    number: "01",
    icon: "compass",
    label: "PRODUCT STRATEGY & DISCOVERY",
    title: "Finding the right problems to solve.",
    text: "I help teams understand complex challenges, uncover user needs and business opportunities, and define a clear product direction. By combining research, data and stakeholder input, I turn ambiguity into actionable insights.",
    tags: ["User research", "Problem definition", "Business alignment", "Roadmapping"],
    work: {
      title: "RocketSourcers — Platform strategy",
      text: "Defined the product direction based on user research and business goals, resulting in a focused roadmap.",
      href: "#",
      items: [
        ["user", "User interviews"],
        ["target", "Opportunity mapping"],
        ["check", "Strategy workshop"],
      ],
    },
  },
  {
    number: "02",
    icon: "chart",
    label: "UX DESIGN & OPTIMISATION",
    title: "Designing experiences that make a measurable difference.",
    text: "I design and improve end-to-end user journeys, with a focus on reducing friction and increasing conversion. I validate solutions through testing and iteration to ensure real impact for the users and the business.",
    tags: ["Journey mapping", "Prototyping", "Usability testing", "Conversion optimisation"],
    work: {
      title: "a.s.r. — Insurance application funnels",
      text: "Redesigned the application funnels for home, contents and liability insurance, resulting in higher conversion and more sales.",
      href: "/caseasr",
      metrics: [
        ["+51%", "Funnel conversion (opstalverzekering)"],
        ["+50%", "Completed purchases (opstalverzekering)"],
      ],
    },
  },
  {
    number: "03",
    icon: "layers",
    label: "UI DESIGN & DESIGN SYSTEMS",
    title: "Turning complexity into clear, scalable interfaces.",
    text: "I design intuitive, consistent and accessible interfaces that bring clarity to complex information. I work with design systems to ensure scalability, consistency and efficient collaboration with development teams.",
    tags: ["UI design", "Design systems", "Accessibility", "Component design"],
    work: {
      title: "Lotus Cars — Global website",
      text: "Designed a high-end, content-driven website with a focus on brand experience, performance and a flexible design system.",
      href: "#",
      items: [
        ["grid", "Design system"],
        ["monitor", "High-fidelity UI"],
        ["code", "Developer handover"],
      ],
    },
  },
  {
    number: "04",
    icon: "sparkles",
    label: "AI-DRIVEN DESIGN & PROTOTYPING",
    title: "Exploring new ways to design, prototype and innovate.",
    text: "I use AI tools and emerging technologies to work smarter, explore ideas faster and design new types of digital experiences. From AI-powered features to intelligent prototypes, I help teams unlock the potential of AI in a responsible and user-centered way.",
    tags: ["AI prototyping", "Prompt design", "AI-powered experiences", "Innovation"],
    work: {
      title: "Exploring AI — Prototyping new possibilities",
      text: "Experimented with AI-driven concepts to explore new user experiences and validate value early in the product process.",
      href: "#",
      items: [
        ["bulb", "Concept development"],
        ["flask", "AI prototyping"],
        ["eye", "User testing"],
      ],
    },
  },
];

function Icon({ name, className }: { name: string; className: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- 24px Feather SVGs
    <img src={`/expertises/work/${name}.svg`} alt="" aria-hidden="true" className={className} />
  );
}

export function ExpertisesWork() {
  return (
    <section className={`grid-container ${styles.work}`} aria-label="Expertises">
      {EXPERTISES.map((e) => (
        <article key={e.number} className={styles.row}>
          <div className={`${styles.panel} ${styles.copy}`}>
            <div className={styles.head}>
              <span className={styles.number} aria-hidden="true">
                {e.number}
              </span>
              <span className={styles.badge}>
                <Icon name={e.icon} className={styles.badgeIcon} />
              </span>
            </div>
            <p className={styles.label}>{e.label}</p>
            <h2 className={styles.title}>{e.title}</h2>
            <p className={styles.text}>{e.text}</p>
            <ul className={styles.tags}>
              {e.tags.map((t) => (
                <li key={t} className={styles.tag}>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.panel} ${styles.workPanel}`}>
            <div className={styles.workTop}>
              <p className={styles.workLabel}>SELECTED WORK</p>
              <a href={e.work.href} className={styles.open} aria-label={`View case study: ${e.work.title}`}>
                <Icon name="arrow-dark" className={styles.openIcon} />
              </a>
            </div>
            <h3 className={styles.workTitle}>{e.work.title}</h3>
            <p className={styles.workText}>{e.work.text}</p>
            {e.work.metrics && (
              <ul className={styles.metrics}>
                {e.work.metrics.map(([value, label]) => (
                  <li key={value} className={styles.metric}>
                    <span className={styles.metricValue}>{value}</span>
                    <span className={styles.metricLabel}>{label}</span>
                  </li>
                ))}
              </ul>
            )}
            {e.work.items && (
              <ul className={styles.items}>
                {e.work.items.map(([icon, label]) => (
                  <li key={label} className={styles.item}>
                    <Icon name={icon} className={styles.itemIcon} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            )}
            <a href={e.work.href} className={styles.link}>
              View case study
              <Icon name="arrow-orange" className={styles.linkIcon} />
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
