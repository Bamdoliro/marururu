import { HTMLAttributes, ReactNode } from 'react';
import { font, color } from '@maru/theme';
import styled from 'styled-components';

interface PropsType extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    color?: string;
    fontType: keyof typeof font;
}

const Text = ({ children, color, fontType }: PropsType) => {
    return (
        <StyledText style={{ color }} fontType={fontType}>
            {children}
        </StyledText>
    );
};

export default Text;

const StyledText = styled.p<{ fontType: keyof typeof font }>`
    ${({ fontType }) => font[fontType]}
`;
