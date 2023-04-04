import { ReactNode } from "react";
import { SinglePropFrom } from "types/utils/singlePropFrom.type";

export type FormPropsType = Partial<{
  $top: boolean;
  $left: boolean;
  $start: boolean;
  $end: boolean;
  $mini: boolean;
}>;

type ContentPropsType = {
  children: ReactNode;
  message: string;
};

export type TooltipPropsType = ContentPropsType &
  FormPropsType &
  SinglePropFrom<FormPropsType, "$top" | "$left"> &
  Partial<SinglePropFrom<FormPropsType, "$start" | "$end">>;
