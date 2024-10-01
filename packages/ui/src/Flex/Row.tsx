import React from 'react';
import { styled } from 'styled-components';
import type { FlexProps } from './Flex.type';

const Row = ({
  children,
  gap,
  justifyContent,
  alignItems,
  width,
  height,
  style,
}: FlexProps) => {
  return (
    <StyledRow style={{ gap, justifyContent, alignItems, width, height, ...style }}>
      {children}
    </StyledRow>
  );
};

export default Row;

const StyledRow = styled.div`
  display: flex;
`;
