import Image from "next/image";
import styles from "./LifestyleBand.module.css";

export function LifestyleBand() {
  return (
    <section className={styles.section} aria-hidden>
      <div className={styles.imageWrap}>
        <Image
          src="/photos/nyc-courtyard.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
          className={styles.image}
        />
      </div>
      <div className={styles.scrim} />
    </section>
  );
}
