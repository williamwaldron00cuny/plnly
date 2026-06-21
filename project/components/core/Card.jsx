import React from 'react';

/**
 * PLNLY Card — a surface. White on greige by default; soft, low elevation;
 * mostly-square corners. "Quiet" is the greige inset variant; "ink" is the
 * dark band card.
 */
export function Card({
  children,
  surface = 'white',     // 'white' | 'quiet' | 'porcelain' | 'ink'
  elevation = 'raised',  // 'flat' | 'raised' | 'floating' | 'overlay'
  radius = 'card',       // 'card' | 'card-lg' | 'tile'
  padding = 32,
  style,
  ...rest
}) {
  const surfaces = {
    white:     { background: 'var(--plnly-surface)', color: 'var(--plnly-ink)' },
    quiet:     { background: 'var(--plnly-greige)', color: 'var(--plnly-ink)' },
    porcelain: { background: 'var(--plnly-porcelain)', color: 'var(--plnly-ink)' },
    ink:       { background: 'var(--plnly-surface-ink)', color: 'var(--plnly-on-ink)' },
  };
  const shadows = {
    flat: 'none',
    raised: 'var(--plnly-shadow-raised)',
    floating: 'var(--plnly-shadow-floating)',
    overlay: 'var(--plnly-shadow-overlay)',
  };
  const radii = {
    card: 'var(--plnly-radius-card)',
    'card-lg': 'var(--plnly-radius-card-lg)',
    tile: 'var(--plnly-radius-tile)',
  };

  return (
    <div
      style={{
        ...surfaces[surface],
        boxShadow: shadows[elevation],
        borderRadius: radii[radius],
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
