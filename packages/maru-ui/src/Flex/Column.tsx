import { flex } from '@maru/utils';
import styled from 'styled-components';
import type { FlexProps } from './Flex.type';

const Column = ({
  children,
  gap,
  justifyContent,
  alignItems,
  width,
  height,
  style,
}: FlexProps) => {
  return (
    <StyledColumn style={{ gap, justifyContent, alignItems, width, height, ...style }}>
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.div`
  ${flex({ flexDirection: 'column' })}
`;
