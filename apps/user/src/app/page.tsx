'use client';

import MainLayout from '@/layouts/MainLayout';
import Notice from '@/components/main/Notice';
import Schedule from '@/components/main/Schedule';
import initMockAPI from '@/mocks';
import SchoolRecruitCard from '@/components/main/SchoolRecruitCard';
import Faq from '@/components/main/Faq';
import { Row } from '@maru/ui';
import styled from 'styled-components';
import { flex } from '@maru/utils';

if (process.env.NODE_ENV === 'development') {
    initMockAPI();
}

const Home = () => {
    return (
        <MainLayout>
            <StyledMainPage>
                <Row gap="48px" height="451px" width="100%" justifyContent="center">
                    <SchoolRecruitCard />
                    <Schedule />
                </Row>
                <Row gap="48px" width="100%" height="242px" justifyContent="center">
                    <Notice />
                    <Faq />
                </Row>
            </StyledMainPage>
        </MainLayout>
    );
};

export default Home;

const StyledMainPage = styled.div`
    ${flex({ flexDirection: 'column', alignItems: 'center' })}
    gap: 60px;
    width: 100%;
    height: 100%;
`;
