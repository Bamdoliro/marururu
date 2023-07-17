import { flex } from '@maru/utils';
import { font, color } from '@maru/theme';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

export interface PropsType {
    children: ReactNode;
    width: CSSProperties['width'];
    height: CSSProperties['height'];
}

const Td = ({ children, width, height }: PropsType) => {
    return <StyledTd style={{ width, height }}>{children}</StyledTd>;
};

export default Td;

const StyledTd = styled.div`
    ${font.btn2}
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    background-color: ${color.white};
    color: ${color.gray900};
    border: 0.5px solid ${color.gray300};

    &:first-child {
        ${font.p2}
        background-color: ${color.gray50};
    }
`;
