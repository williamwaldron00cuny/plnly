import React from 'react';

export type BadgeHue = 'mint' | 'mist' | 'eucalyptus' | 'greige' | 'coral';
export type BadgeStatus = 'success' | 'info' | 'caution' | 'error';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "hue" = soft palette tint; "status" = functional colors. @default "hue" */
  tone?: 'hue' | 'status';
  /** Hue name (mint/mist/eucalyptus/greige/coral) or status name (success/info/caution/error). @default "mint" */
  color?: BadgeHue | BadgeStatus | string;
  /** Leading status dot (status tone only). @default false */
  dot?: boolean;
  /** Use the mono stamp style vs. a softer body label. @default true */
  mono?: boolean;
}

const HUE: Record<BadgeHue, { bg: string; fg: string }> = {
  mint: { bg: 'rgba(194,216,204,0.45)', fg: '#3f5247' },
  mist: { bg: 'rgba(159,177,187,0.40)', fg: '#3e4f59' },
  eucalyptus: { bg: 'rgba(94,116,104,0.16)', fg: '#4a5d53' },
  greige: { bg: 'var(--plnly-greige-deep)', fg: 'var(--plnly-ink-65)' },
  coral: { bg: 'rgba(226,94,58,0.12)', fg: 'var(--plnly-coral-deep)' },
};
const STATUS: Record<BadgeStatus, { bg: string; fg: string; dot: string }> = {
  success: { bg: 'rgba(79,122,94,0.14)', fg: '#3f6a4e', dot: 'var(--plnly-success)' },
  info: { bg: 'rgba(94,126,146,0.14)', fg: '#4d6c80', dot: 'var(--plnly-info)' },
  caution: { bg: 'rgba(190,122,53,0.15)', fg: '#9c6225', dot: 'var(--plnly-caution)' },
  error: { bg: 'rgba(192,67,42,0.13)', fg: 'var(--plnly-error)', dot: 'var(--plnly-error)' },
};

/**
 * A small status chip / tag — square-ish (chip radius). Mono labels read as a stamp.
 */
export function Badge({ children, tone = 'hue', color = 'mint', dot = false, mono = true, style, ...rest }: BadgeProps) {
  const palette =
    tone === 'status' ? STATUS[color as BadgeStatus] ?? STATUS.info : HUE[color as BadgeHue] ?? HUE.mint;
  const dotColor = tone === 'status' ? (STATUS[color as BadgeStatus] ?? STATUS.info).dot : undefined;

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
        fontWeight: 500,
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
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: dotColor, flex: 'none' }} />
      )}
      {children}
    </span>
  );
}
