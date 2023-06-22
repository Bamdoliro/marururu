import Header from '@/components/common/Header';
import { color } from '@maru/styles';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PropsType {
    children: ReactNode;
    backgroundColor?: string;
}

const AppLayout = ({ children, backgroundColor }: PropsType) => {
    return (
        <>
            <Header />
            <StyledAppLayout style={{ backgroundColor }}>{children}</StyledAppLayout>
        </>
    );
};

export default AppLayout;

const StyledAppLayout = styled.section`
    width: 100vw;
    min-height: 100%;
    background-color: ${color.white};
`;
