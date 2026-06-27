import { Eyebrow } from "@plnly/ui";
import styles from "./BrooklynBand.module.css";

export function BrooklynBand() {
  return (
    <section className={styles.section}>
      <video
        className={styles.video}
        src="/video/bridge-flow.mp4"
        poster="/photos/bridge-flow-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
      />
      <div className={styles.scrim} />
      <div className={styles.content}>
        <Eyebrow onInk dot>
          Brooklyn, NY — and online
        </Eyebrow>
        <div className={styles.heading}>Local where it helps. Remote where it doesn&apos;t matter.</div>
      </div>
    </section>
  );
}
