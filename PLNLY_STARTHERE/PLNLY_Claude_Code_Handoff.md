# PLNLY — Claude Code Handoff: Site Rebuild v2 (July 2026)

**Goal.** Rebuild plnly.co (Next.js, `apps/web`, Vercel) against the locked design system and the copy decisions made July 13–15, 2026, and integrate two new front-end elements: a **dynamic-orbit hero** and a **scroll-driven services-orbit section**. This is a revision of the existing live site, not a greenfield build — reuse the current repo, routing, and Cal.com booking.

**Source of truth — read before building, in this order:**
1. **DESIGN.md — PLNLY Design System (Build Bible)** — the canonical visual system. Every rule below defers to it. (Notion: PLNLY Brand HQ → "DESIGN.md — PLNLY Design System (Build Bible)". Local: `Design.md` in outputs.)
2. **Everything Brochure — Master Content** — canonical copy for hero, packages, travel, founding offer, footer.
3. **About — Master Content** and **PLNLY Travel — Master Content** — the `/about` and `/travel` page copy.
4. **Brand HQ — Foundation Brief** — positioning, voice, WFWorks architecture.

Do not re-derive copy or colors. Pull from these. If something here conflicts with the Bible, the Bible wins — flag the conflict, don't silently resolve it.

---

## 0. Non-negotiables (from the Bible)

- **Type:** Outfit is the single sans (wordmark 300, headlines 400/500, body 400/500 — never bold/700). Newsreader italic for the *plainly* reveal and one elevated word per screen, set in **neutral grey, never coral**. IBM Plex Mono for eyebrows/labels (uppercase, ~.16em). Load via `next/font` — not the Tailwind CDN, not raw `<link>` tags.
- **Color:** Coral 2.0 `#FF3D00` is the accent + one action per view (Coral Deep `#B8492A` for coral text on light). Ink 2.0 `#06080A` for dark surfaces; Greige `#E3E1DA` leads on light content; Cloud `#F0F2F5` / Porcelain `#EFEDE7` are the light neutrals (note: `#F0F2F5` = **Cloud**, `#EFEDE7` = **Porcelain** — fix the mislabeled comments in the supplied code).
- **Motion:** arrives, never performs — 160/320/700ms, `cubic-bezier(.22,.61,.36,1)`. **Honor `prefers-reduced-motion`** (the supplied canvases do not yet — see §3).
- **Hard avoids:** no robots/circuits, no gradient-mesh, no pure `#FFF`/`#000`. The **coral glow is a kept signature** (decided July 15) on the dark hero + orbit nodes and the CTA — keep it controlled; if it reads neon in review, dial it back. No other glows elsewhere.
- **Wire everything to design tokens**, not hardcoded hex. Add the Bible palette to the Tailwind theme / CSS variables and reference tokens.

## 1. Site color architecture — LOCKED (July 15, 2026): DARK-LED

plnly.co runs **dark-led on Ink 2.0 `#06080A`** across all sections, with Cloud/Porcelain text and Greige/Porcelain used sparingly for occasional light-relief sections and cards. Coral 2.0 stays the single accent. The greige-led 70·20·8·2 ratio remains the standard for **print/light surfaces** (brochures, cards) — not the website. (Bible §2 updated to note this.)

## 2. Page structure & routes

- `/` (home): **Hero** (element 1) → **Services orbit** (element 2, reconciled copy) → **Packages** (five cards + travel pointer, greige) → **PLNLY Travel** teaser (greige) → **Founding-client offer** → **Footer** (Ink 2.0).
- `/travel`: PLNLY Travel — Master Content. Three ways in (Curated AI Travel Tools $150 standalone / +$150 add-on; Network Planning Field Guide from $39). Links out to `www.networkplanning.co`. Names the WFWorks family.
- `/about`: About — Master Content (warm, credibility-first).
- Global nav + footer name the **WFWorks** family (PLNLY · Network Planning · Brooklyn Kin).
- Booking stays on **Cal.com** (`hello@plnly.co`); every primary CTA routes there.

## 3. NEW ELEMENT 1 — Dynamic-Orbit Hero

Source: `PLNLY_Hero_Element.html` (and the merged version in `PLNLY_Services_Orbit_Element.html`, section 1).

**KEEP:**
- The canvas orbit background (faint elliptical rings, one coral traveling node, mouse parallax).
- The logo lockup: PLNLY wordmark (Outfit 300, tracked), the coral **dash** device top-left, the coral **dot** as the period, and *plainly* in **grey** Newsreader italic tucked into the negative space.
- Dark Ink 2.0 ground, Cloud text.

