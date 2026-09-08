import styles from "./MyStory.module.css";

function MyStoryContent() {
  return (
    <div className={styles.textCard}>
      <p className={styles.heading}>My story</p>
      <p className={styles.subheading}>Design has always been part of my life!</p>
      <div className={styles.body}>
        <p>
          I&rsquo;ve been designing for as long as I can remember. As a kid, I
          would redesign game covers and LP artwork simply because I thought
          they could be better. That curiosity eventually took me to the
          Grafisch Lyceum and later to the Willem de Kooning Academy, where
          design became more than an interest, it became my profession.
        </p>
        <p className={styles.spaced}>
          I started my career in branding, creating visual identities and
          shaping how brands express themselves. Over time, my curiosity
          shifted from how things look to how they work, how people behave
          and why they make certain choices.
        </p>
        <p>
          That led me into digital product design, where I could bring
          business, human behaviour and design together to create meaningful
          value.
        </p>
        <p className={styles.spaced}>
          Today, my work can range from the smallest visual detail to
          untangling complex end-to-end journeys and turning them into
          simple, intuitive digital experiences. Different challenges, but
          still driven by the same curiosity I had when redesigning those
          covers: how can this be better, for the people using it and the
          purpose it needs to serve?
        </p>
      </div>
    </div>
  );
}

function Photo({ className }: { className: string }) {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element -- Figma's
          crop (205.99% wide / 158.5% tall, shifted -52.74%/-58.5%) zooms
          in further than object-fit: cover's minimal covering scale
          would allow, so it can't be reproduced with next/image's
          fill + object-fit/object-position. Replicating Figma's own
          oversized, absolutely-positioned <img> is the only way to
          match the exact zoom level. */}
      <img
        src="/my-story/photo.png"
        alt="Portret van Mickey Aipassa"
        className={styles.photoImg}
      />
    </div>
  );
}

export function MyStory() {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <Photo className={styles.rowPhoto} />
        <div className={styles.rowContent}>
          <MyStoryContent />
        </div>
      </div>

      <div className={styles.stacked}>
        <div className={styles.stackedContent}>
          <MyStoryContent />
        </div>
        <Photo className={styles.stackedPhoto} />
      </div>
    </div>
  );
}
