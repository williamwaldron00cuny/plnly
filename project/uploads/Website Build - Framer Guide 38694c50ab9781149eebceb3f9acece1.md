# Website Build — Framer Guide

> A fill-in-the-fields worksheet for rebuilding the PLNLY one-page site in Framer. No code required. Budget two focused sessions: one for foundations (fonts, styles), one for layout. Pairs with the Visual Identity guidelines.
> 

**Recommended path for launch.** Framer gets you live this week and lets you self-serve every edit forever, with free hosting on your student plan.

## Step 1 · Add the fonts

All four are free Google Fonts already inside Framer — search each when setting text, no upload needed.

- **Outfit** — headlines (weights 400, 500)
- **Newsreader** — the italic word (Italic 300, 400)
- **Hanken Grotesk** — body (400, 500)
- **IBM Plex Mono** — labels (400)

## Step 2 · Create color styles

Save each as a named color style (○ style dot → +). Naming them means a later change updates everywhere.

| Name | Hex | Use |
| --- | --- | --- |
| Greige | #E3E1DA | page background |
| Porcelain | #EFEDE7 | alt section bg, cards |
| White | #FFFFFF | card fills |
| Ink | #20242B | text, dark sections |
| Porcelain Text | #E4E3DE | text on ink |
| Stone Text | #5C594F | secondary text |
| Coral | #E25E3A | the accent, the dot |
| Coral Deep | #B8492A | coral text on light |
| Mist / Mint | #9FB1BB / #C2D8CC | the two hued tiles |

## Step 3 · Create text styles

Style a text layer, then save it (+ by typography settings). LS = letter-spacing, LH = line-height.

| Style | Spec |
| --- | --- |
| Display | Outfit Medium · 72px · LH 1.05 · LS −0.02em |
| H2 Section | Outfit Medium · 38px · LH 1.12 · LS −0.015em |
| Card Title | Outfit Medium · 21px · LH 1.25 |
| Lead | Hanken Regular · 20px · LH 1.55 |
| Body | Hanken Regular · 16px · LH 1.6 |
| Eyebrow / Label | IBM Plex Mono · 11px · LS 0.24em · UPPERCASE |

**The italic word:** type a headline in the Display style, then select just the one word (e.g. *Yours*) and override it to Newsreader Italic 300 + Coral. Use once per headline.

## Step 4 · Page & section frame

- **Content width:** full-width sections with background color; inside, a centered stack capped at **1120px** with **40px** side padding.
- **Section rhythm:** 96–104px vertical padding; inner gaps in multiples of 8.
- **Multi-column rows:** horizontal Stack, 28px gap, children set to "Fill" to split evenly.
- **Corners & shadow:** cards 5–6px radius, buttons fully round; shadow Y1 blur3 black 6%.

## Step 5 · Build the page, section by section

1. **Header bar** — greige, sticky. Lockup left, nav links + pill button right.
2. **Hero** — eyebrow "Modern life, minus the jargon · Brooklyn, NY" → Display "Built bespoke. *Yours* to run." → lead → pill button + text link. Faint orbit behind.
3. **Positioning band (Ink)** — "Everyone else runs the AI and keeps the keys. We *hand them over.*"
4. **How it works** — 3 columns: Set up around you · Taught, not done-for-you · Then it's yours.
5. **Who it's for** — porcelain section, 2 greige tiles (Mist = busy households · Mint = parents of college-bound teens).
6. **PLAINLY moment (Ink)** — the PL·AI·NLY story left, orbit right.
7. **Essence + Footer** — centered "a beautiful plainness", then porcelain footer with lockup, contact, the dot.

## Step 6 · The orbit motif

- **Simplest (static):** draw 3–4 concentric circles (Ellipse, no fill, 1px faint stroke), add small coral/mint/mist dots, group, place behind hero at low opacity.
- **Optional (slow spin):** select the group → Effects → add rotate, or a free Loop/Spin component. Duration 60–90s, linear, barely-there.

## Step 7 · Responsive & publish

- **Phone/tablet:** switch breakpoints, change multi-column Stacks to vertical, shrink Display to ~44px on phone.
- **Links:** select pill → Link → scroll to footer or paste a Calendly/email link.
- **SEO & favicon:** Page settings — title "PLNLY — Modern life, minus the jargon"; favicon = coral dot with white "P.".
- **Publish:** top-right Publish → free *.[framer.website](http://framer.website)* address instantly; add [plnly.co](http://plnly.co) later in the same panel.

> **One rule above all:** when a section feels off, it's almost always too tight. Add space, *not* ornament.
>