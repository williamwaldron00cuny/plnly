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
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * The primary action — an ink pill with the coral dot. Copy is a verb + a noun.
 * @startingPoint section="Core" subtitle="Pill button with coral dot" viewport="420x120"
 */
export function Button(props: ButtonProps): JSX.Element;
