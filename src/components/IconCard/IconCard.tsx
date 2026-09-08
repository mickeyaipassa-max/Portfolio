import { Tag } from "@/components/Tag/Tag";
import styles from "./IconCard.module.css";

type IconCardSize = "s" | "m" | "l";

const TITLE_SIZE_VAR: Record<IconCardSize, string> = {
  s: "var(--font-size-icon-card-title-s)",
  m: "var(--font-size-icon-card-title-m)",
  l: "var(--font-size-icon-card-title-l)",
};

const BODY_SIZE_VAR: Record<IconCardSize, string> = {
  s: "var(--font-size-icon-card-body-s)",
  m: "var(--font-size-icon-card-body-m)",
  l: "var(--font-size-icon-card-body-l)",
};

const BODY_GAP_VAR: Record<IconCardSize, string> = {
  s: "var(--icon-card-body-gap-s)",
  m: "var(--icon-card-body-gap-m)",
  l: "var(--icon-card-body-gap-l)",
};

type IconCardProps = {
  size: IconCardSize;
  icon: string;
  tag: string;
  title: string;
  description: string;
};

export function IconCard({ size, icon, tag, title, description }: IconCardProps) {
  return (
    <div className={styles.card}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
      <p
        className="font-semibold text-text-primary"
        style={{ fontSize: TITLE_SIZE_VAR[size], lineHeight: 1.4 }}
      >
        {title}
      </p>
      <div className={styles.body} style={{ gap: BODY_GAP_VAR[size] }}>
        <p
          className="text-text-primary"
          style={{ fontSize: BODY_SIZE_VAR[size], lineHeight: 1.5 }}
        >
          {description}
        </p>
        <Tag type="secondary" size={size}>
          {tag}
        </Tag>
      </div>
    </div>
  );
}
