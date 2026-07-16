import Image from "next/image";
import { Eyebrow } from "@plnly/ui";
import styles from "./CityStrip.module.css";

interface Tile {
  kind: "photo" | "video";
  src: string;
  poster?: string;
  alt: string;
  width: number;
  aspect: string;
}

// Deliberately alternating tone, not sorted by it — the point is that the same
// household runs across both the quiet nights and the loud ones.
const TILES: Tile[] = [
  {
    kind: "video",
    src: "/video/loft-popart.mp4",
    poster: "/photos/loft-popart-poster.jpg",
    alt: "A Brooklyn loft with leather chairs and pop-art paintings on a brick wall",
    width: 560,
    aspect: "16 / 10",
  },
  {
    kind: "photo",
    src: "/photos/family-busy-kitchen.jpg",
    alt: "A father on the phone with a child on his shoulders, another child and mother in the kitchen behind him",
    width: 260,
    aspect: "4 / 5",
  },
  {
    kind: "video",
    src: "/video/subway-graffiti.mp4",
    poster: "/photos/subway-graffiti-poster.jpg",
    alt: "An elevated subway train covered in graffiti passing over a Brooklyn street",
    width: 440,
    aspect: "16 / 10",
  },
  {
    kind: "photo",
    src: "/photos/board-game-hands.jpg",
    alt: "Hands mid-move over a board game at a kitchen table",
    width: 300,
    aspect: "1 / 1",
  },
  {
    kind: "video",
    src: "/video/bk-lifestyle.mp4",
    poster: "/photos/bk-lifestyle-poster.jpg",
    alt: "Two people playing chess at an outdoor table",
    width: 320,
    aspect: "4 / 5",
  },
  {
    kind: "photo",
    src: "/photos/calendar-hand.jpg",
    alt: "A hand marking a date on a wall calendar covered in sticky notes",
    width: 280,
    aspect: "3 / 4",
  },
];

export function CityStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.kicker}>
        <Eyebrow onInk dot>
          Same neighborhood
        </Eyebrow>
        <p className={styles.line}>
          Graffiti on the train two stops away. A puzzle on the table two rooms over. PLNLY runs
          in both houses.
        </p>
      </div>
      <div className={styles.strip}>
        {TILES.map((tile) => (
          <div
            key={tile.src}
            className={styles.tile}
            style={{
              width: tile.width,
              aspectRatio: tile.aspect,
              backgroundImage: tile.poster ? `url(${tile.poster})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {tile.kind === "photo" ? (
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes={`${tile.width}px`}
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
