import { color } from '@maru/design-token';
import type { CSSProperties } from 'react';
import React from 'react';
import styled from 'styled-components';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: CSSProperties['padding'];
}

const Box: React.FC<BoxProps> = ({ children, backgroundColor, padding }) => {
  return (
    <BoxContainer backgroundColor={backgroundColor} style={{ padding }}>
      {children}
    </BoxContainer>
  );
};

export default Box;

const BoxContainer = styled.div<{ backgroundColor?: string }>`
  width: 82%;
  padding: 24px 70px;
  border-radius: 6px;
  border: 1px solid ${color.gray400};
  margin: -20px 0px;
  background-color: ${(props) => props.backgroundColor};
  text-align: left;
`;
