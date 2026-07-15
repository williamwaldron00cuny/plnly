import { Wordmark, Eyebrow } from "@plnly/ui";
import { BookButton } from "./BookButton";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Wordmark size="hero" onInk />
        <Eyebrow onInk className={styles.mnemonic}>
          AI, plainly.
        </Eyebrow>
        <h1
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            color: "var(--plnly-on-ink-dim)",
            margin: "26px 0 0",
            maxWidth: 640,
          }}
        >
          We set up the AI.{" "}
          <span style={{ color: "var(--plnly-cloud)" }}>You run the house.</span>
        </h1>
        <p
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            fontSize: 22,
            lineHeight: 1.3,
            color: "var(--plnly-cloud)",
            margin: "22px 0 0",
          }}
        >
          Built bespoke. Yours to run.
        </p>
        <p
          className={styles.lead}
          style={{
            fontFamily: "var(--plnly-font-body)",
            lineHeight: 1.6,
            color: "var(--plnly-on-ink-dim)",
            margin: "18px 0 0",
            maxWidth: 520,
          }}
        >
          Personal AI systems for your home and life — set up with you, then handed over.
        </p>
        <div style={{ marginTop: 40 }}>
          <BookButton size="lg" />
        </div>
      </div>
    </section>
  );
}
