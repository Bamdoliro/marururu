import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const Category = ({ children, isSelected, onClick }: Props) => {
  return (
    <StyledCategory $isSelected={isSelected} onClick={onClick}>
      {children}
    </StyledCategory>
  );
};

export default Category;

const StyledCategory = styled.button<{ $isSelected: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  ${font.context}
    height: 100%;
  padding: 0px 14px;
  border-radius: 25px;
  color: ${(props) => (props.$isSelected ? color.maruDefault : color.gray900)};
  background-color: ${(props) => (props.$isSelected ? '#eff5ff' : color.gray100)};
  cursor: pointer;
`;
