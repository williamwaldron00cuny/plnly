import Link from "next/link";
import { Eyebrow, Button } from "@plnly/ui";
import styles from "./TravelTeaser.module.css";

export function TravelTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div>
          <Eyebrow>Trip planning</Eyebrow>
          <h2
            className={styles.heading}
            style={{
              fontFamily: "var(--plnly-font-display)",
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "var(--plnly-ink)",
              margin: "18px 0 0",
            }}
          >
            The AI plans the trip. You still make every call.
          </h2>
          <p
            style={{
              fontFamily: "var(--plnly-font-body)",
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--plnly-text-secondary)",
              margin: "22px 0 0",
              maxWidth: 520,
            }}
          >
            PLNLY offers travel tools and bespoke packages in coordination with{" "}
            <strong style={{ color: "var(--plnly-ink)", fontWeight: 500 }}>Network Planning</strong>,
            a WFWorks company — the same hands, the same standard, pointed at trip planning. As
            part of any PLNLY setup, we build the AI that plans and re-plans your travel around
            how your family actually travels.
          </p>
          <p
            style={{
              fontFamily: "var(--plnly-font-body)",
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--plnly-text-secondary)",
              margin: "16px 0 0",
              maxWidth: 520,
            }}
          >
            Check out our sister brand, and add Network Planning tools and services to your
            PLNLY package.
          </p>
        </div>
        <div>
          <Link href="/travel" style={{ display: "inline-block" }}>
            <Button variant="secondary" size="lg">
              Explore Network Planning
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
