import { ReactNode, CSSProperties } from 'react';

export interface FlexPropsType {
    children: ReactNode;
    gap?: CSSProperties['gap'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    style?: CSSProperties;
}
