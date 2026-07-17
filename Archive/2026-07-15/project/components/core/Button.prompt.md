The action button — primary is an ink pill carrying the brand's coral dot affordance.

```jsx
<Button>Start the setup</Button>                  {/* primary, ink pill + dot */}
<Button variant="secondary">See how it works</Button>
<Button variant="ghost" dot={false}>Learn more</Button>
<Button onInk>Start the setup</Button>            {/* on a dark band */}
```

- Label copy is a verb + a noun ("Start the setup"), never "Get Started" or "Submit".
- `dot` is the trailing coral dot — keep it on the one primary CTA per view; drop competing coral elsewhere.
- `onInk` flips primary to a porcelain pill for dark sections.
