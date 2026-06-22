import type { CSSProperties } from "react";
import { Wordmark, Eyebrow } from "@plnly/ui";
import styles from "./Footer.module.css";

const footCol: CSSProperties = { display: "flex", flexDirection: "column", gap: 8, marginTop: 14 };
const footLink: CSSProperties = {
  fontFamily: "var(--plnly-font-body)",
  fontSize: 15,
  color: "var(--plnly-ink)",
  textDecoration: "none",
};

export function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer id="contact" style={{ background: "var(--plnly-porcelain)", borderTop: "1px solid var(--plnly-border)" }}>
      <div className={styles.section} style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 40 }}>
          <div>
            <Wordmark variant="stacked" size="sm" style={{ alignItems: "flex-start" }} />
            <p
              style={{
                fontFamily: "var(--plnly-font-body)",
                fontSize: 15,
                lineHeight: 1.5,
                color: "var(--plnly-ink-55)",
                margin: "22px 0 0",
                maxWidth: 300,
              }}
            >
              Personal AI setup, teaching, and retainer. Brooklyn, NY — and online.
            </p>
          </div>
          <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <div style={footCol}>
                <a
                  href="#contact"
                  style={footLink}
                  onClick={(e) => {
                    e.preventDefault();
                    onBook();
                  }}
                >
                  Book an intro call
                </a>
                <a href="mailto:hello@plnly.co" style={footLink}>
                  hello@plnly.co
                </a>
              </div>
            </div>
            <div>
              <Eyebrow>Elsewhere</Eyebrow>
              <div style={footCol}>
                <a href="#" style={footLink}>
                  Instagram
                </a>
                <a href="#" style={footLink}>
                  LinkedIn
                </a>
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
            borderTop: "1px solid var(--plnly-border)",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <Eyebrow>© 2026 PLNLY · Brooklyn, NY</Eyebrow>
          <Eyebrow dot>Modern life, minus the jargon</Eyebrow>
        </div>
      </div>
    </footer>
  );
}
