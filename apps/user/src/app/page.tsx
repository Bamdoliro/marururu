'use client';

import { Dday, Faq, Notice, Schedule } from '@/components/main';
import { AppLayout } from '@/layouts';
import { Row } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

if (process.env.NODE_ENV === 'development') {
    // initMockAPI();
}

const MainPage = () => {
    return (
        <AppLayout header footer style={{ padding: '0px 100px', marginTop: 52 }}>
            <StyledMainPage>
                <Row gap={48} width="100%" height={450} justifyContent="center">
                    <Dday />
                    <Schedule />
                </Row>
                <Row gap={48} width="100%" height={242} justifyContent="center">
                    <Notice />
                    <Faq />
                </Row>
            </StyledMainPage>
        </AppLayout>
    );
};

export default MainPage;

const StyledMainPage = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })};
    padding-bottom: 227px;
    gap: 60px;
    width: 100%;
    height: 100%;
`;
