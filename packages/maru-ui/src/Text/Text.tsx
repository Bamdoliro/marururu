import { font } from '@maru/theme';
import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type Font = keyof typeof font;

interface PropsType extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    color?: string;
    fontType: Font;
    width?: CSSProperties['width'];
}

const Text = ({ children, color, fontType, width }: PropsType) => {
    return (
        <StyledText style={{ color, width }} fontType={fontType}>
            {children}
        </StyledText>
    );
};

export default Text;

const StyledText = styled.p<{ fontType: Font }>`
    ${({ fontType }) => font[fontType]}
`;
