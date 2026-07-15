import Link from "next/link";
import { Wordmark } from "@plnly/ui";
import { BookButton } from "./BookButton";
import styles from "./Header.module.css";

const NAV = [
  { label: "Packages", href: "/#packages-orbit" },
  { label: "Travel", href: "/travel" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" aria-label="PLNLY home" style={{ display: "inline-flex" }}>
          <Wordmark size="sm" onInk reveal={false} />
        </Link>
        <nav className={styles.nav}>
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <BookButton size="sm" />
        </nav>
      </div>
    </header>
  );
}
