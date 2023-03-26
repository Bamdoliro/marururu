import { ReactNode } from "react";

export interface MiniTooltipPropsType {
  children: ReactNode;
  message: string;
  position: "left" | "top-left" | "top" | "top-right";
}
