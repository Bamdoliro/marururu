import { ReactNode } from "react";

export interface TooltipPropsType {
  children: ReactNode;
  message: string;
  position:
    | "left-bottom"
    | "left"
    | "left-top"
    | "top-left"
    | "top"
    | "top-right";
}
