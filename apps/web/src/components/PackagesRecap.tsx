import { PACKAGES } from "@/data/packages";
import { BookButton } from "./BookButton";
import styles from "./PackagesRecap.module.css";

/**
 * The five packages again, side by side — a plain list (no cards) for
 * comparing them at a glance right after the one-at-a-time scroll sequence
 * above. Same source data as PackagesOrbit, just a different read of it.
 */
export function PackagesRecap() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>All five, side by side.</h2>
        <ol className={styles.list}>
          {PACKAGES.map((pkg, i) => (
            <li key={pkg.name} className={styles.row}>
              <span className={styles.index}>0{i + 1}</span>
              <div className={styles.rowMain}>
                <div className={styles.rowNameLine}>
                  <span className={styles.rowName}>{pkg.name}</span>
                  <span className={styles.rowCadence}>{pkg.cadence}</span>
                </div>
                <p className={styles.rowTagline}>{pkg.tagline}</p>
              </div>
              <div className={styles.rowPrice}>
                <span className={styles.priceStandard}>{pkg.standard}</span>
                <span className={styles.priceFounding}>{pkg.founding}</span>
                <span className={styles.priceLabel}>founding-client</span>
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.cta}>
          <BookButton size="lg" />
        </div>
      </div>
    </section>
  );
}
