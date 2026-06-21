The quiet orbit — the brand's signature motif; use it instead of any AI cliché (no circuits, no robots, no neural lines).

```jsx
<Orbit tone="ink" size={240} />              {/* on a dark surface / avatar */}
<Orbit tone="faint" size={380} spin />       {/* large, faint page backdrop */}
<Orbit tone="ink" spin duration={60} />      {/* slow rotation — hour-hand pace */}
```

- `tone="faint"` is for a large, low-contrast backdrop behind copy on greige; `tone="ink"` is for dark surfaces.
- When it spins it should take ~48–90s per turn — meditative, never a busy spinner. Honors `prefers-reduced-motion`.
- Use large & faint as a backdrop, small as a section marker, or on ink as the social avatar.
