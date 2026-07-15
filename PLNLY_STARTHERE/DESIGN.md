# DESIGN.md

> Project design system reference for AI coding agents.
> Place this file in your project root, alongside CLAUDE.md / .cursorrules.

## 1. Visual Theme & Atmosphere

<!-- 1-2 sentences describing the overall feel/personality of the design.-->
<!--	 Example pattern: "[adjective], [adjective]. [adjective], [adjective]." -->

- Overall feel: Greige-grounded and quietly high-end — a beautiful plainness. High-contrast minimalism, brutalist restraint, sophisticated asymmetry. Calm and considered, warm yet architectural & decidedly unsoft, competent without announcing it. Aesop-level restraint meets Park Hyatt warmth; the confident thing left unsaid.
- Personality keywords: warm but not eager · a little mysterious · competent, never patronizing · quietly high-end · above the fray · restraint as the volume knob.
- What this design should NOT feel like: tech-bro SaaS (blue-and-white), startup-generic, gradient-mesh, AI-cliché (robots / circuits / neon), or white airy-minimalism. Calm, not sparse; confident, not loud; never customer-service cheer. Cluttered or patronizing.

## 2. Color Palette & Roles

<!-- Don't just list hex codes — assign each color a semantic ROLE and-->
<!--	 usage rule so the agent knows when (and when not) to use it. -->

| Role                 | Color / Hex                                                                                                                                                                                  | Usage                                                                     | Never use for                                                          | Exceptions                                                                                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary              | Electric Coral 2.0 `#FF3D00` (coral text on light → Coral Deep `#B8492A`)                                                                                                                    | Primary actions, links — one coral action per view; the dash + dot device | Body copy, backgrounds, or more than one element competing on a screen | Creations deliberately made to be eye-catching and attention-grabbing in order to compete  (i.e. print promotional material or flyers) . Suspend restraint and use the coral color generously when needed to get attention. |
| Accent               | Supporting hues: Mist Blue `#9FB1BB` · Harbor `#3E4F59` · Eucalyptus `#5E7468` · Mint `#C2D8CC`                                                                                              | Quiet section tints, the orbit's satellites, illustration/data            | Primary CTAs (coral owns those); loud, saturated fills                 | Using the same principle in the exception for the coral primary color, suspend restraint and use the Mint green in applications that require competing and grabbing users attention.                                        |
| Success              | `#4F7A5E`                                                                                                                                                                                    | Confirmations, positive states                                            | Decorative accent or general "on-brand green"                          |                                                                                                                                                                                                                             |
| Error/Danger         | `#C0432A`                                                                                                                                                                                    | Errors, destructive actions, form validation                              | General accent — sits near coral, so keep it strictly functional       |                                                                                                                                                                                                                             |
| Warning              | Caution `#BE7A35`                                                                                                                                                                            | Cautions, non-blocking warnings                                           | Body copy or large fills                                               |                                                                                                                                                                                                                             |
| Neutral scale (text) | Ink `#20242B` (primary) · Stone `#8A8A85` (secondary); on dark ground use Cloud `#F0F2F5` / Porcelain `#EFEDE7`                                                                              | All text and iconography                                                  | Pure black `#000`; low-contrast greige-on-greige                       |                                                                                                                                                                                                                             |
| Surface / Background | Greige (ground) `#E3E1DA` (leads, ~70%) · Porcelain `#EFEDE7` (raised surfaces / cards) · Cloud `#F0F2F5` (lightest, sparing) · Ink 2.0 `#06080A` (dark sections / footer, matches new logo) | Page grounds and surface layers                                           | Pure white `#FFF`; cold blue-gray SaaS ground                          |                                                                                                                                                                                                                             |
| Border               | Greige Deep `#D2CFC6` (hairline on light); low-opacity Stone on dark                                                                                                                         | Card / input / divider hairlines                                          | Heavy or black borders; blue-gray                                      |                                                                                                                                                                                                                             |
| Shadow tint          | Warm ink/greige-tinted, very low opacity — `0 1px 3px rgba(32,36,43,.06)`                                                                                                                    | Soft, low elevation only                                                  | Neutral gray shadows; dramatic drop shadows                            |                                                                                                                                                                                                                             |

<!-- Balance ratio 70 · 20 · 8 · 2 = greige · ink · supporting hue · coral. Two neutral systems currently coexist by surface (Ink 2.0/Cloud for the new logo + dark sections; Ink/Porcelain for legacy UI). Web/digital surface is DARK-LED (Ink 2.0) as of July 15, 2026 — plnly.co leads on Ink 2.0 with Cloud/Porcelain text, greige/Porcelain used sparingly for light-relief; the 70·20·8·2 greige-led ratio remains the standard for print/light surfaces. Coral 2.0 for accent, Coral Deep for coral text; a subtle coral glow is an allowed signature on the dark hero/orbit and CTA (pull back only if it reads neon). A text-safe "deep" variant of Coral 2.0 is still pending (Visual Identity §09). -->

