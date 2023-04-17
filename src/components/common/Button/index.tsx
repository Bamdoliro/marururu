import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonOptionType } from "types/common/button.type";
import * as S from "./style";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option: ButtonOptionType;
  width?: string;
  icon?: string;
}

const Button = ({ onClick, children, option, width, icon }: PropsType) => {
  return (
    <S.Button onClick={onClick} option={option} style={{ width }}>
      {icon && <S.ButtonIcon src={icon} />}
      {children}
    </S.Button>
  );
};

export default Button;
