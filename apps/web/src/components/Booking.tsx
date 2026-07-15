"use client";

import Cal from "@calcom/embed-react";
import { Eyebrow } from "@plnly/ui";
import { CAL_LINK } from "./CalInit";
import styles from "./Booking.module.css";

export function Booking() {
  return (
    <section id="booking" style={{ background: "var(--plnly-ink-2)" }}>
      <div className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow onInk>Pick a time</Eyebrow>
        <h2
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            color: "var(--plnly-cloud)",
            margin: "18px 0 40px",
            maxWidth: "20ch",
          }}
        >
          Or skip the form — grab a slot directly.
        </h2>
        <div className={styles.embedFrame}>
          <Cal
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>
      </div>
    </section>
  );
}
