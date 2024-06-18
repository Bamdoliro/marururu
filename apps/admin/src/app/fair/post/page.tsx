'use client';

import AppLayout from '@/layouts/AppLayout';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { Text } from '@maru/ui';

const FairPostPage = () => {
  return (
    <AppLayout>
      <StyledFairPost>
        <Text fontType="H1">입학전형 설명회 생성</Text>
      </StyledFairPost>
    </AppLayout>
  );
};

export default FairPostPage;

const StyledFairPost = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  gap: 24px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;
