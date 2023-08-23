import SideBar from '@/components/common/SideBar/SideBar';
import { flex } from '@maru/utils';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface PropsType {
    children: ReactNode;
}

const AppLayout = ({ children }: PropsType) => {
    return (
        <StyledAppLayout>
            <SideBar />
            <Section>{children}</Section>
        </StyledAppLayout>
    );
};

export default AppLayout;

const StyledAppLayout = styled.div`
    ${flex({ flexDirection: 'row' })}
    width: 100vw;
    height: 100vh;
`;

const Section = styled.section`
    flex: 1;
    min-width: fit-content;
    overflow: auto;
`;
