"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./PackagesOrbit.module.css";

// Copy + pricing: Notion "Everything Brochure — Master Content" (approved July 1, 2026) —
// the canonical source; not on the local disk copies of the handoff/design docs, pulled directly.
const PACKAGES = [
  {
    cadence: "One session · ~90 min",
    name: "First Look",
    tagline: "The place to start, if you're not sure where to start.",
    body: "We look at how your household actually runs today — where AI could genuinely help, and where it wouldn't. Honest, specific, no upsell. You leave with the AI Snapshot, a one-page personal read on where things stand and what to do next.",
    standard: "$245",
    founding: "$199",
  },
  {
    cadence: "Three sessions · 2–4 weeks",
    name: "The Setup",
    tagline: "The core of what we do — a household actually running on AI.",
    body: "Calendars, email, meal planning, grocery routines — the obvious stuff — plus the things people mean to deal with and never do: appliance and maintenance tracking, household documents, emergency prep. You leave with the Household Playbook.",
    standard: "$750",
    founding: "$699",
  },
  {
    cadence: "Two sessions · 1 hr each",
    name: "Scholar Ready",
    tagline: "Real AI fluency for college-bound teens, inside the lines that matter.",
    body: "Research workflows, citation tools, and writing process, built around the PLAINLY curriculum: practical tool literacy, never subject tutoring, always inside academic-integrity guidelines. You leave with the Student Toolkit and a self-authored AI Use Agreement.",
    standard: "$450",
    founding: "$400",
  },
  {
    cadence: "Four sessions",
    name: "The Household",
    tagline: "Everything, for everyone in the house, at once.",
    body: "A First Look session to map the whole household, then the three Setup sessions built around what we learn — plus multi-user/device setup, a travel-planning toolkit, and a start on organizing family photos and documents. (Scholar Ready is available as an add-on.)",
    standard: "$1,350",
    founding: "$1,250",
  },
  {
    cadence: "Monthly retainer",
    name: "In Residence",
    tagline: "The household keeps getting more capable, not just maintained.",
    body: "Available once you've completed The Setup, Scholar Ready, or The Household. One 30–45 minute check-in a month, plus async questions and priority response in between. Three-month minimum. You get a quarterly AI Horizon briefing.",
    standard: "$500 upfront + $199/mo",
    founding: "upfront waived",
  },
];

// Per-package composition — deliberately asymmetrical, alternating sides and scale
// so the sequence doesn't read as a repeating grid.
const LAYOUTS: { align: "left" | "right" | "center"; numeral: CSSProperties; size: number }[] = [
  { align: "left", numeral: { top: "8%", right: "6%" }, size: 220 },
  { align: "right", numeral: { top: "10%", left: "4%" }, size: 260 },
  { align: "left", numeral: { top: "42%", right: "8%" }, size: 190 },
  { align: "right", numeral: { top: "6%", left: "8%" }, size: 240 },
  { align: "center", numeral: { top: "14%", left: "50%", transform: "translateX(-50%)" }, size: 280 },
];

export function PackagesOrbit() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const maxScroll = rect.height - windowHeight;
        let raw = maxScroll > 0 ? Math.max(0, Math.min(1, Math.abs(rect.top) / maxScroll)) : 0;
        if (rect.top > 0) raw = 0;
        setActive(Math.min(PACKAGES.length - 1, Math.floor(raw * PACKAGES.length)));
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="packages-orbit" ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.kicker}>
          <span
            style={{
              fontFamily: "var(--plnly-font-mono)",
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--plnly-on-ink-faint)",
            }}
          >
            The five packages
          </span>
          <p className={styles.strapline}>
            Set up around you. Taught, not done for you. Then it&rsquo;s yours.
          </p>
        </div>

        <div className={styles.stage}>
          {PACKAGES.map((pkg, i) => {
            const layout = LAYOUTS[i];
            return (
              <div key={pkg.name} className={styles.panel} data-active={active === i}>
                <div className={styles.numeral} style={{ fontSize: layout.size, ...layout.numeral }}>
                  0{i + 1}
                </div>
                <div
                  className={styles.content}
                  style={{
                    marginLeft: layout.align === "right" ? "auto" : layout.align === "center" ? "auto" : undefined,
                    marginRight: layout.align === "left" ? "auto" : layout.align === "center" ? "auto" : undefined,
                    textAlign: layout.align === "center" ? "center" : layout.align,
                    alignItems: layout.align === "center" ? "center" : layout.align === "right" ? "flex-end" : "flex-start",
                  }}
                >
                  <div className={styles.eyebrowRow} style={{ flexDirection: layout.align === "right" ? "row-reverse" : "row" }}>
                    <span className={styles.eyebrowRule} />
                    <span className={styles.eyebrow}>{pkg.cadence}</span>
                  </div>
                  <h2 className={styles.name}>{pkg.name}</h2>
                  <p className={styles.tagline}>{pkg.tagline}</p>
                  <p className={styles.body}>{pkg.body}</p>
                  <div className={styles.priceRow} style={{ flexDirection: layout.align === "right" ? "row-reverse" : "row" }}>
                    <span className={styles.priceStandard}>{pkg.standard}</span>
                    <span className={styles.priceFounding}>{pkg.founding}</span>
                    <span className={styles.priceLabel}>founding-client</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.dots}>
          <div className={styles.dotRow}>
            {PACKAGES.map((pkg, i) => (
              <span key={pkg.name} className={styles.dot} data-active={active === i} />
            ))}
          </div>
          <div className={styles.moreLinks}>
            <Link href="/travel" className={styles.moreLink}>
              Network Planning →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
