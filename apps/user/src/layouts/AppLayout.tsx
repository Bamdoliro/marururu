import { Footer } from '@/components/common';
import { Header } from '@/components/common/';
import { color } from '@maru/theme';
import { ReactNode } from 'react';
import styled, { CSSProp } from 'styled-components';

interface PropsType {
    children: ReactNode;
    backgroundColor?: string;
    style?: Object;
}

const AppLayout = ({ children, backgroundColor = color.white, style }: PropsType) => {
    return (
        <>
            <Header />
            <StyledAppLayout style={{ backgroundColor, ...style }}>{children}</StyledAppLayout>
            <Footer />
        </>
    );
};

export default AppLayout;

const StyledAppLayout = styled.section`
    width: 100vw;
    height: 100vh;
`;
