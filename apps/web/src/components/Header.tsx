"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@plnly/ui";
import { BookButton } from "./BookButton";
import styles from "./Header.module.css";

const NAV = [
  { label: "Packages", href: "/#packages-orbit" },
  { label: "Travel", href: "/travel" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" aria-label="PLNLY home" style={{ display: "inline-flex" }}>
          <Wordmark size="sm" onInk reveal={false} />
        </Link>
        <nav className={styles.nav}>
          {NAV.map((item) => {
            const isActive = pathname === item.href.split("#")[0];
            return (
              <Link
                key={item.label}
                href={item.href}
                className={styles.navLink}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <BookButton size="sm" />
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuLine} data-open={open} />
            <span className={styles.menuLine} data-open={open} />
          </button>
        </nav>
      </div>
      <div id="mobile-nav" className={styles.mobilePanel} data-open={open}>
        {NAV.map((item) => {
          const isActive = pathname === item.href.split("#")[0];
          return (
            <Link
              key={item.label}
              href={item.href}
              className={styles.mobileLink}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
