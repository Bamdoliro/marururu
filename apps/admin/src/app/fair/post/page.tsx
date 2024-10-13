'use client';

import AppLayout from '@/layouts/AppLayout';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { Loader, Text } from '@maru/ui';
import { Suspense } from 'react';
import { FairPost } from '@/components/fair';

const FairPostPage = () => {
  return (
    <AppLayout>
      <StyledFairPost>
        <Text fontType="H1">입학전형 설명회 생성</Text>
        <Center>
          <Suspense fallback={<Loader />}>
            <FairPost />
          </Suspense>
        </Center>
      </StyledFairPost>
    </AppLayout>
  );
};

export default FairPostPage;

const StyledFairPost = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  gap: 15px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;

const Center = styled.div`
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
`;
