import React from 'react';
import { color } from '@maru/design-token';
import styled from 'styled-components';

interface BoxProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Box: React.FC<BoxProps> = ({ children, backgroundColor }) => {
  return <BoxContainer backgroundColor={backgroundColor}>{children}</BoxContainer>;
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
