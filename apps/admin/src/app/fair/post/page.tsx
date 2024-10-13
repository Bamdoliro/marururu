'use client';

import AppLayout from '@/layouts/AppLayout';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { Loader, Text } from '@maru/ui';
import { Suspense, useEffect, useState } from 'react';
import { FairPost } from '@/components/fair';
import { useRouter } from 'next/navigation';
import { Cookie } from '@/apis/cookie/cookie';
import { refreshToken } from '@/apis/token';

const FairPostPage = () => {
  const [hasRefreshed, setHasRefreshed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const refreshIfNeeded = async () => {
      if (hasRefreshed) return;

      const accessToken = localStorage.getItem('accessToken');
      const refreshTokenValue = Cookie.getItem('refresh-token');

      if (!accessToken && refreshTokenValue) {
        await refreshToken();
        setHasRefreshed(true);
      }
    };

    refreshIfNeeded();
  }, [router, hasRefreshed]);

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
