import type { CSSProperties } from 'react';

interface IconPropsType {
    onClick?: () => void;
    color?: string;
    cursor?: CSSProperties['cursor'];
    size?: number;
}

export default IconPropsType;
