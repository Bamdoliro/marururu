import type { CSSProperties, ReactNode } from 'react';

export interface TableProps {
  children: ReactNode;
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  styleType?: TableStyleType;
  borderTopLeftRadius?: CSSProperties['borderTopLeftRadius'];
  borderTopRightRadius?: CSSProperties['borderTopRightRadius'];
  borderBottomLeftRadius?: CSSProperties['borderBottomLeftRadius'];
  borderBottomRightRadius?: CSSProperties['borderBottomRightRadius'];
}

export type TableStyleType = 'PRIMARY' | 'SECONDARY';
