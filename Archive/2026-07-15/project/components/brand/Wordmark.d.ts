import React from 'react';

export type WordmarkVariant = 'stacked' | 'horizontal' | 'compact';
export type WordmarkSize = 'sm' | 'md' | 'lg';

export interface WordmarkProps {
  /** Lockup form. "stacked" is primary; "compact" is the P. disc for small sizes. @default "stacked" */
  variant?: WordmarkVariant;
  /** @default "md" */
  size?: WordmarkSize;
  /** Render reversed for dark surfaces. @default false */
  onInk?: boolean;
  /** PL·AI·NLY — the AI-literacy sub-brand lockup. @default false */
  subBrand?: boolean;
  /** Show the "plainly" reveal + divider. Drop only below min size / repeat contact. @default true */
  reveal?: boolean;
  style?: React.CSSProperties;
}

/**
 * The PLNLY / plainly lockup — the core brand mark.
 * @startingPoint section="Brand" subtitle="The PLNLY / plainly lockup" viewport="360x240"
 */
export function Wordmark(props: WordmarkProps): JSX.Element;
