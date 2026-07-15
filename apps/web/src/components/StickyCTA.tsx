"use client";

import { useEffect, useState } from "react";
import { BookButton } from "./BookButton";
import styles from "./StickyCTA.module.css";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.wrap} data-visible={visible}>
      <BookButton size="md" />
    </div>
  );
}
