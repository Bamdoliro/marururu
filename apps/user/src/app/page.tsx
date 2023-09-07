'use client';

import {
    Dday,
    FairBox,
    Faq,
    GuidelineBox,
    Notice,
    Schedule,
    SimulatorBox,
} from '@/components/main';
import { AppLayout } from '@/layouts';
import { Row } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';

if (process.env.NODE_ENV === 'development') {
    // initMockAPI();
}

const MainPage = () => {
    return (
        <AppLayout header footer>
            <StyledMainPage>
                <Row gap={48} width="100%" height={450} justifyContent="center">
                    <Dday />
                    <Schedule />
                </Row>
                <Row gap={48} width="100%" justifyContent="center">
                    <GuidelineBox />
                    <FairBox />
                    <SimulatorBox />
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
    padding: 0 100px;
    margin-top: 52px;
    gap: 80px;
`;
