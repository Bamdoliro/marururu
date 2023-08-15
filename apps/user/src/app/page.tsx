'use client';

import { Dday, Faq, Notice, Schedule } from '@/components/main';
import { AppLayout } from '@/layouts';
import { Row } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

if (process.env.NODE_ENV === 'development') {
    // initMockAPI();
}

const Home = () => {
    return (
        <AppLayout header footer style={{ padding: '0px 100px', marginTop: 52 }}>
            <StyledMainPage>
                <Row gap="48px" height="450px" width="100%" justifyContent="center">
                    <Dday />
                    <Schedule />
                </Row>
                <Row gap="48px" width="100%" height="242px" justifyContent="center">
                    <Notice />
                    <Faq />
                </Row>
            </StyledMainPage>
        </AppLayout>
    );
};

export default Home;

const StyledMainPage = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })}
    gap: 60px;
    width: 100%;
    height: 100%;
`;
