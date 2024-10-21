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
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROUTES } from '@/constants/common/constant';
import React from 'react';
import { Suspense } from '@suspensive/react';
import { Cookie } from '@/apis/cookie/cookie';

const MainPage = () => {
  return (
    <Suspense.CSROnly>
      <MainContent />
    </Suspense.CSROnly>
  );
};

const MainContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const message = searchParams.get('message');
  const warning = searchParams.get('warning');
  const result = searchParams.get('result');

  useEffect(() => {
    if (message) {
      alert(message);
      router.replace(ROUTES.MAIN);
    } else if (warning) {
      alert(warning);
      localStorage.clear();
      Cookie.removeItem('refresh-token');
      router.replace(ROUTES.LOGIN);
    } else if (result) {
      alert(result);
      router.replace(ROUTES.MAIN);
    }
  }, [message, warning, router, result]);

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
