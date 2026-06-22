import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Background surface. @default "white" */
  surface?: 'white' | 'quiet' | 'porcelain' | 'ink';
  /** Soft, low shadow level. @default "raised" */
  elevation?: 'flat' | 'raised' | 'floating' | 'overlay';
  /** Corner radius — mostly square. @default "card" */
  radius?: 'card' | 'card-lg' | 'tile';
  /** Inner padding in px. @default 32 */
  padding?: number;
}

const SURFACES: Record<NonNullable<CardProps['surface']>, React.CSSProperties> = {
  white: { background: 'var(--plnly-surface)', color: 'var(--plnly-ink)' },
  quiet: { background: 'var(--plnly-greige)', color: 'var(--plnly-ink)' },
  porcelain: { background: 'var(--plnly-porcelain)', color: 'var(--plnly-ink)' },
  ink: { background: 'var(--plnly-surface-ink)', color: 'var(--plnly-on-ink)' },
};
const SHADOWS: Record<NonNullable<CardProps['elevation']>, string> = {
  flat: 'none',
  raised: 'var(--plnly-shadow-raised)',
  floating: 'var(--plnly-shadow-floating)',
  overlay: 'var(--plnly-shadow-overlay)',
};
const RADII: Record<NonNullable<CardProps['radius']>, string> = {
  card: 'var(--plnly-radius-card)',
  'card-lg': 'var(--plnly-radius-card-lg)',
  tile: 'var(--plnly-radius-tile)',
};

/**
 * A surface card — soft, low elevation, mostly-square corners. "Quiet" is the
 * greige inset variant; "ink" is the dark band card. No colored left-border accents.
 */
export function Card({ children, surface = 'white', elevation = 'raised', radius = 'card', padding = 32, style, ...rest }: CardProps) {
  return (
    <div
      style={{
        ...SURFACES[surface],
        boxShadow: SHADOWS[elevation],
        borderRadius: RADII[radius],
        padding,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
