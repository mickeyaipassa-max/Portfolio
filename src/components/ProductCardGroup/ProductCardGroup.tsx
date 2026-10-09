import { ProductCard } from "@/components/ProductCard/ProductCard";
import styles from "./ProductCardGroup.module.css";

export type Project = {
  client: string;
  title: string;
  discipline: string;
  href: string;
  mediaSrc: string;
  mediaAlt: string;
  mediaFit?: "cover" | "contain";
};

type ProductCardGroupProps = {
  projects: [Project, Project, Project];
};

export function ProductCardGroup({ projects }: ProductCardGroupProps) {
  return (
    <div className={styles.group}>
      {projects.map((project) => (
        <div key={project.client} className={styles.item}>
          <ProductCard size="l" fill {...project} />
        </div>
      ))}
    </div>
  );
}
