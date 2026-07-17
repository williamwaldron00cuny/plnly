# CODING AGENTS: READ THIS FIRST

**Start with `HANDOFF.md`** (session-by-session state) and `PLNLY_STARTHERE/CLAUDE.md` (project
index + locked decisions, points to `PLNLY_STARTHERE/DESIGN.md` — the design bible — next).

This repo originally began as a **handoff bundle from Claude Design** (claude.ai/design) — an
earlier AI design-tool session that produced HTML/CSS/JS prototypes for a coding agent to
implement. That original bundle (`chats/`, `project/`) was archived on 2026-07-15 (see
`Archive/2026-07-15/` and `HANDOFF.md`) once `PLNLY_STARTHERE/` superseded it as the canonical
source of design decisions and copy. Don't build from `Archive/`.

## What this repo is now

Next.js (`apps/web`) + a shared design-system package (`packages/ui`, `@plnly/ui`), deployed on
Vercel as `plnly-web`. Production is `plnly.co`.
