import { TooltipPropsType } from "types/common/tooltip.type";
import * as S from "./style";

const Tooltip = ({ children, message, ...positions }: TooltipPropsType) => (
  <S.Container {...positions}>
    {children}
    <S.Content {...positions}>
      <S.Arrow {...positions} />
      <S.Message>{message}</S.Message>
    </S.Content>
  </S.Container>
);

export default Tooltip;
