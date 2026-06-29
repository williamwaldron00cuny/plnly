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
  radiusPx: number;
  startDeg: number;
  durationS: number;
}[] = [
  {
    name: "Scheduling",
    icon: "time",
    tools: ["Shared calendars", "Reminders that read context", "Meeting & appointment triage"],
    color: "#E25E3A",
    radiusPx: 208,
    startDeg: 0,
    durationS: 72,
  },
  {
    name: "Smart home",
    icon: "ring",
    tools: ["Unified control hub", "Routines & automations", "Guest & sitter access"],
    color: "#9FB1BB",
    radiusPx: 144,
    startDeg: 72,
    durationS: 52,
  },
  {
    name: "Travel",
    icon: "place",
    tools: ["Itinerary consolidation", "Packing & document checklists", "Real-time change alerts"],
    color: "#C2D8CC",
    radiusPx: 208,
    startDeg: 144,
    durationS: 88,
  },
  {
    name: "AI literacy",
    icon: "focus",
    tools: ["NotebookLM workflows", "Citation & source checking", "Scoped, not subject tutoring"],
    color: "#A8C4A0",
    radiusPx: 144,
    startDeg: 216,
    durationS: 60,
  },
  {
    name: "Household admin",
    icon: "plan",
    tools: ["Subscription & bill tracking", "Grocery & restock automation", "Shared task ownership"],
    color: "#C4B09A",
    radiusPx: 208,
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

        <div
          className={styles.orbitLayout}
          onMouseLeave={() => setActive(null)}
        >
          {/* Orbit diagram */}
          <div className={styles.orbitArea} aria-hidden>
            <div className={styles.orbitInner}>
              <svg viewBox="0 0 240 240" className={styles.orbitSvg} fill="none">
                <g className={styles.ringsGroup}>
                  <circle cx="120" cy="120" r="40" stroke="rgba(32,36,43,0.09)" strokeWidth="1" />
                  <circle cx="120" cy="120" r="72" stroke="rgba(32,36,43,0.07)" strokeWidth="1" />
                  <circle cx="120" cy="120" r="104" stroke="rgba(32,36,43,0.05)" strokeWidth="1" />
                </g>
                <circle cx="120" cy="120" r="6" fill="#E25E3A" fillOpacity="0.45" />
              </svg>

              {CATEGORIES.map((cat, i) => {
                const isActive = active === i;
                const delayS = -((cat.startDeg / 360) * cat.durationS);
                return (
                  <div
                    key={cat.name}
                    className={styles.orbitDotWrap}
                    style={{
                      "--dur": `${cat.durationS}s`,
                      "--delay": `${delayS}s`,
                      animationPlayState: isActive ? "paused" : "running",
                    } as React.CSSProperties}
                  >
                    <div
                      className={`${styles.orbitDot} ${isActive ? styles.orbitDotActive : ""}`}
                      style={{
                        "--r": `${cat.radiusPx}px`,
                        "--color": cat.color,
                        ...(isActive && {
                          boxShadow: `0 0 18px 6px ${cat.color}50`,
                        }),
                      } as React.CSSProperties}
                      onMouseEnter={() => setActive(i)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Explore ${cat.name}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setActive(i);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

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
