import { color } from '@maru/theme';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
    backgroundColor?: string;
    style?: CSSProperties;
}

const BaseLayout = ({ children, backgroundColor, style }: PropsType) => {
    return <StyledBaseLayout style={{ backgroundColor, ...style }}>{children}</StyledBaseLayout>;
};

export default BaseLayout;

const StyledBaseLayout = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: ${color.white};
`;
