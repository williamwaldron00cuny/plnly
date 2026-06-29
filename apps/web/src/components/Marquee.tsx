import styles from "./Marquee.module.css";

const ITEMS = [
  "Scheduling",
  "Travel",
  "Smart home",
  "Groceries",
  "AI literacy",
  "Family calendars",
  "Streaming & media",
  "Household admin",
];

export function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className={styles.wrap} style={{ borderTop: "1px solid var(--plnly-border)", borderBottom: "1px solid var(--plnly-border)" }}>
      <div className={styles.track}>
        {track.map((item, i) => (
          <span className={styles.item} key={`${item}-${i}`}>
            <span className={styles.chevron}>›</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
