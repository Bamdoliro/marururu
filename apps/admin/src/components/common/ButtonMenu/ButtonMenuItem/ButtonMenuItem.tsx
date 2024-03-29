import { color } from '@maru/design-token';
import { flex } from '@maru/utils';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonMenuItem = ({ children, ...props }: Props) => {
  return <StyledButtonMenuItem {...props}>{children}</StyledButtonMenuItem>;
};

export default ButtonMenuItem;

const StyledButtonMenuItem = styled.button`
  ${flex({ alignItems: 'center' })}
  gap: 12px;
  width: 100%;
  height: 44px;
  padding: 0 8px;
  border-radius: 6px;

  &:hover {
    background-color: ${color.gray100};
  }
`;
