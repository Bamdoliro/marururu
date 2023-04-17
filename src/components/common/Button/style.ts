import { ButtonOptionType } from "./../../../types/common/button.type";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { color } from "styles/theme.style";
import { font } from "styles/text.style";

export const Button = styled.button<{ option: ButtonOptionType }>`
  ${font.btn2}
  ${({ option }) => option && getButtonStyle[option]}

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
`;

export const ButtonIcon = styled.img``;

const getButtonStyle: Record<ButtonOptionType, FlattenSimpleInterpolation> = {
  PRIMARY: css`
    background-color: ${color.maruDefault};
    color: ${color.white};
    &:hover {
      background-color: ${color.maruHigh};
    }
  `,

  SECONDARY: css`
    background-color: ${color.gray200};
    color: ${color.gray900};
    &:hover {
      background-color: ${color.gray300};
    }
  `,

  TERTIARY: css`
    background-color: ${color.white};
    color: ${color.gray900};
    border: 1px solid ${color.gray300};
    &:hover {
      border: 1px solid ${color.gray400};
    }
  `,

  QUATERNARY: css`
    background-color: ${color.white};
    color: ${color.gray600};
    border: none;
    &:hover {
      color: ${color.gray900};
    }
  `,

  DELETE: css`
    background-color: ${color.red}1A;
    color: ${color.red};

    border: 1px solid ${color.red};
    &:hover {
      color: ${color.white};
      background-color: ${color.red};
    }
  `,
  LINK_TEXT: css`
    padding: 0;
    border-radius: 0;
    color: ${color.gray500};
    border-bottom: 1px solid ${color.gray500};
    &:hover {
      color: ${color.maruDefault};
      border-bottom: 1px solid ${color.maruDefault};
    }
  `,
};
