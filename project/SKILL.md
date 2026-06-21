---
name: plnly-design
description: Use this skill to generate well-branded interfaces and assets for PLNLY (stylized wordmark; spoken "Plainly"), a personal-AI setup, teaching, and retainer service — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, brand assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, social posts, print pieces), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand:** PLNLY · *plainly*. Signature line **Built bespoke. Yours to run.** Essence *a beautiful plainness.* Promise *Modern life, minus the jargon.* Ownership, not concierge.
- **First-contact rule:** pair **PLNLY** with **plainly** at first sight on every new surface.
- **Global CSS:** link `styles.css` for all `--plnly-*` tokens and the four webfonts.
- **Colors:** greige ground `#E3E1DA`, ink `#20242B`, coral accent `#E25E3A` (rare; `#B8492A` for coral text). Hues: mist/harbor/eucalyptus/mint. Ratio 70·20·8·2.
- **Type:** Outfit (display/wordmark, never bold) · Newsreader italic (one elevated word) · Hanken Grotesk (body) · IBM Plex Mono (labels). All Google Fonts.
- **Motif:** the quiet orbit — never circuits/robots/neural lines.
- **Components:** mount from `window.PLNLYDesignSystem_1cc2e7` after loading `_ds_bundle.js` (Wordmark, Orbit, Button, Card, Badge, Eyebrow, Icon, Input).
- **Voice:** capable not reassuring; warm with edges; one elevated word; specific over generic. No emoji. Buttons are a verb + a noun.

## Files

- `readme.md` — full guide: content fundamentals, visual foundations, iconography, index.
- `styles.css` + `tokens/` — design tokens and fonts.
- `assets/` — favicon, coral dot, orbit SVGs.
- `components/` — React primitives (`.jsx` + `.d.ts` + `.prompt.md`).
- `guidelines/` — foundation specimen cards.
- `ui_kits/website/` — the one-page site, recreated with the components.
