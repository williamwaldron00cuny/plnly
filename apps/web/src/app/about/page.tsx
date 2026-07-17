import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@plnly/ui";
import { BookButton } from "@/components/BookButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — PLNLY",
  description: "Billy started PLNLY to set AI up around your home, teach you to run it, then hand over the keys.",
};

// Copy: PLNLY_About_Page.md (Draft v1, warm/credibility-first, July 13, 2026) — canonical, pulled verbatim.
export default function AboutPage() {
  return (
    <main>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src="/video/billy-home.mp4"
          poster="/photos/billy-home-poster.jpg"
          aria-label="Billy arriving home to Williamsburg, Brooklyn"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
        <div className={styles.heroScrim} />
        <div className={styles.heroInner}>
          <Eyebrow onInk>About</Eyebrow>
          <h1
            style={{
              fontFamily: "var(--plnly-font-display)",
              fontWeight: 500,
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "var(--plnly-cloud)",
              margin: "16px 0 0",
            }}
          >
            {"I'm Billy."}
          </h1>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <div>
            <p className={styles.paragraph}>
              For about a decade, my job was to take something complicated — a public-health
              program in Brazil, a vaccination rollout in Cambodia, the logistics behind a global
              airline — and make it usable for the people who actually had to live with it.
              That&rsquo;s the same job I do now, pointed at your kitchen table instead of a
              ministry of health.
            </p>
            <p className={styles.paragraph}>
              I started PLNLY because the AI tools quietly reshaping how a household runs — how
              you schedule, shop, plan a trip, keep the paperwork of a life from swallowing a
              weekend — are genuinely useful and almost universally explained badly. The
              companies selling them want to run them for you, forever, as long as the invoice
              clears. I think that&rsquo;s backwards. {"You're"} not too busy to be capable;
              {" you're"} too busy to lose a Saturday figuring out which tool does what.
            </p>
            <p className={styles.paragraph}>
              So PLNLY works the other way. I come to your home, set the systems up around how
              your household actually lives — not a template, not a checklist anyone could
              Google — and then I teach you and the people you live with to run them. When I
              leave, {"you're"} not on a retainer waiting for me. You have the keys.
            </p>
            <p className={styles.paragraph}>
              My background is international public health and airline marketing — Brazil and
              Cambodia, then Virgin Atlantic, Etihad, and Delta. What both taught me is that the
              hard part is almost never the technology. {"It's"} translation: turning something
              intimidating into something a real person can pick up and own.
            </p>
            <p className={styles.paragraph}>
              {"I'm"} based in Williamsburg, Brooklyn, with a Portuguese Water Dog named Penny who
              supervises most of my calls. If you want AI working for your family the way it
              should — built around you, then handed over — {"that's"} the whole idea. Book a
              First Look, and {"we'll"} start plainly.
            </p>
            <div style={{ marginTop: 40 }}>
              <BookButton size="lg" />
            </div>
          </div>
          <div>
            <div className={styles.portrait}>
              <Image
                src="/photos/dog-desk.jpg"
                alt="Penny, a Portuguese Water Dog, supervising from the desk"
                fill
                sizes="(max-width: 800px) 320px, 360px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <Eyebrow className={styles.caption}>Penny, on the job</Eyebrow>
          </div>
        </div>
      </section>
    </main>
  );
}
