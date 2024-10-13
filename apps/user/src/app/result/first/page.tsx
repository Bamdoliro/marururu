'use client';

import { Cookie } from '@/apis/cookie/cookie';
import { refreshToken } from '@/apis/token';
import { FirstResultTable, ResultMain } from '@/components/result';
import { AppLayout } from '@/layouts';
import type { ResultStep } from '@/types/result/client';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FirstResultPage = () => {
  const router = useRouter();
  const [firstResultStep, setFirstResultStep] = useState<ResultStep>('MAIN');
  const [hasRefreshed, setHasRefreshed] = useState(false);

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
    <AppLayout header footer>
      <StyledFirstResultPage>
        <Column gap={12} alignItems="center">
          <Text fontType="H5" color={color.gray900}>
            2025학년도 부산소프트웨어마이스터고등학교
          </Text>
          <Text fontType="D3" color={color.gray900}>
            1차 합격자 발표
          </Text>
        </Column>
        <SwitchCase
          value={firstResultStep}
          caseBy={{
            MAIN: <ResultMain option="FIRST" setResultStep={setFirstResultStep} />,
            RESULT: <FirstResultTable />,
          }}
        />
      </StyledFirstResultPage>
    </AppLayout>
  );
};

export default FirstResultPage;

const StyledFirstResultPage = styled.div`
  padding-top: 82px;
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  gap: 48px;
  width: 100%;
  height: 100%;
`;
