import { ButtonHTMLAttributes } from "react";

export type ButtonOptionType = "PRIMARY" | "SECONDARY" | "TERTIARY" | "QUATERNARY" | "DELETE";

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>  {
    value: string;
    option: ButtonOptionType;
    width?: string;
    icon?: string;
}