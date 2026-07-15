# CLAUDE.md — PLNLY (start here)

You are working on **PLNLY** (spoken "Plainly"), a personal-AI setup, teaching, and retainer service in Brooklyn, NY. This `PLNLY_STARTHERE` folder is the entry point for building PLNLY's website and materials. Read the files in the order below before coding or designing.

## Read in this order
1. **DESIGN.md** (this folder) — the canonical design system (the "bible"): color, type, components, layout, motion, do/don'ts. Every visual decision defers to it.
2. **PLNLY_Claude_Code_Handoff.md** — the current build brief for the site rebuild and the two new front-end elements.
3. **Copy (canonical):** `PLNLY_About_Page.md`, `PLNLY_Travel_Page.md` (and the Everything Brochure in Notion). Pull copy from these — do not re-derive.
4. **Code elements:** `PLNLY_Hero_Element.html` (dynamic-orbit hero) and `PLNLY_Services_Orbit_Element.html` (scroll-driven services orbit). Keep the mechanics; they already carry the correct copy.
5. **Background:** `Plainly (PLNLY) — Brand Project Overview.txt` and `PLNLY_Claude_Design_Opening_Prompt.md`.

## Locked decisions (do not reopen)
- Hero H1: **"We set up the AI. You run the house."** · Signature: **"Built bespoke. Yours to run."** · Descriptor: **"Personal AI systems for your home and life — set up with you, then handed over."** · Mnemonic: **"AI, plainly."**
- Type: **Outfit** is the single sans (wordmark 300; headlines 400/500; body 400/500; never bold). **Newsreader** italic = the *plainly* reveal + one elevated word per screen, in **neutral grey, never coral**. **IBM Plex Mono** for eyebrows/labels.
- Color: the **website is dark-led** (Ink 2.0 `#06080A`), Cloud/Porcelain text, **Coral 2.0 `#FF3D00`** the single accent (a subtle coral glow is a kept signature; dial back only if neon). The greige-led 70·20·8·2 ratio is for **print/light surfaces**, not the site. Full palette in DESIGN.md §2.
- CTA everywhere = **"Book a First Look"** → Cal.com (`hello@plnly.co`). No "Login" — there is no app.
- Umbrella: **WFWorks** is the parent of PLNLY, Network Planning, and Brooklyn Kin.
- Retired — never surface: "Modern life, minus the jargon."

## Where things live
- `DESIGN.md` — design bible · `PLNLY_Claude_Code_Handoff.md` — build brief
- `PLNLY_About_Page.md`, `PLNLY_Travel_Page.md` — page copy
- `PLNLY_Hero_Element.html`, `PLNLY_Services_Orbit_Element.html` — front-end elements
- `../Logos_71326/` — editable logo/mark source (dark/light logo, favicon, avatar, outlined set)
- `../exports/` — png/svg exports, brochure/card/post art, render.html, email-signature.html
- `../Photos:Videos/` — brand photography + key/keyring videos
- `../Archive/` — superseded material (older design docs, the 2026-07-13 logo redo, a prior handoff). **Do not build from Archive.**

## Source of truth & repo
- **Notion "PLNLY Brand HQ"** is the master source of truth (Foundation Brief, DESIGN.md bible, Everything Brochure, About/Travel master, the handoff). If a local file and Notion disagree, **Notion wins — flag it**.
- Live site repo: `~/Documents/GitHub/plnly` (Next.js `apps/web`, Vercel, Cal.com booking). The rebuild **revises** that repo — do not greenfield.

## How to work (behavioral)
Don't assume; surface tradeoffs; ask when genuinely unclear. Simplicity first — minimum code that solves the problem. Surgical changes — touch only what the task needs; match existing style. Define success criteria and verify before calling something done. (Full Karpathy coding guidelines archived at `../Archive/2026-07-15-cleanup/Claude-Karpathy-guidelines.md`.)
