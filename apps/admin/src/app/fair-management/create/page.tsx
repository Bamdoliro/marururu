'use client';

import AppLayout from '@/layouts/AppLayout';
import { Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

const CreateFairPage = () => {
  return (
    <AppLayout>
      <StyledCreateFairPage>
        <Text fontType="H1">입학전형 설명회 생성</Text>
      </StyledCreateFairPage>
    </AppLayout>
  );
};

export default CreateFairPage;

const StyledCreateFairPage = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;
