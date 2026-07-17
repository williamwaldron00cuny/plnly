import React from 'react';

/**
 * PLNLY Input — a calm text field. Hanken Grotesk, square-ish, hairline border
 * that warms to ink on focus. Mono label above; coral reserved for error only.
 */
export function Input({
  label,
  hint,
  error,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const inputId = id || (label ? `plnly-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focused, setFocused] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...containerStyle }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: 'var(--plnly-font-mono)',
          fontSize: 10.5,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--plnly-text-label)',
        }}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        onFocus={(e) => { setFocused(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur?.(e); }}
        style={{
          fontFamily: 'var(--plnly-font-body)',
          fontSize: 16,
          color: 'var(--plnly-ink)',
          background: 'var(--plnly-surface)',
          border: `1px solid ${error ? 'var(--plnly-error)' : focused ? 'var(--plnly-ink)' : 'var(--plnly-border-strong)'}`,
          borderRadius: 'var(--plnly-radius-card)',
          padding: '12px 14px',
          outline: 'none',
          transition: 'border-color var(--plnly-dur-micro) var(--plnly-ease)',
          width: '100%',
          boxSizing: 'border-box',
          ...style,
        }}
        {...rest}
      />
      {(error || hint) && (
        <span style={{
          fontFamily: 'var(--plnly-font-body)',
          fontSize: 13,
          lineHeight: 1.5,
          color: error ? 'var(--plnly-error)' : 'var(--plnly-text-muted)',
        }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
