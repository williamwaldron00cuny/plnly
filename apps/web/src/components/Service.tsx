import { Eyebrow, Icon } from "@plnly/ui";
import type { IconName } from "@plnly/ui";
import { italicCoral } from "./shared";
import styles from "./Service.module.css";

const STEPS: { icon: IconName; title: string; body: string; coral?: boolean }[] = [
  {
    icon: "focus",
    title: "Set up around you",
    body: "We configure the tools to your household's real rhythm — scheduling, groceries, travel, the operations of a home. Not a template.",
  },
  {
    icon: "plan",
    title: "Taught, not done-for-you",
    body: 'You learn to run it, at your pace, in plain language. We explain the real tool and the real task — never "AI-powered solutions."',
  },
  {
    icon: "handover",
    title: "Then it's yours",
    body: "We hand over the keys. You stay in control of your own systems, and we're there when you want us — not because you need us.",
    coral: true,
  },
];

export function Service() {
  return (
    <section id="service" className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
      <Eyebrow>How it works</Eyebrow>
      <h2
        className={styles.heading}
        style={{
          fontFamily: "var(--plnly-font-display)",
          fontWeight: 500,
          lineHeight: 1.12,
          letterSpacing: "-0.015em",
          color: "var(--plnly-ink)",
          margin: "18px 0 0",
          maxWidth: "18ch",
        }}
      >
        Set up around how you <em style={italicCoral}>actually</em> live.
      </h2>
      <div className={styles.grid} style={{ display: "grid", marginTop: 56 }}>
        {STEPS.map((s) => (
          <div key={s.title}>
            <Icon name={s.icon} size={38} coral={s.coral} />
            <div
              style={{
                fontFamily: "var(--plnly-font-display)",
                fontWeight: 500,
                fontSize: 21,
                color: "var(--plnly-ink)",
                marginTop: 20,
              }}
            >
              {s.title}
            </div>
            <p
              style={{
                fontFamily: "var(--plnly-font-body)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--plnly-ink-55)",
                margin: "10px 0 0",
              }}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
