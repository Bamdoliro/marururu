import { Footer } from '@/components/common';
import { Header } from '@/components/common/';
import { color } from '@maru/theme';
import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
    header?: boolean;
    footer?: boolean;
    children: ReactNode;
    backgroundColor?: string;
    style?: CSSProperties;
}

const AppLayout = ({
    children,
    backgroundColor = color.white,
    style,
    header = false,
    footer = false,
}: PropsType) => {
    return (
        <>
            {header && <Header />}
            <StyledAppLayout style={{ backgroundColor, ...style }}>{children}</StyledAppLayout>
            {footer && <Footer />}
        </>
    );
};

export default AppLayout;

const StyledAppLayout = styled.section`
    width: 100%;
    min-height: 100vh;
`;
