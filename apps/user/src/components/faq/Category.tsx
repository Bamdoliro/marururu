import { ReactNode } from 'react';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
    isSelected: boolean;
    onClick: () => void;
}

const Category = ({ children, isSelected, onClick }: PropsType) => {
    return (
        <StyledCategory isSelected={isSelected} onClick={onClick}>
            {children}
        </StyledCategory>
    );
};

export default Category;

const StyledCategory = styled.button<{ isSelected: boolean }>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    ${font.context}
    height: 100%;
    padding: 0px 14px;
    border-radius: 25px;
    color: ${({ isSelected }) => (isSelected ? color.maruDefault : color.gray900)};
    background-color: ${({ isSelected }) => (isSelected ? '#eff5ff' : color.gray100)};
    cursor: pointer;
`;
