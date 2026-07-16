import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, Card } from "@plnly/ui";
import { BookButton } from "@/components/BookButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Travel — PLNLY × Network Planning",
  description: "The AI plans the trip. You still make every call — two ways to travel well, from PLNLY and our sister brand Network Planning.",
};

const WAYS = [
  {
    name: "Build it with us",
    body: "As part of any PLNLY setup, we configure the AI that plans and re-plans your travel — itineraries, booking logic, packing, real-time changes when a flight moves — around how your family actually travels. You leave owning the workflow, not renting it.",
  },
  {
    name: "Or have it handed to you",
    body: "Some trips you don't want to build — you just want the finished plan. That's Network Planning, our travel studio: deeply researched field guides with day-by-day routing, vetted stays and tables, cost ranges, and booking links, plus a Notion companion layer.",
  },
];

// Pricing: Notion "Everything Brochure — Master Content" §PLNLY Travel + PLNLY_Travel_Page.md.
// Standalone Curated AI Travel Tools price is assumed equal to the add-on — not fabricated further.
const ENTRY_POINTS = [
  {
    name: "Curated AI Travel Tools",
    price: "$150",
    body: "A PLNLY package on its own: we set up the AI travel tools around your trip and your travel style — flight and itinerary planning, live rebooking, packing, the logistics — then hand you the keys.",
  },
  {
    name: "Network Planning Field Guide",
    price: "from $39",
    body: "The research, done for you, at Network Planning's own prices (Digital from $39; Print + Digital from $69; bespoke Custom Dossier quoted). Add it to any PLNLY package.",
  },
  {
    name: "Field Guide + Curated AI Travel Tools",
    price: "$150 on top of the guide",
    body: "Both together: the finished plan, plus the AI set up to run with it.",
  },
];

export default function TravelPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <Eyebrow onInk>Trip planning</Eyebrow>
            <h1
              style={{
                fontFamily: "var(--plnly-font-display)",
                fontWeight: 500,
                fontSize: 40,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "var(--plnly-cloud)",
                margin: "16px 0 0",
                maxWidth: "18ch",
              }}
            >
              The AI plans the trip. You still make every call.
            </h1>
            <p
              style={{
                fontFamily: "var(--plnly-font-body)",
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--plnly-on-ink-dim)",
                margin: "20px 0 0",
                maxWidth: 640,
              }}
            >
              Most of what eats a weekend before a trip {"isn't"} the traveling — {"it's"} the forty
              open tabs: routes, stays, the restaurant that books out three weeks ahead, the flight
              {" that's"} quietly cheaper on a Tuesday. PLNLY offers travel tools and bespoke
              packages in coordination with Network Planning, a WFWorks company — two ways to make
              that part disappear without handing over control of your own trip.
            </p>
          </div>
          <div className={styles.heroPhoto}>
            <Image
              src="/photos/travel-packing.jpg"
              alt="A suitcase, hat, and clothes laid out on a bed while packing for a trip"
              fill
              sizes="(max-width: 800px) 100vw, 420px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.inner}>
          <Eyebrow>Two ways to travel well</Eyebrow>
          <div className={styles.ways}>
            {WAYS.map((way) => (
              <Card key={way.name} surface="porcelain" elevation="flat" radius="card-lg" padding={32} style={{ border: "1px solid var(--plnly-greige-deep)" }}>
                <h3
                  style={{
                    fontFamily: "var(--plnly-font-display)",
                    fontWeight: 500,
                    fontSize: 22,
                    color: "var(--plnly-ink)",
                    margin: 0,
                  }}
                >
                  {way.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--plnly-font-body)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--plnly-text-secondary)",
                    margin: "14px 0 0",
                  }}
                >
                  {way.body}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className={styles.cloudBreak}>
          <video
            className={styles.cloudVideo}
            src="/video/clouds-aloft.mp4"
            poster="/photos/clouds-aloft-poster.jpg"
            aria-label="Clouds seen from above an airplane at sunset"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
          <p className={styles.cloudLine}>Somewhere over it, the itinerary is already adjusting itself.</p>
        </div>

        <div className={styles.inner}>
          <div className={styles.cardsHeading}>
            <Eyebrow>Three ways in</Eyebrow>
          </div>
          <div className={styles.cards}>
            {ENTRY_POINTS.map((entry) => (
              <Card
                key={entry.name}
                surface="porcelain"
                elevation="flat"
                radius="card-lg"
                padding={28}
                style={{ border: "1px solid var(--plnly-greige-deep)" }}
              >
                <h4
                  style={{
                    fontFamily: "var(--plnly-font-display)",
                    fontWeight: 500,
                    fontSize: 18,
                    color: "var(--plnly-ink)",
                    margin: 0,
                  }}
                >
                  {entry.name}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--plnly-font-body)",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--plnly-accent-text)",
                    margin: "8px 0 0",
                  }}
                >
                  {entry.price}
                </p>
                <p
                  style={{
                    fontFamily: "var(--plnly-font-body)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "var(--plnly-text-secondary)",
                    margin: "10px 0 0",
                  }}
                >
                  {entry.body}
                </p>
              </Card>
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--plnly-font-body)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--plnly-text-secondary)",
              margin: "48px 0 0",
            }}
          >
            Prefer to browse the full catalog first?{" "}
            <a
              href="https://www.networkplanning.co"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--plnly-accent-text)", textDecoration: "underline" }}
            >
              Explore the guides at www.networkplanning.co
            </a>
          </p>

          <div
            style={{
              marginTop: 64,
              paddingTop: 40,
              borderTop: "1px solid var(--plnly-border)",
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <Eyebrow>One family: WFWorks</Eyebrow>
              <p
                style={{
                  fontFamily: "var(--plnly-font-body)",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--plnly-text-secondary)",
                  margin: "12px 0 0",
                  maxWidth: 520,
                }}
              >
                PLNLY, Network Planning, and Brooklyn Kin are all WFWorks companies — the same
                hands, the same standard, pointed at different corners of modern life. Travel is
                where two of them meet: PLNLY builds you the capability; Network Planning hands
                you the finished plan.
              </p>
            </div>
            <div style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: "var(--plnly-radius-card-lg)", overflow: "hidden" }}>
              <Image
                src="/photos/travel-plan.jpg"
                alt="A trip itinerary being planned"
                fill
                sizes="(max-width: 760px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <Eyebrow onInk dot>
          Built bespoke. Yours to run. · AI, plainly.
        </Eyebrow>
        <div style={{ marginTop: 28 }}>
          <BookButton size="lg" />
        </div>
      </section>
    </main>
  );
}
