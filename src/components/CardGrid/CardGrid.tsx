import { Card } from "@/components/Card/Card";
import styles from "./CardGrid.module.css";

export type Service = {
  tag: string;
  title: string;
  description: string;
  skills: string;
};

type CardGridProps = {
  services: [Service, Service, Service, Service];
};

export function CardGrid({ services }: CardGridProps) {
  return (
    <div className={styles.grid}>
      {services.map((service) => (
        <Card key={service.tag} size="l" fill {...service} />
      ))}
    </div>
  );
}
