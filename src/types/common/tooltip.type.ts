import { ReactNode } from "react";

interface ContentPropsType {
  children: ReactNode;
  message: string;
}

export interface FormPropsType {
  $top: boolean;
  $left: boolean;
  $start: boolean;
  $end: boolean;
  $mini: boolean;
}

export type TooltipPropsType = ContentPropsType & FormPropsType;