## 3. Typography Rules

<!-- Define the full type hierarchy, not just a font name.-->

- Font family (display/headline): **Outfit** — headlines and the wordmark. Weights 400/500 for display text; the wordmark itself is Light (300), uppercase, tracking ~.1em. Never bold.
- Font family (body): **Outfit** — body and interface workhorse. 16px / 1.6 line-height, measure 45–75 characters.
- Font family (editorial/accent): Newsreader (serif, always italicized, e.g., "plainly")
- Font family (mono, if any): **IBM Plex Mono** — eyebrows, labels, data. Uppercase, wide tracking (~.16em). Plus **Newsreader Italic** (300/400) for the one elevated word / the *plainly* reveal — never a full sentence.
- Size scale (largest → smallest, e.g. Display Hero → Nano): Display 60 · H1 44 · H2 32 · H3 24 · Lead 19 · Body 16 · Small 14 · Caption 12 (Mono, .16em caps).
- Weight rules (e.g. "headlines use weight X, never weight Y"): Headlines Outfit 400/500, wordmark Outfit 300, never bold/700. Body Outfit 400/500. Newsreader italic 300/400 only. Mono for caps labels only.
- Line-height / letter-spacing conventions: Body 1.6, measure 45–75ch. Headlines tight (~1.05–1.15). Wordmark ~.1em tracking; Mono caps ~.16em. One Newsreader italic moment per screen — two is one too many; never set a full sentence in italic.

## 4. Component Stylings

<!-- Vocabulary of UI parts and their states.-->

- Buttons: **Primary** — Coral 2.0 `#FF3D00` (or Ink) fill, pill radius, Outfit 500, sentence-case label; hover darken toward Coral Deep `#B8492A` (160ms); active nudges 1px, no bounce; disabled Stone on Greige Deep, no coral; loading uses the quiet-orbit spinner. One primary (coral) per view. **Secondary** — Ink outline / ghost on greige, no fill; hover fills Greige Deep. **Ghost** — text with coral underline on hover; tertiary only.
- Cards: radius 4–6 (tiles 12); 1px Greige Deep `#D2CFC6` border; Porcelain `#EFEDE7` surface on Greige ground; soft raised shadow (`0 1px 3px rgba(32,36,43,.06)`); generous internal padding (24–32). Mostly square — prefer borders over shadows.
- Inputs: 1px Greige Deep border, 4–6 radius; focus = 2px coral `#FF3D00` (or Harbor) ring; error = Error `#C0432A` border + helper text; label in Mono caps Small.
- Badges / tags: chip radius 2; Mono uppercase Caption (.16em); Stone or a muted supporting-hue tint background; coral only when it genuinely means something.
- Navigation patterns: minimal top bar — wordmark lockup left, sparse links (Outfit/Hanken), a single coral CTA ("Book a First Look") right; the quiet orbit as a faint backdrop; mobile collapses to an unhurried menu. Never a crowded nav. (Nav links set in Outfit.)

## 5. Layout Principles

- Base spacing unit (e.g. 8px): 8px (with 4px as a half-step). Everything snaps to it, but asymmetrical placement is encouraged to create space, visual distinction, and to subtly work to bring the eyes to certain elements. Grid structure to keep organized, but asymmetry to keep it interesting. 
- Spacing scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Use 4–32 inside components, 48–64 between blocks, 96–128 between sections.
- Max content width: 1080–1120px, auto side margins.
- Grid structure / columns: 12 columns, 24px gutter; responsive 4 → 8 → 12.
- Border-radius scale: 2 (chips) · 4–6 (cards) · 12 (tiles) · pill (buttons). Mostly square.
- Whitespace philosophy: greige-led and generous — negative space is the luxury cue. Calm, never sparse; let the single coral accent breathe. Restraint is the volume knob. Any element worth seeing should therefore demand generous space surrounding it. Elements, whether simple text or images or boxes, should never situated too close to one another. 

## 6. Depth & Elevation

<!-- Define a shadow system — how many levels, what tint.-->

- Elevation levels (e.g. Flat → Deep): Flat (borders only) → Raised (`0 1px 3px`, ~6%) → Floating (menus/popovers) → Overlay (modals/scrims). Soft and low throughout — never dramatic.
- Shadow color tint (e.g. "blue-gray tinted, never neutral gray"): warm ink/greige-tinted (`rgba(32,36,43,.06)`), never neutral gray, never blue.
- When to use elevation vs. borders: default to a Greige Deep hairline border on greige surfaces; reserve shadow for things that genuinely float (menus, modals, a lifted card on hover). If a border reads clearly, don't add a shadow.

