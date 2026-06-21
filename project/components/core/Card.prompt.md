A surface card — soft, barely-there elevation; mostly square corners (4px default).

```jsx
<Card>…</Card>                               {/* white on greige, raised */}
<Card surface="quiet" elevation="flat">…</Card>   {/* greige inset panel */}
<Card surface="ink">…</Card>                 {/* dark band card */}
<Card elevation="floating" radius="card-lg">…</Card>
```

- Elevation stays soft: `raised` for cards, `floating` for menus, `overlay` for modals. Never dramatic.
- `surface="quiet"` is the greige-on-greige inset used inside white sections.
