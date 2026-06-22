import React from 'react';

export type WordmarkVariant = 'stacked' | 'horizontal' | 'compact';
export type WordmarkSize = 'sm' | 'md' | 'lg';

export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lockup form. "stacked" is primary; "compact" is the P. disc for small sizes. @default "stacked" */
  variant?: WordmarkVariant;
  /** @default "md" */
  size?: WordmarkSize;
  /** Render reversed for dark surfaces. @default false */
  onInk?: boolean;
  /** PL·AI·NLY — the AI-literacy sub-brand lockup. @default false */
  subBrand?: boolean;
  /** Show the "plainly" reveal + divider. Drop only below min size / repeat contact. @default true */
  reveal?: boolean;
}

const SCALE: Record<WordmarkSize, number> = { sm: 0.62, md: 1, lg: 1.5 };

/**
 * The PLNLY / plainly lockup — the core brand mark.
 * The wordmark never appears without "plainly" beneath it on first contact.
 * Outfit Medium uppercase (.045em) over a divider, then Newsreader italic coral (.16em).
 */
export function Wordmark({
  variant = 'stacked',
  size = 'md',
  onInk = false,
  subBrand = false,
  reveal = true,
  style,
  ...rest
}: WordmarkProps) {
  const scale = SCALE[size] ?? 1;
  const inkColor = onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)';
  const dividerColor = onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)';

  const mark = subBrand ? (
    <>
      PL<span style={{ color: 'var(--plnly-coral)' }}>AI</span>NLY
    </>
  ) : (
    'PLNLY'
  );

  const wordmarkEl = (markSize: number) => (
    <span
      style={{
        fontFamily: 'var(--plnly-font-display)',
        fontWeight: 'var(--plnly-weight-medium)',
        fontSize: markSize,
        letterSpacing: 'var(--plnly-wordmark-ls)',
        paddingLeft: '0.045em',
        color: inkColor,
        lineHeight: 1,
        display: 'block',
      }}
    >
      {mark}
    </span>
  );

  const revealEl = (revealSize: number, ls: string = 'var(--plnly-reveal-ls)') => (
    <span
      style={{
        fontFamily: 'var(--plnly-font-serif)',
        fontStyle: 'italic',
        fontWeight: 'var(--plnly-weight-regular)',
        fontSize: revealSize,
        letterSpacing: ls,
        paddingLeft: ls === 'none' ? 0 : '0.16em',
        color: 'var(--plnly-coral)',
        lineHeight: 1,
      }}
    >
      plainly
    </span>
  );

  if (variant === 'compact') {
    const d = 96 * scale;
    return (
      <span
        style={{
          width: d,
          height: d,
          borderRadius: '50%',
          background: onInk ? 'var(--plnly-coral)' : 'var(--plnly-ink)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
        {...rest}
      >
        <span
          style={{
            fontFamily: 'var(--plnly-font-display)',
            fontWeight: 500,
            fontSize: d * 0.48,
            color: onInk ? 'var(--plnly-cream)' : 'var(--plnly-porcelain)',
          }}
        >
          P<span style={{ color: onInk ? 'var(--plnly-ink)' : 'var(--plnly-coral)' }}>.</span>
        </span>
      </span>
    );
  }

  if (variant === 'horizontal') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16 * scale, ...style }} {...rest}>
        {wordmarkEl(38 * scale)}
        {reveal && (
          <>
            <span style={{ width: 1, height: 34 * scale, background: dividerColor, opacity: 0.35 }} />
            {revealEl(22 * scale, 'none')}
          </>
        )}
      </span>
    );
  }

  return (
    <span
      style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', ...style }}
      {...rest}
    >
      {wordmarkEl(58 * scale)}
      {reveal && (
        <>
          <span style={{ width: 30 * scale, height: 1, background: dividerColor, opacity: 0.45, margin: `${9 * scale}px 0` }} />
          {revealEl(19 * scale)}
        </>
      )}
    </span>
  );
}
