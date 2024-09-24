import { color, font } from '@maru/design-token';
import { flex } from '@maru/utils';
import React from 'react';
import styled, { css } from 'styled-components';
import type { TableProps, TableStyleType } from './Table.type';

const Td = ({
  children,
  width,
  height,
  styleType = 'PRIMARY',
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  isBottom = false,
  isTop = false,
  isLeft = false,
  isRight = false,
  isBottomBold = false,
}: TableProps) => {
  return (
    <StyledTd
      style={{
        width,
        height,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      }}
      styleType={styleType}
      isBottom={isBottom}
      isTop={isTop}
      isLeft={isLeft}
      isRight={isRight}
      isBottomBold={isBottomBold}
    >
      {children}
    </StyledTd>
  );
};

export default Td;

const StyledTd = styled.div<{
  styleType: TableStyleType;
  isBottom: boolean;
  isTop: boolean;
  isLeft: boolean;
  isRight: boolean;
  isBottomBold: boolean;
}>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}

  color: ${color.gray900};
  border: 0.5px solid ${color.gray300};

  ${(props) =>
    props.styleType === 'PRIMARY'
      ? css`
          ${font.context}
          background-color: ${color.white};
        `
      : props.styleType === 'SECONDARY'
      ? css`
          ${font.p2}
          background-color: ${color.gray50};
        `
      : props.styleType === 'FORM' &&
        css`
          ${font.p2}
          background-color: ${color.maruLightBlue};
        `}

  ${(props) =>
    props.isBottom &&
    css`
      border-bottom: 0.5px solid ${color.gray400};
    `}

  ${(props) =>
    props.isBottomBold &&
    css`
      border-bottom: 1px solid ${color.gray400};
    `}

  ${(props) =>
    props.isTop &&
    css`
      border-top: 0.5px solid ${color.gray400};
    `}

  ${(props) =>
    props.isLeft &&
    css`
      border-left: 1px solid ${color.gray400};
    `}

  ${(props) =>
    props.isRight &&
    css`
      border-right: 1px solid ${color.gray400};
    `}
`;
