import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled, { css } from 'styled-components';
import type { TableOptionType, TableProps } from './Table.type';

const Th = ({
  children,
  width,
  height,
  option = 'PRIMARY',
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
      option={option}
    >
      {children}
    </StyledTh>
  );
};

export default Th;

const StyledTh = styled.div<{ option: TableOptionType }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}

  ${(props) =>
    props.option === 'PRIMARY'
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
