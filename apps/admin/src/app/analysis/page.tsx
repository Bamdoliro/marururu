'use client';

import AppLayout from '@/layouts/AppLayout';
import SideMenu from '@/components/common/SideMenu/SideMenu';
import { flex } from '@maru/utils';
import { Column, Row, Text } from '@maru/ui';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import { ANALYSIS_STEP_LIST } from '@/constants/analysis/data';
import NumberOfApplicants from '@/components/analysis/NumberOfApplicants/NumberOfApplicants';
import GradeDistribution from '@/components/analysis/GradeDistribution/GradeDistribution';
import ApplyingType from '@/components/analysis/ApplyingType/ApplyingType';
import GenderRatio from '@/components/analysis/GenderRatio/GenderRatio';
import SchoolOrigin from '@/components/analysis/SchoolOrigin/SchoolOrigin';
import styled from 'styled-components';

const AnalysisPage = () => {
  const [currentAnalysisStep, setCurrentAnalysisStep] = useState('지원자 수 (경쟁률)');

  return (
    <AppLayout>
      <StyledAnalysisPage>
        <Text fontType="H1">분석</Text>
        <Row gap={48}>
          <Column gap={10}>
            {ANALYSIS_STEP_LIST.map((analysisstep, index) => (
              <SideMenu
                key={`analysis-step ${index}`}
                active={currentAnalysisStep === analysisstep}
                onClick={() => setCurrentAnalysisStep(analysisstep)}
              >
                {analysisstep}
              </SideMenu>
            ))}
          </Column>
          <SwitchCase
            value={currentAnalysisStep}
            caseBy={{
              '지원자 수 (경쟁률)': <NumberOfApplicants />,
              '성적 분포': <GradeDistribution />,
              '지원 전형 비율': <ApplyingType />,
              '지원자 성비': <GenderRatio />,
              '출신 학교 현황': <SchoolOrigin />,
            }}
          />
        </Row>
      </StyledAnalysisPage>
    </AppLayout>
  );
};
export default AnalysisPage;

const StyledAnalysisPage = styled.div`
  position: relative;
  ${flex({ flexDirection: 'column' })}
  gap: 40px;
  width: 100%;
  min-height: 100vh;
  padding: 64px 75px;
`;
