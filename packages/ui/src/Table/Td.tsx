import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
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
    >
      {children}
    </StyledTd>
  );
};

export default Td;

const StyledTd = styled.div<{ styleType: TableStyleType }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}

  color: ${color.gray900};
  border: 0.5px solid ${color.gray300};

  ${(props) =>
    props.styleType === 'PRIMARY'
      ? css`
          ${font.context}
          background-color: ${color.white};
        `
      : css`
          ${font.p2}
          background-color: ${color.gray50};
        `}
`;
