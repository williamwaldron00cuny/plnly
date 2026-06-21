import React from 'react';

/**
 * PLNLY Orbit — the brand's recurring motif.
 * Concentric hairline rings with a coral center (the household) and
 * mint/mist satellites (the tools). Replaces every AI cliché.
 */
export function Orbit({
  size = 240,
  tone = 'ink',        // 'ink' (on dark) | 'faint' (on light backdrop)
  spin = false,        // slow rotation — closer to an hour hand than a spinner
  duration = 90,       // seconds per turn
  satellites = true,
  style,
  ...rest
}) {
  const onInk = tone === 'ink';
  const ring = onInk
    ? ['#3b4048', '#343941', '#2c313a']
    : ['rgba(32,36,43,0.09)', 'rgba(32,36,43,0.07)', 'rgba(32,36,43,0.05)'];
  const centerOpacity = onInk ? 1 : 0.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      style={{
        transformOrigin: 'center',
        animation: spin ? `plnly-orbit-spin ${duration}s linear infinite` : undefined,
        ...style,
      }}
      {...rest}
    >
      <circle cx="120" cy="120" r="40" stroke={ring[0]} strokeWidth="1" />
      <circle cx="120" cy="120" r="72" stroke={ring[1]} strokeWidth="1" />
      <circle cx="120" cy="120" r="104" stroke={ring[2]} strokeWidth="1" />
      <circle cx="120" cy="120" r="6" fill="#E25E3A" fillOpacity={centerOpacity} />
      {satellites && (
        <>
          <circle cx="192" cy="120" r="4" fill="#9FB1BB" fillOpacity={onInk ? 1 : 0.7} />
          <circle cx="80" cy="48" r="4.5" fill="#C2D8CC" fillOpacity={onInk ? 1 : 0.7} />
        </>
      )}
      <style>{`@keyframes plnly-orbit-spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { svg { animation: none !important; } }`}</style>
    </svg>
  );
}
