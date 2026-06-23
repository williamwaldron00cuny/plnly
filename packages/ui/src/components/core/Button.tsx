import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** "primary" is the ink pill; "secondary" is outlined; "ghost" is an underlined link. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Trailing coral dot affordance. @default true */
  dot?: boolean;
  /** Render for a dark surface. @default false */
  onInk?: boolean;
}

/**
 * The primary action — an ink pill with the coral dot. Copy is a verb + a noun
 * ("Start the setup"), never "Submit". One coral thing per view.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  dot = true,
  onInk = false,
  disabled = false,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: ButtonProps) {
  const [hovered, setHovered] = React.useState(false);
  const pad = { sm: '9px 16px', md: '12px 22px', lg: '15px 28px' }[size];
  const fontSize = { sm: 13, md: 14, lg: 15 }[size];
  const dotSize = { sm: 6, md: 7, lg: 7 }[size];

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 9,
    fontFamily: 'var(--plnly-font-body)',
    fontWeight: 'var(--plnly-weight-medium)',
    fontSize,
    lineHeight: 1,
    padding: pad,
    borderRadius: 'var(--plnly-radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transform: hovered && !disabled ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: hovered && !disabled && variant === 'primary' ? 'var(--plnly-shadow-accent)' : 'none',
    transition:
      'background var(--plnly-dur-micro) var(--plnly-ease), color var(--plnly-dur-micro) var(--plnly-ease), opacity var(--plnly-dur-micro) var(--plnly-ease), transform var(--plnly-dur-micro) var(--plnly-ease), box-shadow var(--plnly-dur-micro) var(--plnly-ease)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  const variants: Record<NonNullable<ButtonProps['variant']>, React.CSSProperties> = {
    primary: {
      background: onInk ? 'var(--plnly-porcelain)' : 'var(--plnly-ink)',
      color: onInk ? 'var(--plnly-ink)' : 'var(--plnly-porcelain)',
    },
    secondary: {
      background: 'transparent',
      color: onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)',
      borderColor: onInk ? 'var(--plnly-border-on-ink)' : 'var(--plnly-border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: onInk ? 'var(--plnly-on-ink)' : 'var(--plnly-ink)',
      padding: { sm: '4px 2px', md: '6px 2px', lg: '8px 2px' }[size],
      borderRadius: 0,
    },
  };

  const isGhost = variant === 'ghost';

  return (
    <button
      type="button"
      disabled={disabled}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => {
        setHovered(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHovered(false);
        onMouseLeave?.(e);
      }}
      {...rest}
    >
      {isGhost ? <span style={{ borderBottom: '1px solid rgba(32,36,43,0.3)', paddingBottom: 2 }}>{children}</span> : children}
      {dot && (
        <span
          style={{
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            background: 'var(--plnly-coral)',
            flex: 'none',
          }}
        />
      )}
    </button>
  );
}
