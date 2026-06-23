"use client";

import { useState } from "react";
import { Eyebrow } from "@plnly/ui";
import styles from "./FAQ.module.css";

const QUESTIONS = [
  {
    q: "How much does this cost?",
    a: "It depends on your household and what you want set up — a smart-home pass looks different from a full scheduling-and-travel overhaul. Book an intro call and we'll quote it after we understand the scope, rather than publish a one-size-fits-all rate.",
  },
  {
    q: "Is this a subscription?",
    a: "No. The point is ownership — once we hand over the keys, the capability is yours whether or not you ever talk to us again. If you'd like the occasional tune-up later, that's available, but nothing recurring is required.",
  },
  {
    q: "Do I need to know anything about AI or tech going in?",
    a: "No. We start from wherever you actually are and explain things in plain language — the real tool and the real task, never jargon for its own sake.",
  },
  {
    q: "Where are you based — do you work outside Brooklyn?",
    a: "We're based in Brooklyn, NY, and do in-person setups locally. Outside that radius, the same process happens online — it works just as well over a call and screen share.",
  },
  {
    q: "What's the PLAINLY AI-literacy program?",
    a: "It's our AI-on program for college-bound teens — NotebookLM workflows, citation hygiene, and where the academic-integrity line actually is. Tool fluency, scoped tight. Not subject tutoring.",
  },
  {
    q: "How long does a setup take?",
    a: "It varies by household, but it's a short series of sessions, not a single afternoon and not an open-ended engagement. We'll give you a real estimate once we know what you're setting up.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ background: "var(--plnly-porcelain)" }}>
      <div className={styles.section} style={{ maxWidth: 760, margin: "0 auto" }}>
        <Eyebrow>Questions</Eyebrow>
        <h2
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.015em",
            color: "var(--plnly-ink)",
            margin: "18px 0 40px",
          }}
        >
          Before you book.
        </h2>
        <div>
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={styles.row} key={item.q}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={styles.glyph} data-open={isOpen}>
                    +
                  </span>
                </button>
                <div className={styles.answerWrap} data-open={isOpen}>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
