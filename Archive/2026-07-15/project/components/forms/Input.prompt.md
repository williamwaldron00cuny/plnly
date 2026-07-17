A calm text field — square-ish, hairline border that warms to ink on focus. Coral is reserved for errors.

```jsx
<Input label="Email" placeholder="you@household.com" />
<Input label="Name" hint="How we should address you" />
<Input label="Email" error="That doesn't look like an email." />
```

- Label is a mono uppercase kicker above the field.
- Focus warms the border to ink (no coral focus ring); only `error` introduces color.
