'use client';

import { FairPost } from '@/components/fair-management';
import AppLayout from '@/layouts/AppLayout';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

const PostFairPage = () => {
  return (
    <AppLayout>
      <StyledPostFairPage>
        <Text fontType="H1">입학전형 설명회 생성</Text>
        <Center>
          <FairPost />
        </Center>
      </StyledPostFairPage>
    </AppLayout>
  );
};

export default PostFairPage;

const StyledPostFairPage = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;

const Center = styled.div`
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
`;
