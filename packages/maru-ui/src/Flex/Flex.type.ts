import type { CSSProperties, ReactNode } from 'react';

export interface FlexProps {
  children: ReactNode;
  gap?: CSSProperties['gap'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  style?: CSSProperties;
}
