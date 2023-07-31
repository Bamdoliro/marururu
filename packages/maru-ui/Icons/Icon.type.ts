import type { CSSProperties } from 'react';

interface IconPropsType {
    onClick?: () => void;
    color?: string;
    cursor?: CSSProperties['cursor'];
    size?: string | number;
}

export default IconPropsType;
