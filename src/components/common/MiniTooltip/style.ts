import styled from "styled-components";
import { color } from "styles/theme.style";
import { PositionPropType } from "types/common/tooltip.type";

export const Arrow = styled.div<PositionPropType>`
  width: 0px;
  height: 0px;

  border-width: 6px;
  border-style: solid;
  border-color: transparent;

  ${({ $top }) => $top && `border-bottom-color: ${color.gray850}`};
  ${({ $left }) => $left && `border-right-color: ${color.gray850}`};

  margin: auto;
  ${({ $top, $start }) => $top && $start && "margin-left: 16px"};
  ${({ $top, $end }) => $top && $end && "margin-right: 16px"};
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
  display: none;

  ${({ $top }) => $top && "margin-top: -4px"};
  ${({ $left }) => $left && "margin-left: -4px"};
  font-size: 14px;
  z-index: 200;
`;

export const Container = styled.div<PositionPropType>`
  position: relative;
  box-sizing: content-box;
  ${({ $top }) => ($top ? "display: inline-block" : "display: flex")};

  &:hover ${Content}, &:active ${Content} {
    ${({ $top }) => ($top ? "display: block" : "display: flex")};
  }
`;
