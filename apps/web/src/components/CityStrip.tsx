import Image from "next/image";
import { Eyebrow } from "@plnly/ui";
import styles from "./CityStrip.module.css";

interface Tile {
  kind: "photo" | "video";
  src: string;
  poster?: string;
  alt: string;
  aspect: string;
}

// Deliberately alternating tone, not sorted by it — the point is that the same
// household runs across both the quiet nights and the loud ones.
const TILES: Tile[] = [
  {
    kind: "photo",
    src: "/photos/family-busy-kitchen.jpg",
    alt: "A father on the phone with a child on his shoulders, another child and mother in the kitchen behind him",
    aspect: "4 / 5",
  },
  {
    kind: "video",
    src: "/video/subway-graffiti.mp4",
    poster: "/photos/subway-graffiti-poster.jpg",
    alt: "An elevated subway train covered in graffiti passing over a Brooklyn street",
    aspect: "16 / 10",
  },
  {
    kind: "photo",
    src: "/photos/board-game-hands.jpg",
    alt: "Hands mid-move over a board game at a kitchen table",
    aspect: "1 / 1",
  },
  {
    kind: "video",
    src: "/video/bk-lifestyle.mp4",
    poster: "/photos/bk-lifestyle-poster.jpg",
    alt: "Two people playing chess at an outdoor table",
    aspect: "4 / 5",
  },
  {
    kind: "photo",
    src: "/photos/calendar-hand.jpg",
    alt: "A hand marking a date on a wall calendar covered in sticky notes",
    aspect: "3 / 4",
  },
];

export function CityStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.kicker}>
        <Eyebrow onInk dot>
          Around here
        </Eyebrow>
        <p className={styles.line}>
          Same neighborhood, same block, a dozen different homes. PLNLY works in all of them.
        </p>
      </div>

      <div className={styles.feature}>
        <video
          className={styles.featureVideo}
          src="/video/loft-popart.mp4"
          poster="/photos/loft-popart-poster.jpg"
          aria-label="A Brooklyn loft with leather chairs and pop-art paintings on a brick wall"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      </div>

      <div className={styles.masonry}>
        {TILES.map((tile) => (
          <div key={tile.src} className={styles.tile} style={{ aspectRatio: tile.aspect }}>
            {tile.kind === "photo" ? (
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 360px"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <video
                className={styles.video}
                src={tile.src}
                poster={tile.poster}
                aria-label={tile.alt}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
