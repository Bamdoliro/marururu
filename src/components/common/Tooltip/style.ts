import styled from "styled-components";
import { color } from "styles/theme.style";
import { PositionPropsType } from "types/common/tooltip.type";

export const Arrow = styled.div<PositionPropsType>`
  width: 0px;
  height: 0px;

  border-width: 6px;
  border-style: solid;
  border-color: transparent;

  ${({ $top }) => $top && `border-bottom-color: ${color.gray850}`};
  ${({ $left }) => $left && `border-right-color: ${color.gray850}`};

  margin: auto;

  ${({ $left, $start }) => $left && $start && "margin-top: 16px"};
  ${({ $left, $end }) => $left && $end && "margin-bottom: 16px"};
  ${({ $top, $start }) => $top && $start && "margin-left: 16px"};
  ${({ $top, $end }) => $top && $end && "margin-right: 16px"};
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

export const Content = styled.div<PositionPropsType>`
  display: none;
  max-width: 148px;

  ${({ $top }) => $top && "margin-top: -4px"};
  ${({ $left }) => $left && "margin-left: -4px"};
  font-size: 14px;
  z-index: 200;
`;

export const Container = styled.div<PositionPropsType>`
  position: relative;
  box-sizing: content-box;
  display: ${({ $top }) => ($top ? "inline-block" : "flex")};

  &:hover ${Content}, &:active ${Content} {
    display: ${({ $top }) => ($top ? "block" : "flex")};
  }
`;
