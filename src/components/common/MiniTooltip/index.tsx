import { MiniTooltipPropsType } from "types/common/miniTooltip.type";
import * as S from "./style";

const MiniTooltip = ({ children, message, position }: MiniTooltipPropsType) => (
  <S.Container position={position}>
    {children}
    <S.Content position={position}>
      <S.Arrow position={position} />
      <S.Message>{message}</S.Message>
    </S.Content>
  </S.Container>
);

export default MiniTooltip;
