import { ReactNode } from "react";

export interface FlexPropsType {
  children: ReactNode;
  gap?: string;
  justifyContent?:
    | "none"
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between";
  alignItems?: "none" | "center" | "flex-end" | "flex-start" | "space-between";
  width?: string;
  height?: string;
}
