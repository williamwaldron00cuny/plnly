# HANDOFF.md — PLNLY (plnly.co)

Read this first if you're picking this project up cold. Then read `PLNLY_STARTHERE/CLAUDE.md`
(project index + locked decisions) and `PLNLY_STARTHERE/DESIGN.md` (the design bible) before
touching code or design.

## What this project is

`plnly.co` — Next.js (`apps/web`) monorepo, deployed on Vercel (project `plnly-web`), Cal.com
booking. `packages/ui` is the shared design-system package (`@plnly/ui`).

## State as of 2026-07-16 — photography/video integration, redesign-audit fixes, CI diagnosis

Seven PRs shipped this session (#14–#20), all squash-merged to `main`, all live on plnly.co via
Vercel's auto-deploy. Full detail below; short version: the site went from almost no real
photography to a deliberately mixed-tone photo/video program across the homepage, About, and
Travel pages, plus a general redesign-audit pass (SEO, a11y, mobile nav) and a couple of real
layout bugs fixed mid-flight from user feedback.

**PR #14 — shipped work that was sitting uncommitted since the 2026-07-15 evening session.**
Two things had been fully built in that earlier session but never made it into a PR before it
ended: `PackagesRecap` (the plain side-by-side list of all five packages) and an orbit
horizon-glow polish pass on `OrbitCanvas.tsx`. Verified against `origin/main` that neither existed
there before shipping. Bundled with a redesign-audit pass: branded `opengraph-image.tsx` (the site
had zero social-share image before this), `robots.ts`/`sitemap.ts`, a real mobile nav menu
(`Header.tsx` — nav links previously just `display: none`'d under 760px with nothing replacing
them), active-page highlighting (`aria-current`), a skip-to-content link, `100vh` → `100dvh` on
the two scroll-pinned sections (iOS Safari address-bar jump fix), a branded `not-found.tsx`, and a
stale pre-rebrand coral hex (`#E25E3A`) fixed to Coral 2.0 in the shared `Orbit`/`Icon` components
in `packages/ui`.

**PR #15 — first real photography/video on the site.** New homepage section `CityStrip.tsx`
between `PackagesRecap` and `TravelTeaser`. The user supplied a folder of licensed stock media
(`~/Documents/Licensed Media` — AdobeStock photos/videos, plus some 3D-render assets for a
different WFWorks brand, not used here). Cataloged all of it, initially proposed a
wholesome-household-only selection and explicitly excluded grittier urban shots (graffiti subway
train, a pop-art loft video) as off-tone.

**User pushback, important and worth preserving verbatim in spirit:** the user corrected this —
PLNLY's audience is "in the know," urban-savvy, and the brand should read as fluent in both the
wholesome and the gritty sides of the same neighborhood, not sanitized into just one. Both videos
went back in, mixed in with the wholesome shots rather than segregated into their own section.
**This is now the working photography direction for this project — don't default back to
"wholesome lifestyle only" when curating future imagery.**

**PRs #16–#20 — iteration on that first pass, all from direct user feedback after seeing it
live:**
- #16: photography added to Travel (suitcase/packing photo in a new two-column hero, full-bleed
  "clouds from above" video breather between the two card sections) and About (Brooklyn Bridge
  video, dimmed + scrimmed, behind the "I'm Billy." hero).
- #17: homepage `TravelTeaser`'s empty second grid column got the Brooklyn Promenade photo
  (reused an asset already sitting unused in `public/photos`, no new file).
- #18–#19: three rounds of direct feedback on `CityStrip` — (a) the pop-art loft video needed to
  be more prominent, (b) the family-breakfast photo looked blurry on the live page, (c) the
  "the G train got tagged again this week" copy line didn't read well. Root-caused the "blurry"
  photo: it wasn't a bad file (confirmed sharp at full resolution) — a wide 4-person composition
  was being forced into a narrow portrait tile via `object-fit: cover`, so the crop was zooming
  into an awkward, ugly sliver of it. Swapped to `family-busy-kitchen.jpg` (a vertically-composed
  shot that survives a portrait crop) instead of just resizing the same crop. Copy landed on
  "Same neighborhood, same block, a dozen different homes. PLNLY works in all of them." after two
  rounds — the user specifically doesn't want the word "look" in this line if it comes up again.
- #20 — two more fixes: **(a)** `CityStrip`'s horizontal-scroll-row layout was genuinely broken,
  not just a style nitpick — tiles cut off mid-image with no visual cue there was more to scroll
  to, and left dead empty space below on wide screens. Rebuilt as a CSS-columns masonry (flows in
  normal vertical scroll, no horizontal scroll at all) with the pop-art loft pulled out as its own
  featured full-width video above the masonry instead of fighting the row's fixed widths. **(b)**
  Added the Brooklyn Bridge/Manhattan video (same asset as About) as a dimmed background behind
  `FoundingOffer` ("Early days, on purpose" + the booking calendar) — the user specifically
  remembered a looping under-the-bridge video from the old site and wanted it back somewhere. Not
  yet independently visually confirmed live by the user as of this handoff — worth checking the
  masonry's column balance and whether the founding-offer video reads as too subtle.

