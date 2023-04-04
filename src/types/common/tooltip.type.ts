import { ReactNode } from "react";
import { SinglePropFrom } from "types/utils/singlePropFrom.type";

export type PositionPropsType = Partial<{
  $top: boolean;
  $left: boolean;
  $start: boolean;
  $end: boolean;
}>;

type ContentPropsType = {
  children: ReactNode;
  message: string;
};

export type TooltipPropsType = ContentPropsType &
  SinglePropFrom<PositionPropsType, "$top" | "$left"> &
  Partial<SinglePropFrom<PositionPropsType, "$start" | "$end">>;
