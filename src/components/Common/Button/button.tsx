import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonIconType, ButtonOptionType, ButtonSizeType } from "./interface";
import { font } from "@/styles/font";
import { getButtonSize, getButtonStyle, getButtonPadding } from "./index";
import { styled } from "styled-components";
import AddIcon from "../Icon/Add";
import ShortcutsIcon from "../Icon/Shortcuts";

interface PropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option: ButtonOptionType;
  icon: ButtonIconType;
  size: ButtonSizeType;
}

const Button = ({
  onClick,
  children,
  option = "PRIMARY",
  icon = "NONE",
  size = "MEDIUM",
}: PropsInterface) => {
  return (
    <StyledButton onClick={onClick} option={option} icon={icon} size={size}>
      {icon === "ADD_ICON" && <AddIcon />}
      {children}
      {icon === "SHORTCUTS_ICON" && <ShortcutsIcon />}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  option: ButtonOptionType;
  icon: ButtonIconType;
  size: ButtonSizeType;
}>`
  ${font.btn2}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  height: 54px;

  ${({ icon }) => icon && getButtonPadding[icon]};
  ${({ option }) => option && getButtonStyle[option]}
  ${({ size }) => size && getButtonSize[size]}
`;
