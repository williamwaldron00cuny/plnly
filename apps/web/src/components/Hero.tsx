"use client";

import { useRef, useState } from "react";
import { Orbit, Button, Eyebrow } from "@plnly/ui";
import { italicCoral } from "./shared";
import styles from "./Hero.module.css";

export function Hero({ onBook }: { onBook: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px * 24, y: py * 24 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className={styles.section}
      style={{ position: "relative", maxWidth: 1120, margin: "0 auto", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          right: -200,
          top: -120,
          pointerEvents: "none",
          transform: `translate(${tilt.x}px, ${tilt.y}px)`,
          transition: "transform 600ms var(--plnly-ease)",
        }}
      >
        <Orbit tone="faint" size={760} spin duration={90} breathe breatheDuration={9} />
      </div>
      <div style={{ position: "relative", maxWidth: 760 }}>
        <Eyebrow>Modern life, minus the jargon · Brooklyn, NY</Eyebrow>
        <h1
          className={styles.heading}
          style={{
            fontFamily: "var(--plnly-font-display)",
            fontWeight: 500,
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            color: "var(--plnly-ink)",
            margin: "26px 0 0",
          }}
        >
          Built bespoke. <em style={italicCoral}>Yours</em> to run.
        </h1>
        <p
          className={styles.lead}
          style={{
            fontFamily: "var(--plnly-font-body)",
            lineHeight: 1.55,
            color: "var(--plnly-ink-80)",
            margin: "30px 0 0",
            maxWidth: 560,
          }}
        >
          We set the tools of modern life up around how your household actually lives, teach you to
          run them, and hand over the keys. You own the capability — not a subscription to us.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 22, marginTop: 38, flexWrap: "wrap" }}>
          <Button size="lg" onClick={onBook}>
            Start the setup
          </Button>
          <a
            href="#service"
            style={{
              fontFamily: "var(--plnly-font-body)",
              fontSize: 15,
              color: "var(--plnly-ink)",
              borderBottom: "1px solid rgba(32,36,43,0.3)",
              paddingBottom: 2,
              textDecoration: "none",
            }}
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
