import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import { color } from '@maru/theme';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
    backgroundColor?: string;
    style?: CSSProperties;
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