**CI/GitHub Actions diagnosis (not fixed — needs the user's own credentials).** The user was
getting repeated "Claude Code Review workflow failed" emails. Diagnosed via `gh run view --log`:
`.github/workflows/claude-code-review.yml` calls `anthropics/claude-code-action@v1` using a repo
secret `CLAUDE_CODE_OAUTH_TOKEN` (last updated 2026-06-23). Every failed run fails in under 2
seconds with `is_error: true` and `total_cost_usd: 0` — an instant auth failure, not a content or
code problem. Confirmed via `gh run list` that it ran successfully through 2026-06-29, then failed
on every single PR from 2026-07-15 onward (8 in a row as of this session) — the token expired
sometime in that window. **Not blocking** — these aren't required status checks, every PR this
session still merged fine. Fix needs the user to run `claude setup-token` locally (their own
Claude account) and update the secret themselves (`gh secret set CLAUDE_CODE_OAUTH_TOKEN` or via
GitHub UI) — deliberately not done by this session since entering tokens/credentials isn't
something to do even when handed the value. User said they'd get to it later, low urgency.

## What's still open

- **CI OAuth token** — needs the user to run `claude setup-token` + update the
  `CLAUDE_CODE_OAUTH_TOKEN` repo secret. Not blocking anything, just not delivering automated PR
  reviews.
- **PR #20's changes not yet visually confirmed live** — the CityStrip masonry rebalance and the
  FoundingOffer background video specifically.
- **The pre-existing `Archive/2026-07-15/` staged rename is STILL staged but uncommitted** — this
  is now three sessions old. 89 renamed files (`project/` → `Archive/2026-07-15/project/`,
  `chats/chat1.md` → `Archive/2026-07-15/chats/chat1.md`) plus `README.md`'s edit, all sitting in
  the git index untouched since 2026-07-15. Also 6 untracked duplicate files still sitting at
  `Archive/2026-07-15/` (not yet git-added): `CLAUDE 2.md`, `DESIGN 2.md`,
  `PLNLY_Hero_Element 2.html`, `PLNLY_Travel_Page 2.md`,
  `Plainly (PLNLY) — Brand Project Overview 2.txt`, `bk-lifestyle-poster 2.jpg`. Nobody has said
  yes or no to committing this — every session since has deliberately left it exactly as-is via
  pathspec-scoped commits rather than accidentally sweeping it in. If a future session keeps
  finding this staged-not-committed, that's not a bug — it's genuinely still an open decision.
- **Stale local git branches**, unchanged for three sessions, all predate any work in this
  handoff and are already superseded by merged PRs: `feat/ux-refresh-orbit-nav`,
  `feature/depth-and-interaction`, `feature/engagement-pass`, `feature/photography`,
  `fix/marquee-colors-video`, `fix/marquee-video-orbit`,
  `vercel/install-and-configure-vercel-w-xfckiz`. Pruning was never asked for.
- **A corrupted git ref found this session, not touched:** `.git/refs/heads/main 2` — a literal
  file with a space in its name inside `.git/refs/heads/`, almost certainly a filesystem
  duplicate-file artifact (same phenomenon as the " 2" files in `Archive/2026-07-15/`). Git
  already ignores it safely (prints "ignoring ref with broken name" on every command but it has
  zero functional effect — not a real branch, doesn't show in `git branch`, doesn't affect
  anything). Points at an old snapshot of `main` from mid-session, fully reachable elsewhere in
  history, so nothing unique would be lost if removed — but this session didn't touch `.git/`
  internals without being asked. A one-line fix if the user wants it gone:
  `rm ".git/refs/heads/main 2"`.
- **Favicon provenance** (carried forward from the 2026-07-15 handoff, still unresolved) —
  `apps/web/src/app/icon.svg` was already mid-redesign before PR #12 from work that predates any
  session in this file; carried through at the user's OK but never confirmed against the actual
  `Logos_71326/favicon-dark` source asset.
- **Known-excluded imagery** (carried forward, still applies): `public/photos/smart-home-kitchen.jpg`
  and `loft-workspace.jpg` read as visibly AI-generated — don't use them. From the separate
  `~/Documents/Licensed Media` folder (this session's source), a 3D business-jet model + HDRI
  helipad environment and an `.ai` vector file are render assets for a different WFWorks brand's
  use, not photography for plnly.co — left alone.
- **Photography direction going forward**: keep mixing wholesome and grittier/urban shots per the
  user's explicit correction this session (see PR #15 above) — this is now the established brand
  photography voice for PLNLY, not a one-off exception.

## Git state

`main` is up to date with `origin/main` (currently at `db77010`, PR #20). No uncommitted changes
from this session's actual work — everything shipped via pathspec-scoped commits (only the
intended files staged per PR, every time, specifically to avoid accidentally sweeping in the
still-pending `Archive/2026-07-15/` rename below). That rename is the **only** thing sitting
uncommitted in the working tree, and it predates this session by two sessions — see "What's still
open" above.

## Earlier 2026-07-15 session — PR #12 / #13, full dark-led rebuild

Two PRs shipped to production that session, both merged to `main` and live on plnly.co:

**PR #12 — full dark-led rebuild.** Rebuilt the homepage against the locked design system
(Ink 2.0 dark-led, Coral 2.0 single accent, Outfit-only sans): new Hero (canvas orbit backdrop,
real `<h1>`), a scroll-driven orbit section, five Package cards with real pricing pulled from
Notion's "Everything Brochure" (not in the local docs — fetched directly), new `/travel` and
`/about` routes, Cal.com popup wired to every CTA, retired "Modern life, minus the jargon."
everywhere. Removed the homepage sections superseded by the new structure (Marquee,
PositioningBand, Capabilities, WhoFor, BrooklynBand, LifestyleBand, PlainlyAI, old FoundingNote,
Essence, FAQ, BookingModal).

**PR #13 — first design-feedback pass.** Fixed the wordmark (was overlapping the "plainly"
reveal with the dot at some sizes — rebuilt as a safe two-line stack, colored the hidden "ai" in
"pl-ai-nly" coral). Fixed a real bug where the orbit canvas (`position: fixed`) kept rendering
its last frame over every section below the fold once scrolled past — now `position: sticky`,
scoped to a wrapper around just Hero + the packages section. Replaced the abstract 3-node
"Services" orbit + the flat Packages card grid with one 5-node scroll-driven orbit
(`PackagesOrbit.tsx`) — one node per package, no cards, asymmetrical per-panel layout. Reframed
the travel section around "Network Planning" (the user's sister brand) instead of "PLNLY
Travel." Replaced the footer's brownstone photo with a coral "sunrise over the horizon" orbit
motif + the real WFWorks wordmark. Changed the CTA copy from "Book a First Look" (which was also
literally the name of a $245 package) to "Book your intro call."

Both merged via `gh pr merge --squash --delete-branch`. **Known gremlin:** the first merge (#12)
hit a repeatable `mmap failed: Operation canceled` error during git's local checkout step — not a
sandbox issue (recurred with sandbox disabled), local-only (never touched GitHub/Vercel), and
recovered by checking out files individually rather than in bulk (bulk `git checkout`/`reset
--hard` fails partway; single-file `git checkout <ref> -- <path>` works). The second merge (#13)
went through cleanly with no repeat. If this happens again: don't keep retrying the same bulk
command — `git diff --name-only -z <a> <b>` piped into a per-file `git checkout` loop is the
known workaround.

**Design-process note — don't apply generic `taste-skill`-style checklists to PLNLY.** Early in
the 2026-07-15 evening session, a generic anti-slop design audit was run against the homepage.
The user explicitly rejected it as the wrong lens for this project: PLNLY has its own locked
design system (`PLNLY_STARTHERE/DESIGN.md`) that should be the standard, not a generic third-party
checklist. Don't re-run generic design-checklist skills against PLNLY unless asked directly.

## Archived 2026-07-15 (still staged, not committed — see "What's still open" above)

Moved into `Archive/2026-07-15/` (nothing deleted; **still staged but not committed**):

- **`project/`** (6.2M, git-tracked) — an older "Claude Design" (claude.ai/design) project
  scaffold: HTML prototypes, a `_ds_bundle.js`/`_ds_manifest.json` compiled design-system bundle,
  `SKILL.md`, `ui_kits/`, brand PDFs under `uploads/`. Last touched Jun 23, 2026 — superseded by
  `PLNLY_STARTHERE/` (Jul 15) per `PLNLY_STARTHERE/CLAUDE.md`. Not referenced by `apps/web`, not
  in the npm workspace. Large and contains PDFs/brand docs that aren't trivially regenerable —
  worth a skim before anyone considers it fully dead.
- **`chats/chat1.md`** — a raw transcript export from that same earlier Claude Design session.
  Reference-only.
- **Six duplicate files** (macOS "keep both" artifacts from a prior file-copy collision, confirmed
  byte-identical to already-committed originals before moving, not deleted, not yet even
  `git add`-ed): `CLAUDE 2.md`, `DESIGN 2.md`, `PLNLY_Hero_Element 2.html`,
  `PLNLY_Travel_Page 2.md`, `Plainly (PLNLY) — Brand Project Overview 2.txt`,
  `apps/web/public/photos/bk-lifestyle-poster 2.jpg`.

`README.md` was updated in the same pass to point coding agents at `HANDOFF.md` and
`PLNLY_STARTHERE/` instead of the now-archived `chats/`/`project/` bundle.
