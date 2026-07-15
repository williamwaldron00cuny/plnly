import Link from "next/link";
import { Eyebrow, Button } from "@plnly/ui";
import styles from "./TravelTeaser.module.css";

export function TravelTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          <Eyebrow>PLNLY Travel</Eyebrow>
          <h2
            className={styles.heading}
            style={{
              fontFamily: "var(--plnly-font-display)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "var(--plnly-ink)",
              margin: "16px 0 0",
            }}
          >
            The AI plans the trip. You still make every call.
          </h2>
          <p
            style={{
              fontFamily: "var(--plnly-font-body)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--plnly-text-secondary)",
              margin: "18px 0 0",
              maxWidth: 480,
            }}
          >
            Most of what eats a weekend before a trip isn&rsquo;t the traveling — it&rsquo;s the
            forty open tabs. As part of any PLNLY setup, we build the AI that plans and re-plans
            your travel around how your family actually travels. Or have the finished plan handed
            to you by Network Planning, our travel studio.
          </p>
        </div>
        <div>
          <Link href="/travel" style={{ display: "inline-block" }}>
            <Button variant="secondary" size="lg">
              Explore PLNLY Travel
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
