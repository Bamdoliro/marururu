import { ButtonHTMLAttributes } from "react";
import { ButtonOptionType } from "types/common/button.type";
import * as S from "./style";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  option: ButtonOptionType;
  width?: string;
  icon?: string;
}

const Button = ({ onClick, value, option, width, icon }: PropsType) => {
  return (
    <S.Button onClick={onClick} option={option} style={{ width }}>
      {icon && <S.ButtonIcon src={icon} />}
      <S.ButtonText>{value}</S.ButtonText>
    </S.Button>
  );
};

export default Button;
