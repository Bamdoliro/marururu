import { CSSProperties, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    label?: string;
    errorMessage?: string;
    message?: string;
    textAlign?: CSSProperties['textAlign'];
    isError?: boolean;
}
