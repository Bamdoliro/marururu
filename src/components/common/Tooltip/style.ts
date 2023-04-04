import styled from "styled-components";
import { color } from "styles/theme.style";
import { FormPropsType } from "types/common/tooltip.type";

export const Arrow = styled.div<FormPropsType>`
  width: 0px;
  height: 0px;

  border-width: 6px;
  border-style: solid;
  border-color: transparent;

  ${({ $top }) => $top && `border-bottom-color: ${color.gray850}`};
  ${({ $left }) => $left && `border-right-color: ${color.gray850}`};

  margin: auto;

  ${({ $left, $start, $mini }) =>
    $left && $start && !$mini ? "margin-top: 16px" : 0};
  ${({ $left, $end, $mini }) =>
    $left && $end && !$mini ? "margin-bottom: 16px" : 0};
  ${({ $top, $start }) => $top && $start && "margin-left: 16px"};
  ${({ $top, $end }) => $top && $end && "margin-right: 16px"};
`;

export const Message = styled.div<FormPropsType>`
  padding: ${({ $mini }) => ($mini ? "4px 16px" : "8px 16px")};
  background-color: ${color.gray850};
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 160%;
  z-index: 200;
`;

export const Content = styled.div<FormPropsType>`
  display: none;
  ${({ $mini }) => !$mini && "max-width: 148px"};

  ${({ $top }) => $top && "margin-top: -4px"};
  ${({ $left }) => $left && "margin-left: -4px"};
  font-size: 14px;
  z-index: 200;
`;

export const Container = styled.div<FormPropsType>`
  position: relative;
  box-sizing: content-box;
  display: ${({ $top }) => ($top ? "inline-block" : "flex")};

  &:hover ${Content}, &:active ${Content} {
    display: ${({ $top }) => ($top ? "block" : "flex")};
  }
`;
