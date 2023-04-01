import { ReactNode } from "react";

export type PositionPropType = Partial<{
  $top: boolean;
  $left: boolean;
  $start: boolean;
  $end: boolean;
}>;

type ContentPropsType = {
  children: ReactNode;
  message: string;
};

export type TooltipPropsType = PositionPropType & ContentPropsType;
