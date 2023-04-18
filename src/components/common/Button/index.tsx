import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonOptionType } from "types/common/button.type";
import Icon from "../Icon";
import * as S from "./style";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option: ButtonOptionType;
  width?: string;
  icon?: string;
}

const Button = ({ onClick, children, option, width, icon }: PropsType) => {
  return (
    <S.Button
      onClick={onClick}
      option={option}
      icon={icon ? true : false}
      style={{ width }}
    >
      {icon && <Icon src={icon} />}
      {children}
    </S.Button>
  );
};

export default Button;
