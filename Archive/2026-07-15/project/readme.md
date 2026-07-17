# PLNLY Design System

> **Built bespoke. Yours to run.** · *a beautiful plainness*

The living system behind **PLNLY** (stylized wordmark; spoken **"Plainly"**) — a personal-AI setup, teaching, and retainer service. Brooklyn / NYC first, then online. PLNLY sets the tools of modern life up around how a household actually lives, teaches the household to run them, and **hands over the keys**. Ownership, not concierge.

This project is the design system itself: tokens, fonts, brand assets, reusable components, foundation specimen cards, and a website UI kit. The compiler bundles components into `window.PLNLYDesignSystem_1cc2e7` and ships `styles.css` to consumers.

---

## The brand in one breath

- **Signature line (locked):** Built bespoke. Yours to run.
- **Essence (private north star):** a beautiful plainness.
- **Promise:** Modern life, minus the jargon.
- **Positioning — the moat:** everyone else runs the AI and keeps the keys; PLNLY hands them over. Felt in the identity, not just stated.
- **First-contact rule:** every new surface pairs **PLNLY** with **plainly** at first sight — the reveal sits beneath the wordmark as a designed pronunciation, never a fallback.
- **Audiences:** (1) affluent, time-constrained households; (2) parents of college-bound teens who want responsible AI-tool literacy.
- **Sub-brand DNA:** PLNLY is the umbrella. Future lines share the geometric wordmark, the coral *plainly*, the dot, the orbit — each with its own secondary hue from the palette. The AI-literacy line is **PL·AI·NLY** (the A and I, switched back on, in coral).

---

## Sources (provided materials)

All in `uploads/` — design-direction reference, not shipped. Stored here in case the reader has access.

- **Briefs (Notion exports, Markdown):** Foundation Brief, Creative Brief — Visual Identity, Core AI Service — Offer & GTM, Launch Plan — Tier 1 Sprint, Competitive Landscape scans, Visual Identity — Brand Guidelines v1.0, Website Build (Claude Code Handoff + Framer Guide).
- **Visual stage files (`.dc.html`, the authoritative visual spec):** PLNLY Brand Assets · Brand Guidelines · Stage 1 Visual Territories · Stage 2 Logo & Lockup · Stage 3 Color System · Stage 4 Typography · Stage 5 Spacing & Grid · Stage 6 Icon & Imagery · Stage 7 Motion & Voice · PLNLY Website.
- **PDFs:** brief, ClaudeCode Handoff, Core AI Service, Creative Brief, Foundation Brief, Website Build.

Domains: `plnly.co` (primary), `plnly.nyc` (defensive). Founder: Billy.

---

## CONTENT FUNDAMENTALS — how PLNLY writes

**One line:** the capable friend with great taste — treats you as a peer, says it once and says it well, never raises its voice.

- **Capable, not reassuring.** Assumes you're smart and busy, not worried. Names the real tool and the real task. Never "AI-powered solutions," never "Don't worry — it's so easy!"
- **Warm, with edges.** The warmth of being treated as an equal, not a hug. One dry aside, rarely — never a brand-voice "joke" reaching to be liked.
- **One elevated word.** Plain prose with a single word doing real work — the verbal echo of the Newsreader italic. Confidence by what's left out.
- **Specific over generic.** "Set up NotebookLM for your reading" beats "boost productivity." Name the tool, the task, the place.

**Casing & mechanics.** Sentence case for headlines and the signature line — *Built bespoke. Yours to run.* (periods, no commas, two clean beats, lowercase keeps it quiet). Mono eyebrows/labels are UPPERCASE with wide tracking. The wordmark **PLNLY** is uppercase; the reveal **plainly** is lowercase italic.

**Person.** Speaks as **we** (PLNLY) to **you** (the household). Warm second person, never "users."

**Emoji.** None. The brand's only ornament is the coral dot and the orbit.

