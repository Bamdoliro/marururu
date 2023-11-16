import { color, font } from '@maru/design-token';
import { flex } from '@maru/utils';
import styled, { css } from 'styled-components';
import type { TableProps, TableStyleType } from './Table.type';

const Th = ({
  children,
  width,
  height,
  styleType = 'PRIMARY',
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}: TableProps) => {
  return (
    <StyledTh
      style={{
        width,
        height,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      }}
      styleType={styleType}
    >
      {children}
    </StyledTh>
  );
};

export default Th;

const StyledTh = styled.div<{ styleType: TableStyleType }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}

  ${(props) =>
    props.styleType === 'PRIMARY'
      ? css`
          ${font.context}
          background-color: ${color.maruDefault};
          color: ${color.white};
          border-right: 1px solid ${color.white};
          &:last-child {
            border-right: none;
          }
        `
      : css`
          ${font.p2}
          background-color: ${color.gray100};
          color: ${color.gray900};
          border-left: 1px solid ${color.gray300};
          &:first-child {
            border-left: none;
          }
        `}
`;
