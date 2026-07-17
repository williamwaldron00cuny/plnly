Abstract icon mark — geometric, built from the dot / ring / line, not literal pictures. 24px grid, 1.75px stroke, round caps.

```jsx
<Icon name="focus" size={38} />        {/* ring with a coral center */}
<Icon name="handover" coral />         {/* the arrow tip goes coral */}
<Icon name="orbit" size={22} />        {/* the brand motif as a small glyph */}
```

Names: `ring` (a cycle), `focus` (set up/dialed in), `time` (schedule), `plan` (a list), `handover` (yours to run →), `add`, `place` (the household), `orbit` (the motif). Coral appears in at most one element of an icon, only when it means something. For dense functional UI, fall back to a thin-line library (e.g. Lucide via CDN) set to a 1.75px stroke and ink color.
