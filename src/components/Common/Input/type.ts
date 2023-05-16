import { InputHTMLAttributes } from "react";

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  desc?: string;
  msg?: string;
}

export interface ButtonInputPropsType extends InputPropsType {
  buttonText: string;
  buttonClick: () => void;
}
