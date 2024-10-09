'use client';

import AppLayout from '@/layouts/AppLayout';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import Message from '@/components/message/page';
import { useRefreshToken } from '@/hooks';

const MessagePage = () => {
  useRefreshToken();

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
