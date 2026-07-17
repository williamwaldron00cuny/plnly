# Website Build — Claude Code Handoff

> Everything Claude Code needs to build the real, production version of the PLNLY site — plus an honest read on what's involved. Independent of the Framer Guide. Keep this for when the site grows up (client portal, sub-brand pages, custom interactions Framer can't reach).
> 

## First — what it actually requires

Claude Code writes *all* the code; you never write or read any. You describe what you want in plain English. What it does **not** remove is the developer's *environment* around the code.

**✓ You don't need:** to write or understand code · HTML/CSS/JS knowledge · a design or engineering background · to know the "right" way to build it.

**⚠ You will deal with:** a terminal (typing commands, not a visual app) · a one-time install (Node.js + Claude Code) · deploying live (Vercel — beginner-friendly) · buying/connecting a domain · editing = re-prompting, not a visual canvas.

**Bottom line:** a motivated beginner can absolutely do this. The learning curve is the tooling, not the code. Quality ceiling is the highest of any option — pixel-perfect, no platform lock-in. The trade vs. Framer: routine edits mean opening the terminal again.

## Getting set up (one-time)

1. **Install Node.js** — [nodejs.org](http://nodejs.org), download the "LTS" version, run it.
2. **Open Terminal** — Mac: ⌘+Space, type "Terminal", Enter.
3. **Install Claude Code** — paste the install command from [claude.com/product/claude-code](http://claude.com/product/claude-code); sign in with your Claude account.
4. **Make a folder & start** — `mkdir plnly-site && cd plnly-site`, then `claude`. Paste the brief below. (Drag the PLNLY Website + Brand Guidelines HTML files into the folder first.)

## The brief — paste to Claude Code

```
# PLNLY website build

Build a production one-page marketing site for PLNLY, a personal-AI setup & teaching service. Use the two HTML files in this folder as the exact design source — match layout, type, color, and spacing faithfully.

Stack: Next.js + plain CSS (no Tailwind, no UI kit). Fully static, fast, accessible. Mobile-first responsive.

Fonts (Google): Outfit, Newsreader, Hanken Grotesk, IBM Plex Mono.

Sections, in order: sticky header w/ lockup + nav; hero (eyebrow, headline "Built bespoke. Yours to run." with "Yours" in Newsreader italic coral, lead, CTA, faint slow-rotating orbit behind); ink positioning band; 3-col how it works; 2-tile who it's for; ink PLAINLY moment w/ orbit; centered essence line; porcelain footer.

Details: respect prefers-reduced-motion (orbit holds still). Smooth-scroll nav. Semantic HTML, alt text. Use the design tokens I'll give you next.

Start by reading both HTML files and proposing a file structure. Then build section by section and show me previews.
```

## Design tokens — paste when asked

```css
:root {
  --greige:#E3E1DA; --porcelain:#EFEDE7; --white:#FFFFFF;
  --ink:#20242B; --porcelain-text:#E4E3DE; --stone-text:#5C594F;
  --coral:#E25E3A; --coral-deep:#B8492A;
  --mist:#9FB1BB; --eucalyptus:#5E7468; --mint:#C2D8CC; --harbor:#3E4F59;
  --maxw:1120px; --pad:40px; --section-y:100px; --unit:8px;
  --radius-card:6px; --radius-chip:2px;
}
/* type */
display: Outfit 500, clamp(44px,6vw,72px), LH 1.05, LS -.02em
h2: Outfit 500, 38px, LH 1.12, LS -.015em
card-title: Outfit 500, 21px
lead: Hanken 400, 20px, LH 1.55
body: Hanken 400, 16px, LH 1.6
eyebrow: IBM Plex Mono 400, 11px, LS .24em, UPPERCASE
accent-word: Newsreader italic 300, coral
```

## Going live & ongoing edits

- **Deploy with Vercel** — ask Claude Code: "deploy this to Vercel." It walks you through a free account and pushes live with a real URL. Re-deploys are one command.
- **Your domain** — [plnly.co](http://plnly.co) is already purchased (via Spaceship). Connect it in Vercel's dashboard; Claude Code can give exact DNS settings.
- **Making changes later** — reopen Terminal, `cd plnly-site`, `claude`, say what to change. It edits and re-deploys.
- **When you're stuck** — paste the error straight back to Claude Code and ask it to fix it. Debugging-by-conversation is the normal workflow.

## Honest steer

For launching this brand fast and keeping the keys yourself — **start in Framer.** Keep this package for when the site grows up. The same design system feeds both, so nothing is wasted either way.