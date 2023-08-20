import { flex } from '@maru/utils';
import { ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
    onClick: () => void;
    gap?: CSSProperties['gap'];
}

const Link = ({ children, gap, onClick }: PropsType) => {
    return (
        <StyledLink style={{ gap }} onClick={onClick}>
            {children}
        </StyledLink>
    );
};

export default Link;

const StyledLink = styled.a`
    ${flex({ alignItems: 'center' })}
    cursor: pointer;
`;
