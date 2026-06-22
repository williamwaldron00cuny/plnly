import React from 'react';

export interface OrbitProps extends React.SVGAttributes<SVGSVGElement> {
  /** Pixel size (square). @default 240 */
  size?: number;
  /** "ink" for dark surfaces, "faint" as a large page backdrop on light. @default "ink" */
  tone?: 'ink' | 'faint';
  /** Slow rotation — meditative, hour-hand pace. @default false */
  spin?: boolean;
  /** Seconds per full turn. @default 90 */
  duration?: number;
  /** Show the mint/mist satellite points. @default true */
  satellites?: boolean;
}

/**
 * The quiet orbit — the brand motif: a coral household at center, tools circling.
 * Replaces every AI cliché (no circuits, no neural-net line art, no robots).
 */
export function Orbit({
  size = 240,
  tone = 'ink',
  spin = false,
  duration = 90,
  satellites = true,
  style,
  ...rest
}: OrbitProps) {
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
