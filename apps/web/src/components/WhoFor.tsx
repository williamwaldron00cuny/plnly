import type { CSSProperties } from "react";
import { Card, Eyebrow, Icon } from "@plnly/ui";
import styles from "./WhoFor.module.css";

const iconWell: CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: 11,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const cardTitle: CSSProperties = {
  fontFamily: "var(--plnly-font-display)",
  fontWeight: 500,
  fontSize: 23,
  color: "var(--plnly-ink)",
  marginTop: 24,
};
const cardBody: CSSProperties = {
  fontFamily: "var(--plnly-font-body)",
  fontSize: 15.5,
  lineHeight: 1.6,
  color: "var(--plnly-ink-65)",
  margin: "12px 0 0",
};

export function WhoFor() {
  return (
    <section id="who" style={{ background: "var(--plnly-porcelain)" }}>
      <div className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow>{"Who it's for"}</Eyebrow>
        <h2
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            color: "var(--plnly-ink)",
            margin: "18px 0 56px",
          }}
        >
          Two households. One idea.
        </h2>
        <div className={styles.grid} style={{ display: "grid", gap: 28 }}>
          <Card surface="quiet" elevation="flat" radius="card-lg" padding={40}>
            <div style={{ ...iconWell, background: "var(--plnly-mist)" }}>
              <Icon name="orbit" size={20} />
            </div>
            <div style={cardTitle}>Busy households</div>
            <p style={cardBody}>
              {
                "You could figure the tools out yourself — you'd just rather not lose the weekend to it. We configure AI around your week and hand it back, with you still in control."
              }
            </p>
          </Card>
          <Card surface="quiet" elevation="flat" radius="card-lg" padding={40}>
            <div style={{ ...iconWell, background: "var(--plnly-mint)" }}>
              <Icon name="plan" size={20} />
            </div>
            <div style={cardTitle}>Parents of college-bound teens</div>
            <p style={cardBody}>
              Real, responsible AI literacy before campus — NotebookLM, citations, the
              academic-integrity lines. Tool fluency, scoped tight. Not subject tutoring.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
