import Image from "next/image";
import { Button } from "@/components/Button/Button";
import styles from "./AboutIntro.module.css";

const LEDE =
  "I’m a Senior Product Designer who loves turning complex challenges into simple, meaningful experiences.";
const BODY =
  "I work across the full design process, from understanding journeys and shaping ideas to prototyping, validating and creating polished digital products. I enjoy working closely with others, challenging assumptions and using data and AI to explore better solutions.";

function Bio() {
  return (
    <div className={styles.bio}>
      <p className={`font-semibold text-text-primary ${styles.lede}`}>
        {LEDE}
      </p>
      <p className={`text-text-primary ${styles.body}`}>{BODY}</p>
    </div>
  );
}

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

export function AboutIntro() {
  return (
    <>
      {/* >=1200px (L/XL): photo+wordmark column beside bio+buttons */}
      <div className={styles.row}>
        <div className={styles.rowImageCol}>
          <img
            src="/voorstellen/wordmark-stacked.svg"
            alt="Hi, ik ben Mickey"
            className={styles.rowWordmark}
          />
          <div className={styles.rowPhotoWrap}>
            <Image
              src="/voorstellen/photo.png"
              alt="Portret van Mickey Aipassa"
              fill
              sizes="170px"
              className="object-cover"
            />
          </div>
        </div>
        <div className={styles.rowContent}>
          <Bio />
          <ButtonsRow />
        </div>
      </div>

      {/* 600-1199px (S/M): photo+wordmark row, then bio+buttons below */}
      <div className={styles.stackedRows}>
        <div className={styles.stackedTopRow}>
          <div className={styles.stackedPhotoWrap}>
            <Image
              src="/voorstellen/photo.png"
              alt="Portret van Mickey Aipassa"
              fill
              sizes="130px"
              className="object-cover"
            />
          </div>
          <img
            src="/voorstellen/wordmark-single-line.svg"
            alt="Hi, ik ben Mickey"
            className={styles.stackedWordmark}
          />
        </div>
        <Bio />
        <ButtonsRow />
      </div>

      {/* <600px (XS): everything centered and stacked */}
      <div className={styles.fullyStacked}>
        <div className={styles.xsPhotoWrap}>
          <Image
            src="/voorstellen/photo.png"
            alt="Portret van Mickey Aipassa"
            fill
            sizes="140px"
            className="object-cover"
          />
        </div>
        <img
          src="/voorstellen/wordmark-xs.svg"
          alt="Hi, ik ben Mickey"
          className={styles.xsWordmark}
        />
        <Bio />
        <ButtonsCol />
      </div>
    </>
  );
}
