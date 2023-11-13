'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import Image from 'next/image';
import styled from 'styled-components';

const MobilePage = () => {
  return (
    <AppLayout>
      <StyledMobilPage>
        <Image src="/svg/logo.svg" alt="logo" width={160} height={47} />
        <Column gap={27}>
          <Column gap={12}>
            <Text fontType="H3" color={color.gray900} textAlign="center">
              모바일 접속 불가
            </Text>
            <Text fontType="p2" color={color.gray900} textAlign="center">
              PC 환경에서 접속해주세요
            </Text>
          </Column>
          <Text fontType="p3" color={color.gray600} textAlign="center">
            마루는 PC 환경에서 Chrome 브라우저로
            <br /> 접속하시는 것을 권장드립니다.
          </Text>
        </Column>
      </StyledMobilPage>
    </AppLayout>
  );
};

export default MobilePage;

const StyledMobilPage = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  padding-top: 200px;
  gap: 36px;
  height: 100%;
`;
