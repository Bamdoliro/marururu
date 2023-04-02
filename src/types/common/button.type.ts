import { ButtonHTMLAttributes } from "react";

export type ButtonOptionType = "PRIMARY" | "SECONDARY" | "TERTIARY" | "QUATERNARY" | "DELETE";
export type ButtonColorType = "maruDefault" | "white" | "gray900" | "gray600" | "red" ;


export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>  {
    value: string;
    option: ButtonOptionType;
    color: ButtonColorType;
    icon: string | null;
}