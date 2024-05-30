'use client';

import AppLayout from '@/layouts/AppLayout';
import { flex } from '@maru/utils';
import styled from 'styled-components';

const AnyPage = () => {
  return (
    <AppLayout>
      <StyledAnyPage>아직 준비되지 않은 페이지입니다 😅</StyledAnyPage>
    </AppLayout>
  );
};

export default AnyPage;

const StyledAnyPage = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  height: 100vh;
`;
// FIX : 나중에 삭제해야할 페이지
