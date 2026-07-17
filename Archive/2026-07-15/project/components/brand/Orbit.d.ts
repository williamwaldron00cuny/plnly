import React from 'react';

export interface OrbitProps {
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
  style?: React.CSSProperties;
}

/**
 * The quiet orbit — the brand motif: a coral household at center, tools circling.
 * @startingPoint section="Brand" subtitle="The quiet orbit motif" viewport="280x280"
 */
export function Orbit(props: OrbitProps): JSX.Element;
