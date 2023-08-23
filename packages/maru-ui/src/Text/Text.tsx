import { font } from '@maru/theme';
import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Font = keyof typeof font;

interface PropsType extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    color?: string;
    fontType: Font;
    width?: CSSProperties['width'];
    textAlign?: CSSProperties['textAlign'];
    ellipsis?: boolean;
}

const Text = ({ children, color, fontType, textAlign, width, ellipsis = false }: PropsType) => {
    return (
        <StyledText style={{ color, textAlign, width }} fontType={fontType} ellipsis={ellipsis}>
            {children}
        </StyledText>
    );
};

export default Text;

const StyledText = styled.p<{ fontType: Font; ellipsis: boolean }>`
    ${({ fontType }) => font[fontType]}
    ${(props) =>
        props.ellipsis &&
        css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        `}
`;
