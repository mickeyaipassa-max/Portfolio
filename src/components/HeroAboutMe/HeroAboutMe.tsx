import Image from "next/image";
import { Button } from "@/components/Button/Button";
import styles from "./HeroAboutMe.module.css";

const BIO =
  "Senior Product Designer turning complex challenges into intuitive digital experiences through collaboration, experimentation and a healthy dose of curiosity.";

function ButtonsRow() {
  return (
    <div className={styles.buttonsRow}>
      <Button type="primary" size="m" href="#">
        View my latest work
      </Button>
      <Button type="secondary" size="m" href="#">
        Contact me
      </Button>
    </div>
  );
}

function ButtonsCol() {
  return (
    <div className={styles.buttonsCol}>
      <Button type="primary" size="m" href="#" fill>
        View my latest work
      </Button>
      <Button type="secondary" size="m" href="#" fill>
        Contact me
      </Button>
    </div>
  );
}

function Photo() {
  return (
    <div className={styles.photoCol}>
      <div className={styles.photo}>
        <Image
          src="/hero/photo.png"
          alt="Portret van Mickey Aipassa"
          fill
          sizes="540px"
          className="object-cover"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
    </div>
  );
}

export function HeroAboutMe() {
  return (
    <div className={styles.hero}>
      {/* >=900px (M/L/XL/XXL): wordmark+bio+buttons beside the photo */}
      <div className={styles.row}>
        <div className={styles.content}>
          <img src="/hero-about-me/wordmark-m.svg" alt="Hi, I'm Mickey" className={styles.wordmarkM} />
          <img src="/hero-about-me/wordmark-l.svg" alt="Hi, I'm Mickey" className={styles.wordmarkL} />
          <img src="/hero-about-me/wordmark-xl.svg" alt="Hi, I'm Mickey" className={styles.wordmarkXl} />
          <img src="/hero-about-me/wordmark-xxl.svg" alt="Hi, I'm Mickey" className={styles.wordmarkXxl} />
          <p className={styles.bio}>{BIO}</p>
          <ButtonsRow />
        </div>
        <Photo />
      </div>

      {/* <900px (S/XS): everything centered and stacked, photo below */}
      <div className={styles.stacked}>
        <div className={styles.content}>
          <img src="/hero-about-me/wordmark-xs.svg" alt="Hi, I'm Mickey" className={styles.wordmarkXs} />
          <img src="/hero-about-me/wordmark-s.svg" alt="Hi, I'm Mickey" className={styles.wordmarkS} />
          <p className={styles.bio}>{BIO}</p>
          <ButtonsRow />
          <ButtonsCol />
        </div>
        <Photo />
      </div>
    </div>
  );
}
