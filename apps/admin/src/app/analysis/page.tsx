'use client';

import AppLayout from '@/layouts/AppLayout';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import withAuth from '@/hocs/withAuth';

const AnalysisPage = () => {
  return (
    <AppLayout>
      <StyledAnalysisPage>아직 준비되지 않은 페이지입니다 😅</StyledAnalysisPage>
    </AppLayout>
  );
};

export default withAuth(AnalysisPage);

const StyledAnalysisPage = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  height: 100vh;
`;
