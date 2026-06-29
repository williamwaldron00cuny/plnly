import Image from "next/image";
import styles from "./LifestyleBand.module.css";

export function LifestyleBand() {
  return (
    <div className={styles.split} aria-hidden>
      <div className={styles.half}>
        <Image
          src="/photos/loft-workspace.jpg"
          alt=""
          fill
          sizes="50vw"
          style={{ objectFit: "cover" }}
          className={styles.image}
        />
      </div>
      <div className={styles.half}>
        <Image
          src="/photos/nyc-courtyard.jpg"
          alt=""
          fill
          sizes="50vw"
          style={{ objectFit: "cover", objectPosition: "center 55%" }}
          className={styles.image}
        />
      </div>
    </div>
  );
}
