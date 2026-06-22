import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** On a dark surface. @default false */
  onInk?: boolean;
  /** Trailing coral dot. @default false */
  dot?: boolean;
}

/**
 * The mono label / kicker that dates and locates the brand. IBM Plex Mono,
 * uppercase, wide tracking. Sits above headings, in footers, as fine print.
 */
export function Eyebrow({ children, onInk = false, dot = false, style, ...rest }: EyebrowProps) {
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
