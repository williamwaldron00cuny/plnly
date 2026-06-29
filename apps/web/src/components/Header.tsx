import type { CSSProperties } from "react";
import { Wordmark, Button } from "@plnly/ui";
import styles from "./Header.module.css";

const navLinkStyle: CSSProperties = {
  fontFamily: "var(--plnly-font-body)",
  fontSize: 14,
  color: "var(--plnly-ink-65)",
  textDecoration: "none",
};

export function Header({ onBook }: { onBook: () => void }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(227,225,218,0.82)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--plnly-border)",
      }}
    >
      <div
        className={styles.bar}
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Wordmark variant="compact" size="sm" onInk />
          <Wordmark variant="horizontal" size="sm" />
        </span>
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#service" style={navLinkStyle} className={styles.navLink}>
            The service
          </a>
          <a href="#who" style={navLinkStyle} className={styles.navLink}>
            {"Who it's for"}
          </a>
          <a href="#booking" style={navLinkStyle} className={styles.navLink}>
            Book a call
          </a>
          <Button size="sm" onClick={onBook}>
            Start the setup
          </Button>
        </nav>
      </div>
    </header>
  );
}