**CHANGE (already applied in the updated `PLNLY_Hero_Element.html` — carry through the port):**
- **Semantic `<h1>` = "We set up the AI. You run the house."** (the locked hero line). The big PLNLY wordmark is the decorative brand lockup; the H1 for SEO/screen-readers is the hero sentence. Replace the placeholder **"The living system for your household."**
- Supporting line beneath: the descriptor — **"Personal AI systems for your home and life — set up with you, then handed over."** Keep **"Built bespoke. Yours to run."** as the emphasized signature. Place the **"AI, plainly."** mnemonic near the lockup.
- **Primary CTA button = "Book a First Look"** → Cal.com (already swapped in; "Hand Over The Keys" removed). Production style per Bible: **solid coral pill, Outfit 500, sentence case**; the coral glow is kept as a signature.
- **Nav:** replace the faux **Platform · Manifesto · Login** with real items — **Services · Packages · Travel · About**, wordmark left, one coral **"Book a First Look"** CTA right. No "Login" (there's no app login).
- Keep the coral **glow** (nodes + CTA) as a signature; keep it controlled and dial back only if it reads neon.

## 4. NEW ELEMENT 2 — Services Orbit (scroll-driven)

Source: `PLNLY_Services_Orbit_Element.html`, section 2 (`#scroll-section`).

**KEEP:**
- The full mechanic: sticky viewport, scroll progress mapped to orbital rotation, three service nodes that sweep to the focal point and light up coral in sequence, the sweeping-arc highlight, the crisp white core on the active node. This is the centerpiece — it's on-brand precisely because it replaces every AI cliché with the "quiet orbit."

**CHANGE (already applied in the updated `PLNLY_Services_Orbit_Element.html` — carry through the port; maps the three nodes to the real ownership story):**

- **01 / Setup — "Set up around you."** — "We build the AI around your household as it actually is — your calendar, your family, your routines — not a one-size-fits-all install."
- **02 / Teaching — "Taught, not done for you."** — "Every session is hands-on. You and the people you live with learn the systems as we build them — real, working literacy, including responsible AI use for college-bound teens."
- **03 / Ownership — "Then it's yours."** — "No dependency, no standing arrangement required. You walk away able to run, adjust, and extend what we built — and can keep it sharp with In Residence."

Replace the placeholder **"Bespoke Frameworks / Coaching & Protocol / Ongoing Management"** and their body copy. **Eyebrows in IBM Plex Mono** (uppercase, tracked), not Outfit. Below the orbit, link to the full **Packages** and **PLNLY Travel** so the three beats don't imply only three offerings.

## 5. Technical requirements (port to production)

- **Port both elements from static HTML/Tailwind-CDN/vanilla-canvas to React/Next components.** Remove the Tailwind CDN; use the project's Tailwind config + tokens. Fonts via `next/font` (Outfit 300/400/500, Newsreader italic 400, IBM Plex Mono).
- **Canvas = client component.** `"use client"`, run the RAF loop in `useEffect`, guard all `window`/`canvas`/`devicePixelRatio` access (SSR-safe), and **cancel the animation frame + remove listeners on unmount**. Debounce `resize`; use passive scroll listeners.
- **`prefers-reduced-motion`:** when set, render the orbit as a static blueprint (rings + placed nodes, no rotation/parallax/glow), and drive the services copy by scroll position only.
- **Performance:** the services section is `300vh` sticky — verify smooth scroll on mid-range devices; throttle RAF work, avoid layout thrash. Disable mouse parallax on touch.
- **Accessibility:** canvas is decorative → `aria-hidden`. Real semantic `<h1>/<h2>`, real `<nav>` links, real `<button>`/`<a>` for the CTA. Verify text contrast ≥ AA on Ink 2.0 (bump body text off `gray-400` if it fails at small sizes — use Cloud/Porcelain or a lighter Stone). Keyboard-reachable nav + CTA.
- **Tokens:** map every hex in the supplied code to the Bible palette (fix `#F0F2F5`=Cloud vs Porcelain labels; the "Ultra Navy" comment = Ink 2.0).

## 6. Acceptance checklist (Bible + this build)

Dark-led (Ink 2.0) throughout, greige only for occasional light-relief? · Coral appears once per view, glow controlled (not neon)? · One Newsreader italic moment per screen, *plainly* in grey not coral? · Hero H1 = "We set up the AI. You run the house."; CTA = "Book a First Look" → Cal.com? · Services nodes = Setup / Teaching / Ownership with locked copy, Mono eyebrows? · Outfit everywhere, never bold; Mono eyebrows? · `prefers-reduced-motion` honored, RAF cancels on unmount, SSR-safe? · Nav real (Services/Packages/Travel/About), no Login? · WFWorks family named in footer? · Contrast ≥ AA? · Spacing on the 8px scale, corners square (pill buttons only)?

## 7. Open items to preserve (do not invent answers)

- **Curated AI Travel Tools** standalone price is `$150` **assumed** = the add-on; founding-client rate unconfirmed. Render as shown but don't fabricate a discount.
- **Coral 2.0** has no text-safe deep variant yet — use **Coral Deep `#B8492A`** for any coral text on light.
- Favicon set needs regenerating from the new `favicon-dark` mark before launch (Visual Identity §09).
- "Modern life, minus the jargon." is **retired** as a customer-facing line — do not surface it anywhere.

---
*Handoff prepared July 15, 2026. Companion artifacts: `PLNLY_Hero_Element.html`, `PLNLY_Services_Orbit_Element.html`, `Design.md` (Build Bible).*
