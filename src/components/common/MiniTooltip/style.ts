import styled, { css } from "styled-components";
import { color } from "styles/theme.style";

export interface PositionPropType {
  position: "left" | "top-left" | "top" | "top-right";
}

export const Arrow = styled.div<PositionPropType>`
  width: 0px;
  height: 0px;

  border-bottom: 6px solid transparent;
  border-top: 6px solid transparent;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  ${({ position }) =>
    position.startsWith("top")
      ? css`
          border-bottom: 6px solid ${color.gray850};
        `
      : css`
          border-right: 6px solid ${color.gray850};
        `}

  margin: auto;
  ${({ position }) =>
    position === "top-left"
      ? css`
          margin-left: 16px;
        `
      : position === "top-right"
      ? css`
          margin-right: 16px;
        `
      : null}
`;

export const Message = styled.div`
  padding: 4px 16px;
  background-color: ${color.gray850};
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 160%;
  z-index: 200;
`;

export const Content = styled.div<PositionPropType>`
  ${({ position }) =>
    position.startsWith("top")
      ? css`
          margin-top: -4px;
        `
      : css`
          margin-left: -4px;
        `}

  display: none;
  position: absolute;
  font-size: 14px;
  z-index: 200;
`;

export const Container = styled.div<PositionPropType>`
  position: relative;
  box-sizing: content-box;

  &:hover ${Content}, &:active ${Content}, ${Content} {
    display: ${({ position }) =>
      position.startsWith("top") ? "block" : "flex"};
  }
`;
