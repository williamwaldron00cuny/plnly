import React from 'react';

/**
 * PLNLY Badge — a small status chip or tag. Two flavours:
 *  tone="hue" gives a soft desaturated tint pill (mint, mist, eucalyptus...);
 *  tone="status" maps to the functional colors (success/info/caution/error).
 * Square-ish (chip radius). Mono labels read as a stamp.
 */
const HUE = {
  mint:       { bg: 'rgba(194,216,204,0.45)', fg: '#3f5247' },
  mist:       { bg: 'rgba(159,177,187,0.40)', fg: '#3e4f59' },
  eucalyptus: { bg: 'rgba(94,116,104,0.16)',  fg: '#4a5d53' },
  greige:     { bg: 'var(--plnly-greige-deep)', fg: 'var(--plnly-ink-65)' },
  coral:      { bg: 'rgba(226,94,58,0.12)',   fg: 'var(--plnly-coral-deep)' },
};
const STATUS = {
  success: { bg: 'rgba(79,122,94,0.14)',  fg: '#3f6a4e', dot: 'var(--plnly-success)' },
  info:    { bg: 'rgba(94,126,146,0.14)', fg: '#4d6c80', dot: 'var(--plnly-info)' },
  caution: { bg: 'rgba(190,122,53,0.15)', fg: '#9c6225', dot: 'var(--plnly-caution)' },
  error:   { bg: 'rgba(192,67,42,0.13)',  fg: 'var(--plnly-error)', dot: 'var(--plnly-error)' },
};

export function Badge({
  children,
  tone = 'hue',          // 'hue' | 'status'
  color = 'mint',        // hue name OR status name depending on tone
  dot = false,           // leading status dot (status tone)
  mono = true,
  style,
  ...rest
}) {
  const palette = tone === 'status' ? STATUS[color] || STATUS.info : HUE[color] || HUE.mint;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        background: palette.bg,
        color: palette.fg,
        fontFamily: mono ? 'var(--plnly-font-mono)' : 'var(--plnly-font-body)',
        fontSize: mono ? 10.5 : 12.5,
        fontWeight: mono ? 500 : 500,
        letterSpacing: mono ? '0.12em' : '0',
        textTransform: mono ? 'uppercase' : 'none',
        padding: mono ? '5px 9px' : '4px 11px',
        borderRadius: 'var(--plnly-radius-chip)',
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {dot && tone === 'status' && (
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: palette.dot, flex: 'none' }} />
      )}
      {children}
    </span>
  );
}
