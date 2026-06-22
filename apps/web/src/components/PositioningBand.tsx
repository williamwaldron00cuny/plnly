import { Eyebrow } from "@plnly/ui";
import { italicCoral } from "./shared";
import styles from "./PositioningBand.module.css";

export function PositioningBand() {
  return (
    <section style={{ background: "var(--plnly-ink)", color: "var(--plnly-on-ink)" }}>
      <div className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow onInk>The difference</Eyebrow>
        <div
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
            marginTop: 22,
            maxWidth: 880,
          }}
        >
          Everyone else runs the AI and keeps the keys. We set it up, teach you to run it, and{" "}
          <em style={italicCoral}>hand them over.</em>
        </div>
        <p
          style={{
            fontFamily: "var(--plnly-font-body)",
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--plnly-on-ink-dim)",
            margin: "24px 0 0",
            maxWidth: 600,
          }}
        >
          {"Ownership, not concierge. When we're done, the capability is yours to keep — and to grow on your own."}
        </p>
      </div>
    </section>
  );
}
