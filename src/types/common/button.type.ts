import { ButtonHTMLAttributes } from "react";

export type ButtonOptionType = "PRIMARY" | "SECONDARY" | "TERTIARY" | "QUATERNARY";

export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>  {
    width?: string;
    option: ButtonOptionType;
}