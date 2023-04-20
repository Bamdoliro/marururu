import { InputPropsType } from "./input.type";
import { ButtonHTMLAttributes } from 'react';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText: string;
}

export type LabelInputPropsType = InputPropsType & ButtonPropsType;