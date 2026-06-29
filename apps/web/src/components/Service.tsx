"use client";

import { useState } from "react";
import { Eyebrow, Icon } from "@plnly/ui";
import type { IconName } from "@plnly/ui";
import { italicCoral } from "./shared";
import { Reveal } from "./Reveal";
import styles from "./Service.module.css";

const STEPS: { icon: IconName; title: string; body: string; more: string; coral?: boolean }[] = [
  {
    icon: "focus",
    title: "Set up around you",
    body: "We configure the tools to your household's real rhythm — scheduling, groceries, travel, the operations of a home. Not a template.",
    more: "That starts with a real conversation: who's in the household, what's already working, what's been quietly broken for months. The setup that comes out of it is specific to your week, not a generic checklist run twice.",
  },
  {
    icon: "plan",
    title: "Taught, not done-for-you",
    body: 'You learn to run it, at your pace, in plain language. We explain the real tool and the real task — never "AI-powered solutions."',
    more: "Sessions happen at your kitchen table or on a call, whichever fits. We name the actual tool and the actual task every time — so you can explain it back, troubleshoot it yourself, and recognize when something's worth adding later.",
  },
  {
    icon: "handover",
    title: "Then it's yours",
    body: "We hand over the keys. You stay in control of your own systems, and we're there when you want us — not because you need us.",
    more: "No retainer required to keep things running. If you want an occasional tune-up as your household changes, we're available — but the capability itself doesn't expire when the engagement does.",
    coral: true,
  },
];

export function Service() {
  const [expanded, setExpanded] = useState<number | null>(null);
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
        {STEPS.map((s, i) => {
          const open = expanded === i;
          return (
            <Reveal key={s.title} delay={i * 90}>
              <button
                type="button"
                className={styles.step}
                onClick={() => setExpanded(open ? null : i)}
                aria-expanded={open}
              >
                <Icon name={s.icon} size={52} coral={s.coral} />
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
                <div className={styles.more} data-open={open}>
                  <p
                    style={{
                      fontFamily: "var(--plnly-font-body)",
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "var(--plnly-ink-55)",
                      margin: "12px 0 0",
                    }}
                  >
                    {s.more}
                  </p>
                </div>
                <span className={styles.toggle}>{open ? "Show less" : "Read more"}</span>
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
