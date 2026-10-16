import { ProductCardGroup } from "@/components/ProductCardGroup/ProductCardGroup";
import { PROJECTS } from "@/components/ProductCardGroup/projects";
import styles from "./LatestWorkHero.module.css";

export function LatestWorkHero() {
  return (
    <section className={`grid-container ${styles.hero}`} aria-labelledby="latest-work-title">
      <h1 id="latest-work-title" className={styles.word}>
        LATEST WORK
      </h1>
      <div className={styles.group}>
        <ProductCardGroup projects={PROJECTS} />
      </div>
    </section>
  );
}
