import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Background surface. @default "white" */
  surface?: 'white' | 'quiet' | 'porcelain' | 'ink';
  /** Soft, low shadow level. @default "raised" */
  elevation?: 'flat' | 'raised' | 'floating' | 'overlay';
  /** Corner radius — mostly square. @default "card" */
  radius?: 'card' | 'card-lg' | 'tile';
  /** Inner padding in px. @default 32 */
  padding?: number;
  style?: React.CSSProperties;
}

/**
 * A surface card — soft, low elevation, mostly-square corners.
 * @startingPoint section="Core" subtitle="Surface card" viewport="360x220"
 */
export function Card(props: CardProps): JSX.Element;
