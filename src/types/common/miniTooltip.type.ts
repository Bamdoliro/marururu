import { ReactNode } from "react";

export interface MiniTooltipPropsType {
  children: ReactNode;
  message: string;
  top?: boolean;
  left?: boolean;
  start?: boolean;
  end?: boolean;
}
