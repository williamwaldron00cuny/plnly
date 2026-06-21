import React from 'react';

export type IconName = 'ring' | 'focus' | 'time' | 'plan' | 'handover' | 'add' | 'place' | 'orbit';

export interface IconProps {
  /** Which abstract mark. @default "ring" */
  name?: IconName;
  /** Pixel size (square). @default 24 */
  size?: number;
  /** Tint the meaningful element coral (active/focal). @default false */
  coral?: boolean;
  style?: React.CSSProperties;
}

/** Abstract icon mark built from the dot / ring / line on a 24px grid, 1.75px stroke. */
export function Icon(props: IconProps): JSX.Element;

/** All available icon names. */
export const ICON_NAMES: IconName[];
