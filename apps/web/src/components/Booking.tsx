"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Eyebrow } from "@plnly/ui";
import styles from "./Booking.module.css";

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || "plnly/intro-call";

export function Booking() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#E25E3A" },
          dark: { "cal-brand": "#E25E3A" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="booking" style={{ background: "var(--plnly-porcelain)" }}>
      <div className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Eyebrow>Pick a time</Eyebrow>
        <h2
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            color: "var(--plnly-ink)",
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
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}
