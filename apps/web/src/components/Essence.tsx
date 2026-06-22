import { Eyebrow } from "@plnly/ui";
import styles from "./Essence.module.css";

export function Essence() {
  return (
    <section className={styles.section} style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
      <div
        className={styles.statement}
        style={{
          fontFamily: "var(--plnly-font-serif)",
          fontStyle: "italic",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "var(--plnly-ink)",
        }}
      >
        a beautiful plainness
      </div>
      <div style={{ marginTop: 26 }}>
        <Eyebrow>Modern life, minus the jargon.</Eyebrow>
      </div>
    </section>
  );
}
