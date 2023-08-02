import { CSSProperties, InputHTMLAttributes } from 'react';

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    label?: string;
    msg?: string;
    textAlign?: CSSProperties['textAlign'];
}
