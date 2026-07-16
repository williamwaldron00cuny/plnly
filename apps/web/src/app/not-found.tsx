import Link from "next/link";
import { Wordmark, Eyebrow } from "@plnly/ui";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.section}>
      <div className={styles.inner}>
        <Wordmark size="md" onInk reveal={false} />
        <Eyebrow onInk className={styles.eyebrow}>
          404
        </Eyebrow>
        <h1 className={styles.heading}>This page isn&rsquo;t set up yet.</h1>
        <p className={styles.body}>
          The link that brought you here doesn&rsquo;t match anything on plnly.co. The rest of the
          site is where you left it.
        </p>
        <Link href="/" className={styles.homeLink}>
          Back home
        </Link>
      </div>
    </main>
  );
}
