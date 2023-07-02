import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { color } from '@maru/theme';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
    backgroundColor?: string;
    padding?: string;
}

const AppLayout = ({ children, backgroundColor = color.white, padding }: PropsType) => {
    return (
        <>
            <Header />
            <StyledAppLayout style={{ backgroundColor, padding }}>{children}</StyledAppLayout>
            <Footer />
        </>
    );
};

export default AppLayout;

const StyledAppLayout = styled.section`
    width: 100vw;
    height: 100vh;
`;
