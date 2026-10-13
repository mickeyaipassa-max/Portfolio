"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Tag } from "@/components/Tag/Tag";
import styles from "./CaseCarousel.module.css";

const STEPS = [
  {
    title: "Jouw situatie",
    goal: "Goal: Collect only the necessary information required to display product options.",
  },
  {
    title: "Jouw dekking",
    goal: "Goal: Showcase the available products / coverages and add-ons.",
  },
  {
    title: "Jouw gegevens",
    goal: "Goal: Complete the product application.",
  },
  {
    title: "Laatste vragen",
    goal: "Goal: Determine eligibility through mandatory underwriting questions.",
  },
  {
    title: "Samenvatting",
    goal: "Goal: Provide users with an overview of their selected products and information. Also to finalize the application with informed consent and clarity.",
  },
  {
    title: "Succes",
    goal: "Goal: Confirm the successful submission of the application.",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <path
        d={
          direction === "next"
            ? "M16.69 28H39.31M32.04 35.27L39.31 28L31.63 20.32"
            : "M39.31 28H16.69M23.96 20.72L16.69 28L24.36 35.68"
        }
        stroke={direction === "next" ? "#ffffff" : "#b8b8b8"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CaseCarousel() {
  const windowRef = useRef<HTMLDivElement>(null);
  const moduleRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);
  // While a button-driven scroll is still animating, scroll events must not
  // overwrite the step that was asked for (at the end of the track the last
  // two steps share the same scroll position).
  const lockedUntil = useRef(0);

  const goTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(STEPS.length - 1, index));
    setActive(next);
    lockedUntil.current = Date.now() + 1500;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    moduleRefs.current[next]?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      inline: "start",
      block: "nearest",
    });
  }, []);

  useEffect(() => {
    const win = windowRef.current;
    if (!win) return;

    const onScroll = () => {
      if (Date.now() < lockedUntil.current) return;
      const atEnd = win.scrollLeft + win.clientWidth >= win.scrollWidth - 2;
      if (atEnd) {
        setActive(STEPS.length - 1);
        return;
      }
      const first = moduleRefs.current[0];
      const second = moduleRefs.current[1];
      if (!first || !second) return;
      const step = second.offsetLeft - first.offsetLeft;
      setActive(
        Math.max(0, Math.min(STEPS.length - 1, Math.round(win.scrollLeft / step))),
      );
    };

    // A finished button-driven scroll releases the lock right away.
    const onScrollEnd = () => {
      lockedUntil.current = 0;
    };

    win.addEventListener("scroll", onScroll, { passive: true });
    win.addEventListener("scrollend", onScrollEnd);
    return () => {
      win.removeEventListener("scroll", onScroll);
      win.removeEventListener("scrollend", onScrollEnd);
    };
  }, []);

  return (
    <section
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Foundation, six steps six goals"
    >
      <div className={styles.intro}>
        <div className={styles.editorial}>
          <h2 className={styles.title}>
            Foundation, <br className={styles.titleBreak} />
            six steps six goals
          </h2>
          <p className={styles.introText}>
            The design decisions at a glance. Each step shows the existing
            screen and its purpose within the insurance application flow.
          </p>
        </div>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      <div className={styles.stage}>
        <button
          type="button"
          className={styles.floatingNext}
          aria-label="Next step"
          onClick={() => goTo(active + 1)}
        >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
            <path
              d="M19 28L25 22L19 16"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.window} ref={windowRef} tabIndex={0}>
          <ol className={styles.track}>
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className={styles.module}
                ref={(el) => {
                  moduleRefs.current[i] = el;
                }}
                aria-label={`Step ${i + 1} of ${STEPS.length}`}
              >
                <div className={styles.index}>
                  <span className={styles.number}>{pad(i + 1)}</span>
                  <span className={styles.flowLabel}>Insurance Purchase Flow</span>
                  <span className={styles.mobileTag}>
                    <Tag type="secondary" size="l">
                      {`Step ${i + 1}`}
                    </Tag>
                  </span>
                </div>
                <div className={styles.body}>
                  <div className={styles.stageBlock}>
                    <span className={styles.desktopTag}>
                      <Tag type="secondary" size="l">
                        {`Step ${i + 1}`}
                      </Tag>
                    </span>
                    <div className={styles.shot}>
                      <img
                        src={`/case-asr/step-${i + 1}.webp`}
                        alt={`Bestaand scherm van stap ${i + 1}: ${step.title}`}
                        className={styles.shotImg}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.titleGoal}>
                    <p className={styles.stepTitle}>
                      <span className={styles.inlineNumber}>{pad(i + 1)}</span>{" "}
                      {step.title}
                    </p>
                    <p className={styles.goal}>
                      <span className={styles.goalLabel}>Goal:</span>
                      {step.goal.slice("Goal:".length)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.progress}>
          <div className={styles.indicators}>
            {STEPS.map((step, i) => (
              <button
                key={step.title}
                type="button"
                className={`${styles.indicator}${i === active ? ` ${styles.indicatorActive}` : ""}`}
                aria-label={`Go to step ${i + 1}: ${step.title}`}
                aria-current={i === active ? "step" : undefined}
                onClick={() => goTo(i)}
              >
                <span className={styles.marker} />
                <span className={styles.indicatorNumber}>{pad(i + 1)}</span>
              </button>
            ))}
          </div>
          <div className={styles.nav}>
            <span className={styles.position} aria-live="polite">
              {pad(active + 1)} / {pad(STEPS.length)}
            </span>
            <button
              type="button"
              className={`${styles.navButton} ${styles.prev}`}
              aria-label="Previous step"
              disabled={active === 0}
              onClick={() => goTo(active - 1)}
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              className={`${styles.navButton} ${styles.next}`}
              aria-label="Next step"
              disabled={active === STEPS.length - 1}
              onClick={() => goTo(active + 1)}
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
