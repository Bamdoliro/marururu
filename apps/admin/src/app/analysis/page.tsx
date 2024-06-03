'use client';

import AppLayout from '@/layouts/AppLayout';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useCheckAuth } from '@/hooks/useCheckAuth';

const AnalysisPage = () => {
  useCheckAuth();
  return (
    <AppLayout>
      <StyledAnalysisPage>아직 준비되지 않은 페이지입니다 😅</StyledAnalysisPage>
    </AppLayout>
  );
};

export default AnalysisPage;

const StyledAnalysisPage = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  height: 100vh;
`;
