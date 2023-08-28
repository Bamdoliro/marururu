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
    style?: CSSProperties;
}

const AppLayout = ({
    children,
    backgroundColor = color.white,
    style,
    header = false,
    footer = false,
}: Props) => {
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
    height: 100%;
    min-height: 100vh;
`;
