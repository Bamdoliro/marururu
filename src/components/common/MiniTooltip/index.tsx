import { TooltipPropsType } from "types/common/tooltip.type";
import * as S from "./style";

const MiniTooltip = ({ children, message, ...positions }: TooltipPropsType) => (
  <S.Container {...positions}>
    <S.Children>{children}</S.Children>
    <S.Content {...positions}>
      <S.Arrow {...positions} />
      <S.Message>{message}</S.Message>
    </S.Content>
  </S.Container>
);

export default MiniTooltip;
