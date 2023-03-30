import { ReactNode } from "react";

export interface TooltipPropsType {
  children: ReactNode;
  message: string;
  top?: boolean;
  left?: boolean;
  start?: boolean;
  end?: boolean;
}
