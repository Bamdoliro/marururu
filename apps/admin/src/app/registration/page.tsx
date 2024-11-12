'use client';

import RegistrationTable from '@/components/registration/RegistrationTable/RegistrationTable';
import AppLayout from '@/layouts/AppLayout';
import { Loader, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { Suspense } from 'react';
import { styled } from 'styled-components';

const RegistrationPage = () => {
  return (
    <AppLayout>
      <StyledRegistrationPage>
        <Text fontType="H1">입학 등록원 관리</Text>
        <Suspense fallback={<Loader />}>
          <RegistrationTable />
        </Suspense>
      </StyledRegistrationPage>
    </AppLayout>
  );
};

export default RegistrationPage;

const StyledRegistrationPage = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  gap: 116px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;
