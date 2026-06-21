import React from 'react';

/**
 * PLNLY Eyebrow — the mono label / kicker that dates and locates the brand.
 * IBM Plex Mono, uppercase, wide tracking. Sits above headings, in footers,
 * as coordinates and fine print.
 */
export function Eyebrow({ children, onInk = false, dot = false, style, ...rest }) {
  return (
    <span
      style={{
        fontFamily: 'var(--plnly-font-mono)',
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: onInk ? 'var(--plnly-on-ink-faint)' : 'var(--plnly-text-label)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {children}
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--plnly-coral)' }} />}
    </span>
  );
}
