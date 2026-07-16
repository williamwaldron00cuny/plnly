import React from 'react';

export type IconName = 'ring' | 'focus' | 'time' | 'plan' | 'handover' | 'add' | 'place' | 'orbit';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Which abstract mark. @default "ring" */
  name?: IconName;
  /** Pixel size (square). @default 24 */
  size?: number;
  /** Tint the meaningful element coral (active/focal). @default false */
  coral?: boolean;
}

export const ICON_NAMES: IconName[] = ['ring', 'focus', 'time', 'plan', 'handover', 'add', 'place', 'orbit'];

const STROKE = '#20242B';
const CORAL = '#FF3D00'; // Coral 2.0 — locked July 15, 2026

function paths(name: IconName, coral: boolean) {
  const accent = coral ? CORAL : STROKE;
  switch (name) {
    case 'ring':
      return <circle cx="12" cy="12" r="8.5" stroke={STROKE} strokeWidth="1.75" />;
    case 'focus':
      return (
        <>
          <circle cx="12" cy="12" r="8.5" stroke={STROKE} strokeWidth="1.75" />
          <circle cx="12" cy="12" r="2.6" fill={CORAL} />
        </>
      );
    case 'time':
      return (
        <>
          <circle cx="12" cy="12" r="8.5" stroke={STROKE} strokeWidth="1.75" />
          <line x1="12" y1="12" x2="12" y2="7" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" />
          <line x1="12" y1="12" x2="15.5" y2="13.5" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" />
        </>
      );
    case 'plan':
      return (
        <>
          <line x1="5" y1="8" x2="19" y2="8" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" />
          <line x1="5" y1="12" x2="19" y2="12" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" />
          <line x1="5" y1="16" x2="14" y2="16" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" />
        </>
      );
    case 'handover':
      return (
        <>
          <line x1="4" y1="12" x2="18" y2="12" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" />
          <polyline points="13,7 18,12 13,17" stroke={accent} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      );
    case 'add':
      return (
        <>
          <line x1="12" y1="5" x2="12" y2="19" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" />
          <line x1="5" y1="12" x2="19" y2="12" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" />
        </>
      );
    case 'place':
      return (
        <>
          <path d="M5 9 V5 H9" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M19 9 V5 H15" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M5 15 V19 H9" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M19 15 V19 H15" stroke={STROKE} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      );
    case 'orbit':
      return (
        <>
          <circle cx="12" cy="12" r="3.2" stroke={STROKE} strokeWidth="1.75" />
          <circle cx="12" cy="12" r="8.5" stroke={STROKE} strokeWidth="1.75" strokeDasharray="2 3" />
        </>
      );
    default:
      return <circle cx="12" cy="12" r="8.5" stroke={STROKE} strokeWidth="1.75" />;
  }
}

/**
 * The abstract mark set, built from the dot, the ring, and the line. 24px grid,
 * 1.75px stroke, round caps/joins. Coral appears in at most one element, only
 * when it carries meaning (a focal point, an active state). No emoji, no icon font.
 */
export function Icon({ name = 'ring', size = 24, coral = false, style, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: 'inline-block', verticalAlign: 'middle', flex: 'none', ...style }}
      {...rest}
    >
      {paths(name, coral)}
    </svg>
  );
}
