import { styled } from 'styled-components';
import { FlexPropsType } from './Flex.type';

const Row = ({
    children,
    gap,
    justifyContent,
    alignItems,
    width,
    height,
    style,
}: FlexPropsType) => {
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
