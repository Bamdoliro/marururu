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

const AppLayout = ({
    children,
    backgroundColor = color.white,
    header = false,
    footer = false,
}: Props) => {
    return (
        <>
            {header && <Header />}
            <StyledAppLayout backgroundColor={backgroundColor}>{children}</StyledAppLayout>
            {footer && <Footer />}
        </>
    );
};

export default AppLayout;

const StyledAppLayout = styled.section<{ backgroundColor: CSSProperties['backgroundColor'] }>`
    width: 100%;
    background-color: ${(props) => props.backgroundColor};
    min-height: calc(100vh - 118px);
`;
