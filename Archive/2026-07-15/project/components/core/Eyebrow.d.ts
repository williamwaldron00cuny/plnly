import React from 'react';

export interface EyebrowProps {
  children?: React.ReactNode;
  /** On a dark surface. @default false */
  onInk?: boolean;
  /** Trailing coral dot. @default false */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Mono uppercase label/kicker that dates and locates the brand. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
