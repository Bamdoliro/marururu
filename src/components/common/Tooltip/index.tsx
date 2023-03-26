import { TooltipPropsType } from "types/common/tooltip.type";
import * as S from "./style";

const Tooltip = ({ children, message, position }: TooltipPropsType) => (
  <S.Container position={position}>
    {children}
    <S.Content position={position}>
      <S.Arrow position={position} />
      <S.Message>{message}</S.Message>
    </S.Content>
  </S.Container>
);

export default Tooltip;
