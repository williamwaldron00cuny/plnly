"use client";

import React, { useState } from "react";
import { Eyebrow, Icon } from "@plnly/ui";
import type { IconName } from "@plnly/ui";
import { italicCoral } from "./shared";
import styles from "./Capabilities.module.css";

const CATEGORIES: {
  name: string;
  icon: IconName;
  tools: string[];
  color: string;
  ringR: number;
  startDeg: number;
  durationS: number;
}[] = [
  {
    name: "Scheduling",
    icon: "time",
    tools: ["Shared calendars", "Reminders that read context", "Meeting & appointment triage"],
    color: "#E25E3A",
    ringR: 104,
    startDeg: 0,
    durationS: 72,
  },
  {
    name: "Smart home",
    icon: "ring",
    tools: ["Unified control hub", "Routines & automations", "Guest & sitter access"],
    color: "#9FB1BB",
    ringR: 72,
    startDeg: 72,
    durationS: 52,
  },
  {
    name: "Travel",
    icon: "place",
    tools: ["Itinerary consolidation", "Packing & document checklists", "Real-time change alerts"],
    color: "#E25E3A",
    ringR: 104,
    startDeg: 144,
    durationS: 88,
  },
  {
    name: "AI literacy",
    icon: "focus",
    tools: ["NotebookLM workflows", "Citation & source checking", "Scoped, not subject tutoring"],
    color: "#9FB1BB",
    ringR: 72,
    startDeg: 216,
    durationS: 60,
  },
  {
    name: "Household admin",
    icon: "plan",
    tools: ["Subscription & bill tracking", "Grocery & restock automation", "Shared task ownership"],
    color: "#E25E3A",
    ringR: 104,
    startDeg: 288,
    durationS: 80,
  },
];

export function Capabilities() {
  const [active, setActive] = useState<number | null>(null);
  const activeCat = active !== null ? CATEGORIES[active] : null;

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
            margin: "18px 0 0",
            maxWidth: "22ch",
          }}
        >
          Five corners of your life. <em style={italicCoral}>Hover to explore.</em>
        </h2>

        <div className={styles.orbitLayout} onMouseLeave={() => setActive(null)}>
          {/* SVG orbit — rings + animated dots in one coordinate space */}
          <svg
            viewBox="0 0 240 240"
            className={styles.orbitSvg}
            fill="none"
            aria-hidden="true"
          >
            {/* Breathing rings */}
            <g className={styles.ringsGroup}>
              <circle cx="120" cy="120" r="40" stroke="rgba(32,36,43,0.10)" strokeWidth="1.2" />
              <circle cx="120" cy="120" r="72" stroke="rgba(32,36,43,0.08)" strokeWidth="1" />
              <circle cx="120" cy="120" r="104" stroke="rgba(32,36,43,0.06)" strokeWidth="1" />
            </g>

            {/* Center coral dot */}
            <circle cx="120" cy="120" r="6" fill="#E25E3A" fillOpacity="0.55" />

            {/* Orbiting category planets */}
            {CATEGORIES.map((cat, i) => {
              const isActive = active === i;
              const rad = (cat.startDeg * Math.PI) / 180;
              const cx = 120 + cat.ringR * Math.cos(rad);
              const cy = 120 + cat.ringR * Math.sin(rad);

              return (
                <g
                  key={cat.name}
                  className={styles.orbitGroup}
                  style={{
                    "--dur": `${cat.durationS}s`,
                    animationPlayState: isActive ? "paused" : "running",
                  } as React.CSSProperties}
                  onMouseEnter={() => setActive(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Explore ${cat.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActive(i);
                  }}
                >
                  {/* Invisible large hit zone — much easier to hover */}
                  <circle cx={cx} cy={cy} r={18} fill="transparent" />
                  {/* Visible planet circle */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActive ? 10 : 7}
                    fill={cat.color}
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.5"
                    style={
                      isActive
                        ? { filter: `drop-shadow(0 0 6px ${cat.color})` }
                        : undefined
                    }
                  />
                </g>
              );
            })}
          </svg>

          {/* Detail panel */}
          <div className={styles.panel}>
            {activeCat ? (
              <div className={styles.panelContent} key={activeCat.name}>
                <div className={styles.panelIcon} style={{ color: activeCat.color }}>
                  <Icon name={activeCat.icon} size={52} />
                </div>
                <div className={styles.panelName}>{activeCat.name}</div>
                <ul className={styles.panelTools}>
                  {activeCat.tools.map((tool) => (
                    <li key={tool} className={styles.panelTool}>
                      <span
                        className={styles.panelDot}
                        style={{ background: activeCat.color }}
                      />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className={styles.panelPrompt}>
                <div className={styles.legend}>
                  {CATEGORIES.map((cat) => (
                    <div key={cat.name} className={styles.legendItem}>
                      <span
                        className={styles.legendDot}
                        style={{ background: cat.color }}
                      />
                      <span className={styles.legendLabel}>{cat.name}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.panelHint}>Hover a circle to explore</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
