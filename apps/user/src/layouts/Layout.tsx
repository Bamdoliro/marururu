import { Footer } from '@/components/common';
import { Header } from '@/components/common/';
import { color } from '@maru/theme';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    header?: boolean;
    footer?: boolean;
    children: ReactNode;
    backgroundColor?: CSSProperties['backgroundColor'];
}

const Layout = ({
    children,
    backgroundColor = color.white,
    header = false,
    footer = false,
}: Props) => {
    return (
        <>
            {header && <Header />}
            <StyledLayout style={{ backgroundColor }}>{children}</StyledLayout>
            {footer && <Footer />}
        </>
    );
};

export default Layout;

const StyledLayout = styled.section`
    width: 100%;
    min-height: calc(100vh - 118px);
`;
