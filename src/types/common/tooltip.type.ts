import { ReactNode } from "react";

type ContentPropsType = {
  children: ReactNode;
  message: string;
};

export type FormPropsType = {
  $top: boolean;
  $left: boolean;
  $start: boolean;
  $end: boolean;
  $mini: boolean;
};

export type TooltipPropsType = ContentPropsType & FormPropsType;
