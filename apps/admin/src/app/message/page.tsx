'use client';

import AppLayout from '@/layouts/AppLayout';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import Message from '@/components/message/page';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Cookie } from '@/apis/cookie/cookie';
import { refreshToken } from '@/apis/token';

const MessagePage = () => {
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
      <StyledMessagePage>
        <Message />
      </StyledMessagePage>
    </AppLayout>
  );
};

export default MessagePage;

const StyledMessagePage = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  height: 100vh;
`;