**Voice samples**
- ✓ "Here's the setup. You've got it from here." · "We'll set up your travel the way you actually pack." · "Built bespoke. Yours to run." · "Set up. It's yours now."
- ✕ "Don't worry — it's so easy!" · "Unlock the power of AI to transform your life." · "Your AI-powered household solution." · "Get Started" / "Submit"

**Microcopy.** Buttons are a verb + a noun ("Start the setup"), never "Get Started." Empty states are plain ("Nothing here yet."). Confirmations close the ownership loop ("Set up. It's yours now. — we've handed over the keys").

---

## VISUAL FOUNDATIONS

**Colors.** The ground is **greige** (`#E3E1DA`) — not white, not cold, not yellow. **Ink** (`#20242B`, a warm near-black) anchors all type and dark surfaces. A small family of layered hues — **mist blue, harbor, eucalyptus, mint** — sit quietly underneath as small tints/fills (each a candidate sub-brand tone). One accent: **coral** (`#E25E3A`), used rarely; **coral deep** (`#B8492A`) is the text-safe version. Balance ratio **70 · 20 · 8 · 2** (neutrals · ink · hues · coral). Type is set in warm ink tints (`#3A3833`, `#4F4C46`, `#5C594F`…), never pure black. Functional UI: success `#4F7A5E`, info `#5E7E92`, caution `#BE7A35`, error `#C0432A` (deeper/redder than coral so the two never confuse).

**Type.** Four voices, each used once per composition. **Outfit** (Medium/Regular, never bold) — display, headlines, the wordmark. **Newsreader italic** — the one elevated word and the *plainly* reveal; never a whole sentence, one moment per screen. **Hanken Grotesk** — body & interface workhorse, 16/1.6, measure 45–75ch. **IBM Plex Mono** — eyebrows, labels, data; uppercase, wide tracking, the stamp. Scale: Display 60 · H1 44 · H2 32 · H3 24 · Lead 19 · Body 16 · Small 14 · Caption 12. All four are Google Fonts (loaded via `tokens/fonts.css`).

**Spacing & grid.** 8-point rhythm (4 as a half-step): 4·8·12·16·24·32·48·64·96·128. Inside components 4–32; between blocks 48–64; between sections 96–128. 12-column grid, 24px gutter, max 1080–1120px, auto margins (responsive 4→8→12). "Space is the brand's loudest material — when in doubt, add room, not ornament."

**Backgrounds.** Flat, matte color on screen — **no gradients, no noise, no gradient-mesh**. Light comes from layout and space, not effects. Two grounds per surface, max: greige + one of porcelain/ink. The **quiet orbit** (concentric hairline rings, coral center, mint/mist satellites) is the only recurring graphic — large & faint behind copy, small as a section marker, on ink as the avatar. Print uses uncoated, tactile stock (Aesop, not glossy).

**Corners.** Mostly square: 2px chips · 4px cards (default) · 6px larger cards · 12px tiles/icon wells · pill buttons. Sharp enough to read as considered, rounded just enough to feel human.

**Elevation.** Soft and low, never dramatic. Raised `0 1px 3px rgba(0,0,0,.06)` (cards) · floating `0 4px 14px rgba(32,36,43,.12)` (menus) · overlay `0 12px 34px rgba(32,36,43,.18)` (modals).

**Borders.** Hairline rules at `rgba(32,36,43,.13)`; stronger at `.22`; on ink `rgba(228,227,222,.14)`. Used for section dividers and quiet table rules.

**Cards.** White (or greige "quiet" inset, or ink) surface, 4px radius, raised shadow, generous 32px padding. No colored left-border accents.

**Animation.** Arrive, don't perform. Durations 160ms (hover) · 320ms (enter) · 700ms (the reveal). Easing `cubic-bezier(.22,.61,.36,1)` — ease-out, no overshoot, no bounce. The signature: the wordmark is present first, then the divider and *plainly* rise gently in beneath it. The orbit, when it moves, takes ~48–90s per turn (hour-hand, not spinner). Always respect `prefers-reduced-motion`; the brand is just as calm holding still. One considered motion per moment.

