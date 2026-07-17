import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label rendered above the field. */
  label?: string;
  /** Muted helper text below. */
  hint?: string;
  /** Error message — turns border + text to the error color. */
  error?: string;
  /** Style for the wrapping column. */
  containerStyle?: React.CSSProperties;
}

/**
 * A calm text field — hairline border that warms to ink on focus.
 * @startingPoint section="Forms" subtitle="Text field with label" viewport="360x120"
 */
export function Input(props: InputProps): JSX.Element;
