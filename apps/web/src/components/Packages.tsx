import Link from "next/link";
import { Card, Eyebrow } from "@plnly/ui";
import styles from "./Packages.module.css";

// Copy + pricing: Notion "Everything Brochure — Master Content" (approved July 1, 2026) — the
// canonical source; not on the local disk copies of the handoff/design docs, pulled directly.
const PACKAGES = [
  {
    cadence: "One session · ~90 min",
    name: "First Look",
    tagline: "The place to start, if you're not sure where to start.",
    body: "We look at how your household actually runs today — where AI could genuinely help, and where it wouldn't. Honest, specific, no upsell. You leave with the AI Snapshot, a one-page personal read on where things stand and what to do next — yours to keep either way.",
    standard: "$245",
    founding: "$199",
  },
  {
    cadence: "Three sessions · 2–4 weeks",
    name: "The Setup",
    tagline: "The core of what we do — a household actually running on AI, not just talking about it.",
    body: "Calendars, email, meal planning, grocery routines — the obvious stuff — plus the things people mean to deal with and never do: appliance and maintenance tracking, household documents, emergency prep. You leave with the Household Playbook, yours to update and live with.",
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
    body: "A First Look session to map the whole household, then the three Setup sessions built around what we learn — plus multi-user/device setup, a travel-planning toolkit, and a start on organizing family photos and documents. You leave with a printed, bound Family Playbook. (Scholar Ready is available as an add-on.)",
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

export function Packages() {
  return (
    <section id="packages" className={styles.section}>
      <div className={styles.inner}>
        <Eyebrow>The five packages</Eyebrow>
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
          Start where it makes sense — every package ends the same way: yours to run.
        </h2>

        <div className={styles.grid}>
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.name}
              surface="porcelain"
              elevation="flat"
              radius="card-lg"
              padding={32}
              className={styles.card}
              style={{ border: "1px solid var(--plnly-greige-deep)" }}
            >
              <Eyebrow>{pkg.cadence}</Eyebrow>
              <h3
                style={{
                  fontFamily: "var(--plnly-font-display)",
                  fontWeight: 500,
                  fontSize: 24,
                  color: "var(--plnly-ink)",
                  margin: "14px 0 0",
                }}
              >
                {pkg.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--plnly-font-body)",
                  fontSize: 14,
                  fontStyle: "normal",
                  color: "var(--plnly-text-secondary)",
                  margin: "6px 0 0",
                }}
              >
                {pkg.tagline}
              </p>
              <p
                style={{
                  fontFamily: "var(--plnly-font-body)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--plnly-text-secondary)",
                  margin: "16px 0 0",
                  flex: 1,
                }}
              >
                {pkg.body}
              </p>
              <div
                style={{
                  marginTop: 24,
                  paddingTop: 20,
                  borderTop: "1px solid var(--plnly-border)",
                  fontFamily: "var(--plnly-font-body)",
                  fontSize: 14,
                  color: "var(--plnly-text-muted)",
                }}
              >
                {pkg.standard} standard ·{" "}
                <strong style={{ color: "var(--plnly-ink)", fontWeight: 500 }}>
                  {pkg.founding} founding-client
                </strong>
              </div>
            </Card>
          ))}
        </div>

        <div className={styles.pointer}>
          <p
            style={{
              fontFamily: "var(--plnly-font-body)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--plnly-text-secondary)",
              margin: 0,
              maxWidth: 640,
            }}
          >
            Planning a trip? Add Curated AI Travel Tools and a Network Planning Field Guide to any
            package — or take the AI travel tools as a package on their own.{" "}
            <Link
              href="/travel"
              style={{ color: "var(--plnly-accent-text)", textDecoration: "underline" }}
            >
              See PLNLY Travel
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