**Hover / press.** Hover warms toward ink or coral-deep (links underline; inputs warm their border to ink). No coral focus rings — focus warms to ink; only errors introduce color. Press states stay subtle (opacity/color, not dramatic shrink).

**Transparency & blur.** Sparingly — the sticky header uses `rgba(227,225,218,.82)` + `blur(10px)`; the modal scrim is `rgba(32,36,43,.42)` + a light blur. Otherwise surfaces are opaque and matte.

**Imagery.** Warm, real, unhurried. Soft natural light, lived-in interiors, hands & objects over faces, generous negative space. Park Hyatt calm meets Aesop restraint. **Avoid:** robots, circuits, neon, stock "tech," cold blue gradients, "happy family at laptop." Where photography isn't ready, an orbit field stands in.

---

## ICONOGRAPHY

PLNLY's expressive icons are **abstract before literal** — built from the **dot, the ring, and the line**, so meaning is suggested, not spelled out. 24px grid, **1.75px stroke**, round caps and joins. Coral appears in **at most one element** of an icon, only when it carries meaning (a focal point, an active state).

- **Set (in `components/icon/Icon.jsx`):** `ring` (a cycle), `focus` (set up/dialed in), `time` (schedule), `plan` (a list/the setup), `handover` (yours to run →), `add`, `place` (the household), `orbit` (the brand motif as a glyph). These are inline SVG React marks — no icon font, no PNG sprites.
- **The orbit motif** lives both as a component (`components/brand/Orbit.jsx`) and as static SVG in `assets/` (`orbit-ink.svg`, `orbit-faint.svg`).
- **Dense functional UI:** for the gaps the expressive set doesn't cover (chevrons, close, form glyphs), fall back to a thin-line library set to a **1.75px stroke and ink color** — **Lucide** (CDN) is the recommended match for stroke weight and round caps. *(Substitution flagged: the brand has no proprietary functional-icon library; Lucide is the closest CDN match in spirit. Swap if a bespoke set is produced.)*
- **No emoji. No unicode glyphs as icons.** The standalone devices are the **coral dot** (`assets/coral-dot.svg`) and the favicon — the coral square with a cream "P." (`assets/favicon.svg`).

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills-compatible front door.

**`tokens/`** — `fonts.css` (Google Fonts import) · `colors.css` · `typography.css` · `spacing.css` (spacing, grid, radius, elevation, motion). All `--plnly-*` custom properties, base values + semantic aliases.

**`assets/`** — `favicon.svg` · `coral-dot.svg` · `orbit-ink.svg` · `orbit-faint.svg`.

**`components/`** (mount via `const { X } = window.PLNLYDesignSystem_1cc2e7`)
- `brand/` — **Wordmark** (the PLNLY/plainly lockup; stacked·horizontal·compact·reversed·sub-brand) · **Orbit** (the motif).
- `core/` — **Button** (ink pill + coral dot) · **Card** · **Badge** · **Eyebrow**.
- `icon/` — **Icon** + `ICON_NAMES` (the abstract mark set).
- `forms/` — **Input**.

**`guidelines/`** — foundation specimen cards (Design System tab): Colors (neutrals, hues, accent, functional, ratio), Type (families, scale, the elevated word), Spacing (scale, radius, elevation), Brand (lockups, orbit, abstract icons).

**`ui_kits/website/`** — the one-page marketing site, recreated with the components, with an interactive booking modal. `index.html` + `Site.jsx`. Also registered as a Starting Point.

---

## Notes & open items

- **Fonts** are all Google Fonts (Outfit, Newsreader, Hanken Grotesk, IBM Plex Mono), loaded via `@import` in `tokens/fonts.css` — no binaries are vendored, so the compiler reports 0 `@font-face` rules. If you want self-hosted/offline fonts, drop the `.woff2` files in `assets/fonts/` and add `@font-face` rules; flag if needed.
- **Functional icon set** is a flagged Lucide substitution (see Iconography). Provide a bespoke set to replace.
- **Hero headline** (the homepage thesis sentence) is deferred per brief — the UI kit uses the locked signature line in its place.
