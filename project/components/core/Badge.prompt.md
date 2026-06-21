A small chip / tag for status or category — square-ish (2px), mono stamp by default.

```jsx
<Badge color="mint">FIELD NOTE</Badge>
<Badge tone="status" color="success" dot>Set up</Badge>
<Badge tone="status" color="error" dot>Failed</Badge>
<Badge color="coral" mono={false}>New</Badge>
```

- `tone="hue"` tints from the soft palette (mint/mist/eucalyptus/greige/coral); `tone="status"` uses functional colors with an optional leading dot.
- Error sits deeper/redder than brand coral so the two never get confused.
