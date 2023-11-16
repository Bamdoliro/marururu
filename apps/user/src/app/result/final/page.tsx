'use client';

import { FinalResultTable, ResultMain } from '@/components/result';
import { AppLayout } from '@/layouts';
import type { ResultStep } from '@/types/result/client';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';

const FinalResultPage = () => {
  const [finalResultStep, setFinalResultStep] = useState<ResultStep>('MAIN');

  return (
    <AppLayout header footer>
      <StyledFinalResultPage>
        <Column gap={12} alignItems="center">
          <Text fontType="H5" color={color.gray900}>
            2024학년도 부산소프트웨어마이스터고등학교
          </Text>
          <Text fontType="D3" color={color.gray900}>
            최종 합격자 발표
          </Text>
        </Column>
        <SwitchCase
          value={finalResultStep}
          caseBy={{
            MAIN: <ResultMain option="FINAL" setResultStep={setFinalResultStep} />,
            RESULT: <FinalResultTable />,
          }}
        />
      </StyledFinalResultPage>
    </AppLayout>
  );
};

export default FinalResultPage;

const StyledFinalResultPage = styled.div`
  padding-top: 82px;
  ${flex({ flexDirection: 'column', alignItems: 'center' })};
  gap: 48px;
  width: 100%;
  height: 100%;
`;
