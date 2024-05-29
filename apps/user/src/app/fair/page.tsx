'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { styled } from 'styled-components';
import { Text } from '@maru/ui';

const FairPage = () => {
  return (
    <AppLayout header footer>
      <StyledFairPage>
        <Text fontType="H1" color={color.gray900}>
          2024학년도 부산소프트웨어마이스터고등학교 <br /> 입학전형 설명회 참가 신청
        </Text>
      </StyledFairPage>
    </AppLayout>
  );
};

export default FairPage;

const StyledFairPage = styled.div`
  position: relative;
  width: 100%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 82px 204px 240px;
`;