## 7. Do's and Don'ts

<!-- The anti-hallucination layer. Be explicit — agents default to-->
<!--	 "safe" generic choices unless told otherwise. -->

**Do:**
- Lead with greige and hold the 70·20·8·2 balance (greige · ink · supporting hue · coral); reserve Coral 2.0 `#FF3D00` for the dash+dot device and one action per view, Coral Deep `#B8492A` for coral text.
- Use Outfit as the single sans across wordmark, headlines, and body, with exactly one Newsreader italic moment per screen and IBM Plex Mono for eyebrows/labels.
- Use the quiet orbit (concentric hairline rings, coral center, mint/mist satellites) as the only "AI" visual — large & faint as a backdrop, small as a section marker.
- Keep copy sentence-case with periods, never exclamation: hero "We set up the AI. You run the house.", signature "Built bespoke. Yours to run.", mnemonic "AI, plainly."
- Snap all spacing to the 8px scale; keep corners mostly square (pill only for buttons); motion arrives, never performs (160/320/700ms, `cubic-bezier(.22,.61,.36,1)`, honor prefers-reduced-motion).

**Don't:**
- No pure white `#FFF` or pure black `#000`; no cold blue-gray SaaS ground; no gradient-mesh backgrounds. No yellows, no golds, and no creams. 
- No robots, circuits, neon, stock "tech," or cold blue gradients — the orbit replaces every AI cliché.
- Never recolor or stretch the wordmark, never set *plainly* in coral (the reveal is neutral grey), never split PLNLY from *plainly* at first contact, never set Outfit bold or a full sentence in Newsreader italic.
- No dramatic shadows, no second coral element competing on a screen, no customer-service cheer ("Don't worry — it's so easy!"); don't chase startup-generic or airy white minimalism — calm, not sparse.

## 8. Responsive Behavior

- Breakpoints (pixel ranges): Mobile \< 640 · Tablet 640–1024 · Desktop 1024–1280 · Wide \> 1280.
- Collapsing strategy per component (nav, cards, tables, etc.): grid 12 → 8 → 4; nav collapses to a quiet menu; cards stack to single column; tables reflow to stacked label/value rows; the orbit backdrop scales down and fades rather than crops.
- Touch-target sizing adjustments for mobile: minimum 44×44px hit area; increase button and nav padding; keep one primary coral action visible.
- Typography scaling rules across breakpoints: Display 60 → ~40, H1 44 → 32, H2 32 → 26, Lead 19 → 18; body stays 16; measure holds at 45–75ch; tracking unchanged.

## 9. Agent Prompt Guide

<!-- Quick-reference cheat sheet the agent can pull into working memory.-->

- Quick color reference (hex codes): Greige ground `#E3E1DA` · Porcelain `#EFEDE7` · Greige Deep `#D2CFC6` · Cloud `#F0F2F5` · Stone `#8A8A85` · Ink `#20242B` · Ink 2.0 `#06080A` · Coral 2.0 `#FF3D00` · Coral Deep `#B8492A` · Mist Blue `#9FB1BB` · Harbor `#3E4F59` · Eucalyptus `#5E7468` · Mint `#C2D8CC` · Success `#4F7A5E` · Info `#5E7E92` · Caution `#BE7A35` · Error `#C0432A`.
- Ready-to-use component prompt snippets:
  - Hero: "Greige `#E3E1DA` ground, faint quiet-orbit backdrop; PLNLY wordmark lockup (Outfit Light + Newsreader-italic *plainly* reveal, coral dash + dot); H1 'We set up the AI. You run the house.' in Outfit 500, 44–60px, Ink; descriptor line beneath in Outfit; one coral `#FF3D00` pill, 'Book a First Look'."
  - Package card: "Porcelain `#EFEDE7` card on greige, 1px Greige Deep border, radius 6, padding 32; Mono eyebrow, Outfit H3 title, Outfit body, price line; ghost link 'Learn more', coral underline on hover."
  - Footer: "Ink 2.0 `#06080A` section, Cloud text; WFWorks family line (PLNLY · Network Planning · Brooklyn Kin); orbit avatar mark; signature 'Built bespoke. Yours to run.' · 'AI, plainly.'"
- Iteration checklist before shipping a new page/component: greige leads and coral appears once? · one Newsreader italic moment only? · spacing on the 8px scale, corners square (pill buttons only)? · orbit instead of AI clichés? · copy sentence-case with periods, no exclamation? · text contrast ≥ AA (no greige-on-greige)? · motion 160/320/700ms and reduced-motion honored? · wordmark intact?
