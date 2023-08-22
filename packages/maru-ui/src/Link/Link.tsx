import { flex } from '@maru/utils';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactNode;
    onClick: () => void;
    gap?: CSSProperties['gap'];
}

const Link = ({ children, gap, onClick }: Props) => {
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
