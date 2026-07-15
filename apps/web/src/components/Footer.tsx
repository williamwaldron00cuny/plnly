import type { CSSProperties } from "react";
import Image from "next/image";
import { Wordmark, Eyebrow } from "@plnly/ui";
import { BookButton } from "./BookButton";
import styles from "./Footer.module.css";

const footCol: CSSProperties = { display: "flex", flexDirection: "column", gap: 8, marginTop: 14 };
const footLink: CSSProperties = {
  fontFamily: "var(--plnly-font-body)",
  fontSize: 15,
  color: "var(--plnly-cloud)",
  textDecoration: "none",
};

export function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "var(--plnly-ink-2)", borderTop: "1px solid var(--plnly-border-on-ink)" }}
    >
      <div className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40 }}>
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
            <div className={styles.stoop}>
              <Image
                src="/photos/brownstone-stoop.jpg"
                alt="A Brooklyn brownstone stoop"
                fill
                sizes="64px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <Wordmark size="md" onInk style={{ alignItems: "flex-start" }} />
              <p
                style={{
                  fontFamily: "var(--plnly-font-body)",
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: "var(--plnly-on-ink-dim)",
                  margin: "34px 0 0",
                  maxWidth: 300,
                }}
              >
                Personal AI systems for your home and life. Brooklyn, NY — and online.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            <div>
              <Eyebrow onInk>Get in touch</Eyebrow>
              <div style={footCol}>
                <BookButton size="sm" />
                <a href="mailto:hello@plnly.co" style={{ ...footLink, marginTop: 6 }}>
                  hello@plnly.co
                </a>
              </div>
            </div>
            <div>
              <Eyebrow onInk>WFWorks family</Eyebrow>
              <div style={footCol}>
                <span style={footLink}>PLNLY</span>
                <a
                  href="https://www.networkplanning.co"
                  target="_blank"
                  rel="noreferrer"
                  style={footLink}
                >
                  Network Planning
                </a>
                <span style={footLink}>Brooklyn Kin</span>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 64,
            paddingTop: 24,
            borderTop: "1px solid var(--plnly-border-on-ink)",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <Eyebrow onInk>© 2026 PLNLY · Brooklyn, NY</Eyebrow>
          <Eyebrow onInk dot>
            Built bespoke. Yours to run. · AI, plainly.
          </Eyebrow>
        </div>
      </div>
    </footer>
  );
}
