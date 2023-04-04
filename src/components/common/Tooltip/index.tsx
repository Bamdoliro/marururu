import { TooltipPropsType } from "types/common/tooltip.type";
import * as S from "./style";

const Tooltip = ({ children, message, ...form }: TooltipPropsType) => (
  <S.Container {...form}>
    {children}
    <S.Content {...form}>
      <S.Arrow {...form} />
      <S.Message {...form}>{message}</S.Message>
    </S.Content>
  </S.Container>
);

export default Tooltip;
