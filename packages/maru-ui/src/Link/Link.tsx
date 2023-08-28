import { font } from '@maru/theme';
import { flex } from '@maru/utils';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

type Font = keyof typeof font;

interface Props {
    children: ReactNode;
    onClick: () => void;
    gap?: CSSProperties['gap'];
    color?: CSSProperties['color'];
    fontType: Font;
}

const Link = ({ children, gap, onClick, color, fontType }: Props) => {
    return (
        <StyledLink style={{ gap, color }} fontType={fontType} onClick={onClick}>
            {children}
        </StyledLink>
    );
};

export default Link;

const StyledLink = styled.a<{ fontType: Font }>`
    ${flex({ alignItems: 'center' })}
    ${({ fontType }) => font[fontType]}
    cursor: pointer;
`;
