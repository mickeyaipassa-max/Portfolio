import styles from "./PhotoTextCard.module.css";

function PhotoStack({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className={styles.photoBack}>
        <img
          src="/photo-text-card/museum.jpg"
          alt="Mickey bij een muurschildering in een museum"
          className={styles.photoBackImg}
        />
      </div>
      <div className={styles.photoFront}>
        <div className={styles.photoFrontCrop}>
          <img
            src="/photo-text-card/motorcycle.png"
            alt="Mickey op een motorfiets op het circuit"
            className={styles.photoFrontImg}
          />
        </div>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className={styles.textCard}>
      <p className={styles.heading}>Beyond the pixels</p>
      <div className={styles.subheadingWrap}>
        <p className={styles.subheading}>
          When I&rsquo;m not designing, I like to switch things up.
        </p>
      </div>
      <div className={styles.body}>
        <p>
          You&rsquo;ll often find me wandering through a museum, painting,
          working out, camping somewhere away from the noise, or doing
          something with a little more speed riding my motorcycle or taking
          it to the track.
        </p>
        <p className={styles.spaced}>
          I like the contrast: finding inspiration in art and culture,
          creating something with my hands, being outdoors, and occasionally
          chasing the perfect line through a corner.
        </p>
        <p className={styles.spaced}>
          Different worlds, but they all give me new energy, inspiration and
          perspective to bring back into my work.
        </p>
      </div>
    </div>
  );
}

export function PhotoTextCard() {
  return (
    <div className={styles.card}>
      <div className={styles.stacked}>
        <PhotoStack className={styles.stackedPhotos} />
        <div className={styles.stackedContent}>
          <TextContent />
        </div>
      </div>

      <div className={styles.row}>
        <PhotoStack className={styles.rowPhotos} />
        <div className={styles.rowContent}>
          <TextContent />
        </div>
      </div>
    </div>
  );
}
