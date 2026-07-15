"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ServicesOrbitSection.module.css";

const SERVICES = [
  {
    eyebrow: "01 / Setup",
    heading: "Set up around you.",
    body: "We build the AI around your household as it actually is — your calendar, your family, your routines — not a one-size-fits-all install.",
  },
  {
    eyebrow: "02 / Teaching",
    heading: "Taught, not done for you.",
    body: "Every session is hands-on. You and the people you live with learn the systems as we build them — real, working literacy, including responsible AI use for college-bound teens.",
  },
  {
    eyebrow: "03 / Ownership",
    heading: "Then it's yours.",
    body: "No dependency, no standing arrangement required. You walk away able to run, adjust, and extend what we built — and can keep it sharp with In Residence.",
  },
];

/**
 * The scroll-driven services section. The canvas (OrbitCanvas) reads the
 * same #services-orbit rect independently to sweep its nodes; this component
 * only owns which text panel is active, driven by scroll position alone —
 * so it still works correctly under prefers-reduced-motion.
 */
export function ServicesOrbitSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const maxScroll = rect.height - windowHeight;
        let raw = maxScroll > 0 ? Math.max(0, Math.min(1, Math.abs(rect.top) / maxScroll)) : 0;
        if (rect.top > 0) raw = 0;
        setActive(raw > 0.66 ? 2 : raw > 0.33 ? 1 : 0);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="services-orbit" ref={sectionRef} className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.grid}>
          <div>
            <div className={styles.panelStack}>
              {SERVICES.map((service, i) => (
                <div key={service.eyebrow} className={styles.panel} data-active={active === i}>
                  <div className={styles.eyebrow}>
                    <span className={styles.eyebrowRule} />
                    {service.eyebrow}
                  </div>
                  <h2 className={styles.heading}>{service.heading}</h2>
                  <p className={styles.body}>{service.body}</p>
                </div>
              ))}
            </div>
            <div className={styles.moreLinks}>
              <Link href="/#packages" className={styles.moreLink}>
                See all five Packages
              </Link>
              <span className={styles.moreDivider}>·</span>
              <Link href="/travel" className={styles.moreLink}>
                PLNLY Travel
              </Link>
            </div>
          </div>
          <div aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
