import { ReactNode } from 'react';
import { color } from '@maru/theme';
import { flex } from '@maru/util';
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

const StyledCategory = styled.span<{ isSelected: boolean }>`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    height: 100%;
    padding: 0px 14px;
    border-radius: 25px;
    color: ${({ isSelected }) => (isSelected ? color.maruDefault : color.gray900)};
    background-color: ${({ isSelected }) => (isSelected ? '#eff5ff' : color.gray100)};
    cursor: pointer;
`;
