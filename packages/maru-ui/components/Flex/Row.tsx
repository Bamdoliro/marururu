import { styled } from 'styled-components';
import type { FlexPropsType } from './type';

const Row = ({ children, gap, justifyContent, alignItems, width, height }: FlexPropsType) => {
    return (
        <StyledRow style={{ gap, justifyContent, alignItems, width, height }}>{children}</StyledRow>
    );
};

export default Row;

const StyledRow = styled.div`
    display: flex;
`;
