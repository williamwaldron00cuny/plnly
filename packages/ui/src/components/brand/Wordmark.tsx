import React from 'react';
import styles from './Wordmark.module.css';

export type WordmarkVariant = 'stacked' | 'horizontal' | 'compact';
export type WordmarkSize = 'sm' | 'md' | 'lg' | 'hero';

export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lockup form. "stacked"/"horizontal" render the one current lockup. "compact" is the favicon-style badge for small sizes. @default "stacked" */
  variant?: WordmarkVariant;
  /** "hero" scales responsively (80px → 140px) to match logo-dark.svg at display size. @default "md" */
  size?: WordmarkSize;
  /** Render reversed for dark surfaces. @default false */
  onInk?: boolean;
  /** PL·AI·NLY — the AI-literacy sub-brand lockup. @default false */
  subBrand?: boolean;
  /** Show the "plainly" reveal + dash/dot. Drop only below min size / repeat contact — it's absolutely positioned and can overlap tight nav layouts. @default true */
  reveal?: boolean;
}

const FIXED_PX: Record<'sm' | 'md' | 'lg', number> = { sm: 24, md: 38, lg: 57 };

/**
 * The PLNLY / plainly lockup: PLNLY in Outfit Light tracked uppercase with a
 * coral dash above-left and a coral dot as the period, "plainly" set as its
 * own line above (right-aligned) so it can never collide with the dot — the
 * "ai" hidden inside "pl-ai-nly" is set in coral as the brand's own reveal.
 */
export function Wordmark({
  variant = 'stacked',
  size = 'md',
  onInk = false,
  subBrand = false,
  reveal = true,
  style,
  className,
  ...rest
}: WordmarkProps) {
  const inkColor = onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)';
  const revealColor = onInk ? 'var(--plnly-reveal-on-ink)' : 'var(--plnly-reveal-on-light)';

  const mark = subBrand ? (
    <>
      PL<span style={{ color: 'var(--plnly-coral)' }}>AI</span>NLY
    </>
  ) : (
    'PLNLY'
  );

  if (variant === 'compact') {
    const scaleMap: Record<WordmarkSize, number> = { sm: 0.62, md: 1, lg: 1.5, hero: 2.2 };
    const scale = scaleMap[size] ?? 1;
    const d = 96 * scale;
    return (
      <span
        style={{
          position: 'relative',
          width: d,
          height: d,
          borderRadius: d * 0.23,
          overflow: 'hidden',
          background: onInk ? 'var(--plnly-ink)' : 'var(--plnly-porcelain)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          ...style,
        }}
        className={className}
        {...rest}
      >
        <span
          style={{
            position: 'absolute',
            left: -d * 0.04,
            top: d * 0.39,
            width: d * 0.234,
            height: d * 0.031,
            background: 'var(--plnly-coral)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: d * 0.84,
            top: d * 0.78,
            width: d * 0.0625,
            height: d * 0.0625,
            borderRadius: '50%',
            background: 'var(--plnly-coral)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--plnly-font-display)',
            fontWeight: 'var(--plnly-weight-light)',
            fontSize: d * 0.56,
            color: onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)',
            lineHeight: 1,
          }}
        >
          P
        </span>
      </span>
    );
  }

  // "stacked"/"horizontal" — one lockup shape. Every offset below is in `em`
  // against the wrapper's own font-size, so the whole mark scales as one unit.
  const isHero = size === 'hero';
  const wmFontSize = isHero ? 'var(--plnly-wm-size)' : `${FIXED_PX[size as 'sm' | 'md' | 'lg'] ?? FIXED_PX.md}px`;

  return (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: wmFontSize,
        lineHeight: 1,
        ...style,
      }}
      className={[isHero ? styles.hero : '', className].filter(Boolean).join(' ') || undefined}
      {...rest}
    >
      {/* "plainly" — its own line, right-aligned, so it can never collide with the dot below. */}
      {reveal && (
        <span
          style={{
            alignSelf: 'flex-end',
            fontFamily: 'var(--plnly-font-serif)',
            fontStyle: 'italic',
            fontWeight: 'var(--plnly-weight-regular)',
            fontSize: '0.33em',
            color: revealColor,
            whiteSpace: 'nowrap',
            marginBottom: '0.08em',
            paddingRight: '0.05em',
          }}
        >
          pl<span style={{ color: 'var(--plnly-coral)' }}>ai</span>nly
        </span>
      )}
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'baseline' }}>
        {/* The floating dash — tucked just outside the wordmark's top-left corner */}
        <span
          aria-hidden
          style={{
            position: 'absolute',
            top: '-0.14em',
            left: '-0.14em',
            width: '0.43em',
            height: '0.057em',
            background: 'var(--plnly-coral-2)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--plnly-font-display)',
            fontWeight: 'var(--plnly-weight-light)',
            fontSize: '1em',
            letterSpacing: 'var(--plnly-wordmark-ls)',
            paddingLeft: '0.15em',
            color: inkColor,
          }}
        >
          {mark}
        </span>
        {/* The dot — the period */}
        <span
          aria-hidden
          style={{
            width: '0.1em',
            height: '0.1em',
            borderRadius: '50%',
            background: 'var(--plnly-coral-2)',
            marginLeft: '0.11em',
            flexShrink: 0,
          }}
        />
      </span>
    </span>
  );
}
