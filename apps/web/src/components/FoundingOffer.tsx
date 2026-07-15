import { Eyebrow } from "@plnly/ui";
import { BookButton } from "./BookButton";
import { Booking } from "./Booking";
import styles from "./FoundingOffer.module.css";

export function FoundingOffer() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Eyebrow onInk dot>
          Early days, on purpose
        </Eyebrow>
        <h2
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "var(--plnly-cloud)",
            margin: "18px 0 0",
          }}
        >
          We&rsquo;re taking on our first five households differently than we&rsquo;ll take on our
          two-hundredth.
        </h2>
        <p
          style={{
            fontFamily: "var(--plnly-font-body)",
            fontSize: 16,
            lineHeight: 1.65,
            color: "var(--plnly-on-ink-dim)",
            margin: "20px 0 0",
          }}
        >
          The founding-client rate is real savings, not a marketing gimmick — in exchange, we ask
          for your honest feedback and, if you&rsquo;re willing, an introduction to someone else
          who might need this. We&rsquo;re new. That&rsquo;s the point: no backlog of case studies
          to hide behind, no script we&rsquo;re running through. Just real attention, while
          we&rsquo;re small enough to give it.
        </p>
        <div style={{ marginTop: 36 }}>
          <BookButton size="lg" />
        </div>
      </div>
      <div style={{ marginTop: 80 }}>
        <Booking />
      </div>
    </section>
  );
}
