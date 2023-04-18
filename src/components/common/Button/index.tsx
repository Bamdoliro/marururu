import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonOptionType } from "types/common/button.type";
import AddIcon from "assets/add.svg";
import Icon from "components/common/Icon";
import * as S from "./style";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option: ButtonOptionType;
  width?: string;
  icon: boolean;
}

const Button = ({ onClick, children, option, width, icon }: PropsType) => {
  return (
    <S.Button onClick={onClick} option={option} icon={icon} style={{ width }}>
      {icon && <Icon src={AddIcon} />}
      {children}
    </S.Button>
  );
};

export default Button;
