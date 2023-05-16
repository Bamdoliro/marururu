import { InputHTMLAttributes } from "react";

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  desc?: string;
  msg?: string;
}
