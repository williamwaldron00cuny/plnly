import Image from "next/image";
import { Eyebrow } from "@plnly/ui";
import styles from "./PlainlyAI.module.css";

export function PlainlyAI() {
  return (
    <section
      style={{
        background:
          "radial-gradient(circle at 88% 50%, rgba(159,177,187,0.08), transparent 50%), var(--plnly-ink)",
        color: "var(--plnly-on-ink)",
      }}
    >
      <div
        className={styles.section}
        style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gap: 48, alignItems: "center" }}
      >
        <div>
          <Eyebrow onInk>The two letters we left out</Eyebrow>
          <div
            className={styles.mark}
            style={{
              fontFamily: "var(--plnly-font-display)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "var(--plnly-on-ink)",
              lineHeight: 1,
              marginTop: 26,
            }}
          >
            PL<span style={{ color: "var(--plnly-coral)", fontWeight: 600 }}>AI</span>NLY
          </div>
          <p
            style={{
              fontFamily: "var(--plnly-font-body)",
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "var(--plnly-on-ink-dim)",
              margin: "26px 0 0",
              maxWidth: 440,
            }}
          >
            {
              'PLNLY is "plainly" with the A and the I taken out — modern life, minus the jargon. Our AI-literacy program is the one place we put them back. Same name, switched on.'
            }
          </p>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src="/photos/college-backpack.jpg"
            alt="A student walking onto campus with a backpack"
            fill
            sizes="(max-width: 760px) 100vw, 480px"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
