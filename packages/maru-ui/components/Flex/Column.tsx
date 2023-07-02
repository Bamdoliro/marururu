import styled from 'styled-components';
import type { FlexPropsType } from './type';
import { flex } from '@maru/utils';

const Column = ({ children, gap, justifyContent, alignItems, width, height }: FlexPropsType) => {
    return (
        <StyledColumn style={{ gap, justifyContent, alignItems, width, height }}>
            {children}
        </StyledColumn>
    );
};

export default Column;

const StyledColumn = styled.div`
    ${flex({ flexDirection: 'column' })}
`;
