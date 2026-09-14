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
  /**
   * Second and third tag, shown side by side after `tag` (max 3). Each
   * mirrors Figma's "Show tag 2"/"Show tag 3" booleans — presence
   * (a non-empty string) is the on/off switch, so most usages just omit
   * these rather than passing a boolean.
   */
  tag2?: string;
  tag3?: string;
  title: string;
  description: string;
};

export function IconCard({
  size,
  icon,
  tag,
  tag2,
  tag3,
  title,
  description,
}: IconCardProps) {
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
        <div className={styles.tags}>
          <Tag type="secondary" size={size}>
            {tag}
          </Tag>
          {tag2 && (
            <Tag type="secondary" size={size}>
              {tag2}
            </Tag>
          )}
          {tag3 && (
            <Tag type="secondary" size={size}>
              {tag3}
            </Tag>
          )}
        </div>
      </div>
    </div>
  );
}
