'use client';

import {
  ApplicationBox,
  ApplicationSubmittionBox,
  FaqBox,
  GuidelineBox,
  NoticeBox,
  ScheduleBox,
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
          <ApplicationSubmittionBox />
          <ScheduleBox />
        </Row>
        <Row gap={48} width="100%" justifyContent="center">
          <GuidelineBox />
          <ApplicationBox />
          <SimulatorBox />
        </Row>
        <Row gap={48} width="100%" height={242} justifyContent="center">
          <NoticeBox />
          <FaqBox />
        </Row>
      </StyledMainPage>
    </AppLayout>
  );
};

export default MainPage;

const StyledMainPage = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  padding: 52px 96px 240px;
  gap: 80px;
`;
