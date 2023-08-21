import { color, font } from '@maru/theme';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
}

const Message = ({ children }: PropsType) => {
    return <StyledMessage>{children}</StyledMessage>;
};

export default Message;

const StyledMessage = styled.p`
    ${font.p3};
    color: ${color.gray500};
    margin-top: 4px;
`;
