import styled from 'styled-components';
import { FlexPropsType } from './Flex.type';
import { flex } from '@maru/utils';

const Column = ({
    children,
    gap,
    justifyContent,
    alignItems,
    width,
    height,
    style,
}: FlexPropsType) => {
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
