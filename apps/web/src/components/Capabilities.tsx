import Image from "next/image";
import { Eyebrow, Icon } from "@plnly/ui";
import type { IconName } from "@plnly/ui";
import { italicCoral } from "./shared";
import styles from "./Capabilities.module.css";

const CATEGORIES: {
  name: string;
  icon: IconName;
  tools: string[];
  image: string;
  col?: string;
}[] = [
  {
    name: "Scheduling",
    icon: "time",
    tools: ["Shared calendars", "Reminders that read context", "Meeting & appointment triage"],
    image: "/photos/handplanner.jpg",
    col: "span 2",
  },
  {
    name: "Smart home",
    icon: "ring",
    tools: ["Unified control hub", "Routines & automations", "Guest & sitter access"],
    image: "/photos/smart-home-kitchen.jpg",
  },
  {
    name: "Travel",
    icon: "place",
    tools: ["Itinerary consolidation", "Packing & document checklists", "Real-time change alerts"],
    image: "/photos/travel-plan.jpg",
  },
  {
    name: "AI literacy",
    icon: "focus",
    tools: ["NotebookLM workflows", "Citation & source checking", "Scoped, not subject tutoring"],
    image: "/photos/college-backpack.jpg",
  },
  {
    name: "Household admin",
    icon: "plan",
    tools: ["Subscription & bill tracking", "Grocery & restock automation", "Shared task ownership"],
    image: "/photos/laptop-morning-light.jpg",
    col: "span 3",
  },
];

export function Capabilities() {
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
            maxWidth: "22ch",
          }}
        >
          Pick a corner of your life. <em style={italicCoral}>Hover to explore.</em>
        </h2>
        <div className={styles.bento}>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className={styles.card}
              data-col={cat.col ?? "span 1"}
            >
              <div className={styles.cardBg}>
                <Image
                  src={cat.image}
                  alt=""
                  aria-hidden
                  fill
                  sizes="(max-width: 760px) 100vw, 560px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.cardContent}>
                <Icon name={cat.icon} size={22} />
                <div className={styles.cardName}>{cat.name}</div>
                <div className={styles.toolList}>
                  {cat.tools.map((tool) => (
                    <div key={tool} className={styles.tool}>
                      <span className={styles.toolDot} />
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
