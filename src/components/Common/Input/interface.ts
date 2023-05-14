import { InputHTMLAttributes } from "react";

export interface InputPropsInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  desc?: string;
}
