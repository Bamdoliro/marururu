import { Footer } from '@/components/common';
import { Header } from '@/components/common/';
import { color } from '@maru/theme';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    header?: boolean;
    footer?: boolean;
    children: ReactNode;
    backgroundColor?: string;
}

const AppLayout = ({
    children,
    backgroundColor = color.white,
    header = false,
    footer = false,
}: Props) => {
    return (
        <>
            {header && <Header />}
            <StyledAppLayout style={{ backgroundColor }}>{children}</StyledAppLayout>
            {footer && <Footer />}
        </>
    );
};

export default AppLayout;

const StyledAppLayout = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
`;
