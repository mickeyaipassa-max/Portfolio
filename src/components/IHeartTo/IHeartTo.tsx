import Image from "next/image";
import styles from "./IHeartTo.module.css";

type Item = {
  icon: string;
  title: string;
  description: string;
  skills: string;
};

const ITEMS: Item[] = [
  {
    icon: "/ilto/icon-share.svg",
    title: "Turn complexity into direction",
    description:
      "I translate user needs, business goals and data into clear opportunities. Through journeys, hypotheses and stakeholder alignment, I help teams focus on what matters.",
    skills:
      "Product strategy · Customer journeys · Data & insights · Hypothesis building · Stakeholder management",
  },
  {
    icon: "/ilto/icon-user.svg",
    title: "Designexperiences that work",
    description:
      "I turn insights into intuitive end-to-end experiences. From early flows and concepts to prototypes, testing and continuous optimisation.",
    skills:
      "UX design · User flows · Prototyping · Validation · Optimisation · Figma",
  },
  {
    icon: "/ilto/icon-settings.svg",
    title: "Create scalable experiences",
    description:
      "I craft polished interfaces and build design systems that create consistency, strengthen brands and help teams design and develop faster.",
    skills:
      "UI design · Design systems · Components · Figma · Branding · Visual identity",
  },
  {
    icon: "/ilto/icon-inbox.svg",
    title: "Explore what AI makes possible",
    description:
      "I use AI throughout the design process to explore, prototype and validate faster, while designing new AI-powered experiences around real user needs.",
    skills:
      "AI prototyping · AI workflows · Concepting · Experimentation · AI experiences",
  },
];

function ItemContent({
  item,
  titleStyle,
  descStyle,
  skillsStyle,
}: {
  item: Item;
  titleStyle: React.CSSProperties;
  descStyle: React.CSSProperties;
  skillsStyle: React.CSSProperties;
}) {
  return (
    <>
      <img src={item.icon} alt="" aria-hidden="true" className={styles.icon} />
      <p className="font-semibold text-text-primary" style={titleStyle}>
        {item.title}
      </p>
      <p className="text-text-primary" style={descStyle}>
        {item.description}
      </p>
      <p className="italic" style={skillsStyle}>
        <span className="font-semibold text-accent">Skills: </span>
        <span className="text-text-primary">{item.skills}</span>
      </p>
    </>
  );
}

export function IHeartTo() {
  const wideTextStyle = (varName: string): React.CSSProperties => ({
    fontSize: `var(${varName})`,
    lineHeight: 1.5,
  });
  const wideTitleStyle: React.CSSProperties = {
    fontSize: "var(--font-size-ilto-title)",
    lineHeight: 1.4,
  };

  return (
    <>
      {/* >=900px: image column beside a list of 4 items */}
      <div className={styles.wide}>
        <div className={styles.imageColumn}>
          <img
            src="/ilto/i-love-to-stacked.svg"
            alt="I love to"
            className={styles.vector}
          />
          <div className={styles.photoWrap}>
            <Image
              src="/ilto/photo.png"
              alt="Portret van Mickey Aipassa"
              fill
              sizes="450px"
              className="object-cover"
              style={{ objectPosition: "var(--ilto-photo-object-position)" }}
            />
          </div>
        </div>

        <div className={styles.list}>
          {ITEMS.map((item) => (
            <div key={item.title} className={styles.item}>
              <ItemContent
                item={item}
                titleStyle={wideTitleStyle}
                descStyle={wideTextStyle("--font-size-ilto-desc")}
                skillsStyle={wideTextStyle("--font-size-ilto-skills")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <900px: horizontal "I love to" graphic, then 4 stacked items */}
      <div className={styles.narrow}>
        <img
          src="/ilto/i-love-to-horizontal.svg"
          alt="I love to"
          className="mb-6 w-full"
        />
        {ITEMS.map((item) => (
          <div key={item.title} className={styles.item}>
            <ItemContent
              item={item}
              titleStyle={{ fontSize: 14, lineHeight: 1.4 }}
              descStyle={{ fontSize: 14, lineHeight: 1.5 }}
              skillsStyle={{ fontSize: 14, lineHeight: 1.5 }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
