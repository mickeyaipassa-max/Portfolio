import { Navigation } from "@/components/Navigation/Navigation";
import { HeroAboutMe } from "@/components/HeroAboutMe/HeroAboutMe";
import { MyStory } from "@/components/MyStory/MyStory";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { IconCard } from "@/components/IconCard/IconCard";
import styles from "./about.module.css";

/**
 * Every card still uses the "search" icon in Figma — the component
 * also defines users/tool/pie-chart/message-circle/youtube icons that
 * aren't wired up to any of the 6 instances yet (likely meant to
 * differentiate them, given how specifically they'd fit: users for
 * "Understand behaviour", tool for "Make it tangible", etc.). Left as
 * "search" everywhere to match Figma's current state rather than
 * guessing icon assignments the design doesn't actually specify yet.
 */
const HOW_I_WORK: {
  icon: string;
  title: string;
  description: string;
  tag: string;
}[] = [
  {
    icon: "/icon-card/search.svg",
    title: "Start with why",
    description:
      "Before jumping into solutions, I want to understand the problem, context and what success looks like. A clear purpose creates better decisions later on.",
    tag: "Understand",
  },
  {
    icon: "/icon-card/search.svg",
    title: "Understand behaviour",
    description:
      "What people say and what they do aren’t always the same. I use research, data and observation to understand behaviour, uncover friction and identify opportunities.",
    tag: "Explore & learn",
  },
  {
    icon: "/icon-card/search.svg",
    title: "Make it tangible",
    description:
      "Ideas become more valuable when people can see, experience and challenge them. I prototype early to create conversations, align teams and turn assumptions into something we can test.",
    tag: "Understand",
  },
  {
    icon: "/icon-card/search.svg",
    title: "Don’t assume",
    description:
      "Design is full of assumptions. I turn them into hypotheses and use feedback, testing and data to learn what works, and what doesn’t.",
    tag: "Validate",
  },
  {
    icon: "/icon-card/search.svg",
    title: "Design together",
    description:
      "The best solutions rarely come from one person. I like bringing design, product, technology and business together, using different perspectives to create stronger outcomes.",
    tag: "Stakeholders",
  },
  {
    icon: "/icon-card/search.svg",
    title: "Can this be better?",
    description:
      "Better doesn’t simply mean prettier or easier to use. It means creating the right experience for the people using it while helping the product achieve its purpose.",
    tag: "Keep asking",
  },
];

export default function AboutMe() {
  return (
    <>
      {/* Temporary test hrefs for visual validation only — Figma defines no
          link destinations, so these are not part of the component's design. */}
      <Navigation
        hrefs={{
          "latest-work": "/#latest-work",
          "about-me": "/about",
          expertises: "/#expertises",
          contact: "/#contact",
        }}
        activeItem="about-me"
      />

      <div className={`grid-container ${styles.navToHero}`}>
        <HeroAboutMe />
      </div>

      <div className={`grid-container ${styles.heroToMyStory}`}>
        <MyStory />
      </div>

      <div className={`grid-container ${styles.myStoryToHowItWork} ${styles.howItWork}`}>
        <SectionHeading>How I work</SectionHeading>
        <p className={styles.howItWorkIntro}>
          Good design starts with understanding what we&rsquo;re trying to
          achieve, for the people using the product and for the organisation
          behind it. I don&rsquo;t believe in following a design process just
          for the sake of it. Every challenge is different. What matters is
          asking the right questions, making ideas tangible and learning as
          quickly as possible.
        </p>
        <div className={`relative isolate ${styles.howItWorkGridWrap}`}>
          <div className={styles.howItWorkBackdrop} aria-hidden="true" />
          <div className={styles.howItWorkGrid}>
            {HOW_I_WORK.map((item) => (
              <IconCard
                key={item.title}
                size="l"
                icon={item.icon}
                title={item.title}
                description={item.description}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
