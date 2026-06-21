import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** "hue" = soft palette tint; "status" = functional colors. @default "hue" */
  tone?: 'hue' | 'status';
  /** Hue name (mint/mist/eucalyptus/greige/coral) or status name (success/info/caution/error). @default "mint" */
  color?: string;
  /** Leading status dot (status tone only). @default false */
  dot?: boolean;
  /** Use the mono stamp style vs. a softer body label. @default true */
  mono?: boolean;
  style?: React.CSSProperties;
}

/** Small status chip / tag — square-ish, mono stamp by default. */
export function Badge(props: BadgeProps): JSX.Element;
