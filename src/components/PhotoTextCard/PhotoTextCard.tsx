import styles from "./PhotoTextCard.module.css";

/**
 * Oversized-image crop, expressed exactly as Figma stores it (percentages
 * of the photo box). Omitted for a plain object-fit:cover fill.
 */
type Crop = { width: string; height: string; left: string; top: string };

export type PhotoTextCardPhoto = { src: string; alt: string; crop?: Crop };

export type PhotoTextCardProps = {
  backPhoto: PhotoTextCardPhoto;
  frontPhoto: PhotoTextCardPhoto;
  heading: string;
  /**
   * Second heading line. Below XXL a hard line break sits before it
   * (Figma's heading has a manual "\n" there); at XXL it flows on.
   */
  headingSecondLine?: string;
  subheading?: string;
  paragraphs: string[];
  /** Soft drop shadow (0 0 12.9px, 15%) on both photos. */
  shadow?: boolean;
  /**
   * "tight" is how the "Understanding the existing journey" instance is
   * set in Figma: body copy stays 14px until L (1200px) instead of
   * stepping up to 16px already at M, and the stacked text block has
   * different paddings (see the CSS).
   */
  variant?: "default" | "tight";
};

function PhotoImage({ photo }: { photo: PhotoTextCardPhoto }) {
  if (photo.crop) {
    return (
      <div className={styles.photoCrop}>
        <img
          src={photo.src}
          alt={photo.alt}
          className={styles.photoCropImg}
          style={photo.crop}
        />
      </div>
    );
  }
  return <img src={photo.src} alt={photo.alt} className={styles.photoCoverImg} />;
}

function PhotoStack({
  className,
  backPhoto,
  frontPhoto,
  shadow,
}: {
  className: string;
  backPhoto: PhotoTextCardPhoto;
  frontPhoto: PhotoTextCardPhoto;
  shadow: boolean;
}) {
  const shadowClass = shadow ? ` ${styles.shadowed}` : "";
  return (
    <div className={className}>
      <div className={`${styles.photoBack}${shadowClass}`}>
        <PhotoImage photo={backPhoto} />
      </div>
      <div className={`${styles.photoFront}${shadowClass}`}>
        <PhotoImage photo={frontPhoto} />
      </div>
    </div>
  );
}

function TextContent({
  heading,
  headingSecondLine,
  subheading,
  paragraphs,
  variant,
}: Pick<
  PhotoTextCardProps,
  "heading" | "headingSecondLine" | "subheading" | "paragraphs" | "variant"
>) {
  return (
    <div className={styles.textCard}>
      <p className={`${styles.heading}${headingSecondLine ? ` ${styles.headingMulti}` : ""}`}>
        {heading}
        {headingSecondLine && (
          <>
            {" "}
            <br className={styles.headingBreak} />
            {headingSecondLine}
          </>
        )}
      </p>
      {subheading && (
        <div className={styles.subheadingWrap}>
          <p className={styles.subheading}>{subheading}</p>
        </div>
      )}
      <div className={`${styles.body}${variant === "tight" ? ` ${styles.bodyCompact}` : ""}`}>
        {paragraphs.map((text, i) => (
          <p key={i} className={i > 0 ? styles.spaced : undefined}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export function PhotoTextCard({
  backPhoto,
  frontPhoto,
  heading,
  headingSecondLine,
  subheading,
  paragraphs,
  shadow = false,
  variant = "default",
}: PhotoTextCardProps) {
  const text = { heading, headingSecondLine, subheading, paragraphs, variant };
  return (
    <div className={`${styles.card}${variant === "tight" ? ` ${styles.tight}` : ""}`}>
      <div className={styles.stacked}>
        <PhotoStack
          className={styles.stackedPhotos}
          backPhoto={backPhoto}
          frontPhoto={frontPhoto}
          shadow={shadow}
        />
        <div className={styles.stackedContent}>
          <TextContent {...text} />
        </div>
      </div>

      <div className={styles.row}>
        <PhotoStack
          className={styles.rowPhotos}
          backPhoto={backPhoto}
          frontPhoto={frontPhoto}
          shadow={shadow}
        />
        <div className={styles.rowContent}>
          <TextContent {...text} />
        </div>
      </div>
    </div>
  );
}
