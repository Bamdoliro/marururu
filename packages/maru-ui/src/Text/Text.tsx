import { font } from '@maru/theme';
import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type Font = keyof typeof font;

interface PropsType extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    color?: string;
    fontType: Font;
    width?: CSSProperties['width'];
    textAlign?: CSSProperties['textAlign'];
}

const Text = ({ children, color, fontType, textAlign, width }: PropsType) => {
    return (
        <StyledText style={{ color, textAlign, width }} fontType={fontType}>
            {children}
        </StyledText>
    );
};

export default Text;

const StyledText = styled.p<{ fontType: Font }>`
    ${(props) => props.fontType && font[props.fontType]}
`;
