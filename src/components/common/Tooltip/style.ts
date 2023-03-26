import styled, { css } from "styled-components";
import { color } from "styles/theme.style";

export interface PositionPropType {
  position:
    | "left-bottom"
    | "left"
    | "left-top"
    | "top-left"
    | "top"
    | "top-right";
}

export const Arrow = styled.div<PositionPropType>`
  width: 0px;
  height: 0px;

  border-width: 6px;
  border-style: solid;
  border-color: transparent;

  border-bottom-color: ${(props) =>
    props.position.startsWith("top") && color.gray850};
  border-right-color: ${(props) =>
    props.position.startsWith("left") && color.gray850};

  margin: auto;

  margin-top: ${(props) => props.position === "left-top" && "16px"};
  margin-bottom: ${(props) => props.position === "left-bottom" && "16px"};
  margin-left: ${(props) => props.position === "top-left" && "16px"};
  margin-right: ${(props) => props.position === "top-right" && "16px"};
`;

export const Message = styled.div`
  max-width: 148px;
  padding: 8px 16px;
  background-color: ${color.gray850};
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 160%;
  z-index: 200;
`;

export const Content = styled.div<PositionPropType>`
  display: none;
  position: absolute;
  margin-top: ${(props) => props.position.startsWith("top") && "-4px"};
  margin-left: ${(props) => props.position.startsWith("left") && "-4px"};
  font-size: 14px;
  z-index: 200;
`;

export const Container = styled.div<PositionPropType>`
  position: relative;
  box-sizing: content-box;

  &:hover ${Content}, &:active ${Content} {
    display: ${({ position }) =>
      position.startsWith("top") ? "block" : "flex"};
  }
`;
