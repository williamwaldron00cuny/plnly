"use client";

import { useState } from "react";
import { Eyebrow, Icon } from "@plnly/ui";
import type { IconName } from "@plnly/ui";
import { italicCoral } from "./shared";
import { Reveal } from "./Reveal";
import styles from "./Capabilities.module.css";

const CATEGORIES: { name: string; icon: IconName; detail: string; tools: string[] }[] = [
  {
    name: "Scheduling",
    icon: "time",
    detail:
      "One shared calendar logic for the whole household — everyone's commitments in one place, with an assistant that actually understands your week instead of just reminding you of it.",
    tools: ["Shared calendars", "Reminders that read context", "Meeting & appointment triage"],
  },
  {
    name: "Smart home",
    icon: "ring",
    detail:
      "Lights, locks, thermostats, and speakers configured to work together by default — not eight separate apps you have to remember exist.",
    tools: ["Unified control hub", "Routines & automations", "Guest & sitter access"],
  },
  {
    name: "Travel",
    icon: "place",
    detail:
      "Trip planning that pulls flights, stays, and logistics into one view, plus the AI habits to keep it that way without you re-learning the tools every trip.",
    tools: ["Itinerary consolidation", "Packing & document checklists", "Real-time change alerts"],
  },
  {
    name: "AI literacy",
    icon: "focus",
    detail:
      "The PLAINLY program — responsible, scoped AI fluency for students before campus. NotebookLM, citation hygiene, and where the academic-integrity line actually is.",
    tools: ["NotebookLM workflows", "Citation & source checking", "Scoped, not subject tutoring"],
  },
  {
    name: "Household admin",
    icon: "plan",
    detail:
      "Bills, subscriptions, groceries, and the dozen small recurring tasks that quietly eat a weekend — set up once, run on autopilot, understood by you, not just us.",
    tools: ["Subscription & bill tracking", "Grocery & restock automation", "Shared task ownership"],
  },
];

export function Capabilities() {
  const [active, setActive] = useState(0);
  const current = CATEGORIES[active];

  return (
    <section style={{ background: "var(--plnly-greige)" }}>
      <div className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow>What we set up</Eyebrow>
        <h2
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            color: "var(--plnly-ink)",
            margin: "18px 0 48px",
            maxWidth: "20ch",
          }}
        >
          Pick a corner of your life. <em style={italicCoral}>See how it works.</em>
        </h2>
        <div className={styles.layout}>
          <div className={styles.chips}>
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActive(i)}
                className={styles.chip}
                data-active={i === active}
                type="button"
              >
                <Icon name={cat.icon} size={20} coral={i === active} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
          <Reveal key={current.name} style={{ flex: 1 }}>
            <div className={styles.panel}>
              <div className={styles.panelTitle}>{current.name}</div>
              <p className={styles.panelDetail}>{current.detail}</p>
              <div className={styles.toolList}>
                {current.tools.map((tool) => (
                  <div className={styles.tool} key={tool}>
                    <span className={styles.toolDot} />
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
