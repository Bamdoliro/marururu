import styled from "styled-components";
import { color } from "styles/theme.style";

type PositionPropType = {
  top?: boolean;
  left?: boolean;
  start?: boolean;
  end?: boolean;
};

export const Arrow = styled.div<PositionPropType>`
  width: 0px;
  height: 0px;

  border-width: 6px;
  border-style: solid;
  border-color: transparent;

  border-bottom-color: ${({ top }) => top && color.gray850};
  border-right-color: ${({ left }) => left && color.gray850};

  margin: auto;

  margin-top: ${({ left, start }) => left && start && "16px"};
  margin-bottom: ${({ left, end }) => left && end && "16px"};
  margin-left: ${({ top, start }) => top && start && "16px"};
  margin-right: ${({ top, end }) => top && end && "16px"};
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
  margin-top: ${({ top }) => top && "-4px"};
  margin-left: ${({ left }) => left && "-4px"};
  font-size: 14px;
  z-index: 200;
`;

export const Container = styled.div<PositionPropType>`
  position: relative;
  box-sizing: content-box;

  &:hover ${Content}, &:active ${Content} {
    display: ${({ top }) => (top ? "block" : "flex")};
  }
`;
