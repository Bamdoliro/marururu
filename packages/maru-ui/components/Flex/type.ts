import { ReactNode, CSSProperties } from 'react';

export interface FlexPropsType {
    children: ReactNode;
    gap?: string;
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    width?: string;
    height?: string;
}
