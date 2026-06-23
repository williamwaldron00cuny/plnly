import Image from "next/image";
import { Card, Eyebrow, Orbit } from "@plnly/ui";
import { italicCoral } from "./shared";
import styles from "./FoundingNote.module.css";

export function FoundingNote() {
  return (
    <section style={{ background: "var(--plnly-greige)" }}>
      <div className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Card surface="white" elevation="raised" radius="card-lg" padding={0} className={styles.card}>
          <div className={styles.copy}>
            <Eyebrow dot>Early days, on purpose</Eyebrow>
            <h2
              className={styles.heading}
              style={{
                fontFamily: "var(--plnly-font-display)",
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: "-0.015em",
                color: "var(--plnly-ink)",
                margin: "18px 0 0",
              }}
            >
              {"We're new."} <em style={italicCoral}>{"That's the point."}</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--plnly-font-body)",
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--plnly-ink-55)",
                margin: "20px 0 0",
                maxWidth: 480,
              }}
            >
              {
                "PLNLY just launched. There's no backlog of case studies to point to yet — only a clear idea of what we're not: a subscription, a black box, or a service that keeps you dependent on us. The first households we work with are shaping how this runs. If that sounds worth being early for, we'd like to hear from you."
              }
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src="/photos/brownstone-interior.jpg"
              alt="A sunlit Brooklyn brownstone living room"
              fill
              className={styles.image}
              sizes="(max-width: 760px) 100vw, 420px"
            />
            <div className={styles.orbitBadge}>
              <Orbit tone="faint" size={56} />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
