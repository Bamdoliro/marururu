'use client';

import {
  AttendanceCalculator,
  CertificateCalculator,
  GradePreview,
  ScoreCalculator,
  VolunteerCalculator,
} from '@/components/form';
import { SCORE_STEP_LIST } from '@/constants/form/data';
import { AppLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { color } from '@maru/design-token';
import { Column, Text, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';
const ScoreSimulation = () => {
  const form = useFormValueStore();
  const [currentScoreStep, setCurrentScoreStep] = useState('성적 입력');

  const handleMoveScoreStep = (scoreStep: string) => {
    if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
      if (scoreStep === '출결상황' || scoreStep === '봉사시간') {
        alert('검정고시 합격자는 기본 점수가 부여돼요.');
        return;
      }
      setCurrentScoreStep(scoreStep);
    } else {
      setCurrentScoreStep(scoreStep);
    }
  };

  return (
    <AppLayout header footer>
      <ScoreSimulationPage>
        <Column>
          <Text fontType="H1" color={color.gray900}>
            성적 모의 계산
          </Text>
          <Text fontType="p2" color={color.gray600}>
            성적을 입력하면 교과 성적 산출식으로 계산된 결과를 실시간으로 볼 수 있습니다.
          </Text>
        </Column>
        <Column gap={24}>
          <Text fontType="p3" color={color.red}>
            *교과 성적 산출 방식에 대한 자세한 정보는 모집요강에서 확인해주시기 바랍니다.
            <br /> *특례입학 대상자는 일반 전형 교과 성적 산출식이 적용됩니다.
            <br />
            *입학전형 요강을 참고하여 신중하게 입력하여 주시기 바랍니다.
          </Text>
          <GradePreview />
        </Column>
        <Column gap={24}>
          <NavigationBar>
            {SCORE_STEP_LIST.map((scoreStep, index) => (
              <UnderlineButton
                key={`field-data ${index}`}
                active={scoreStep === currentScoreStep}
                onClick={() => handleMoveScoreStep(scoreStep)}
              >
                {scoreStep}
              </UnderlineButton>
            ))}
          </NavigationBar>
          <SwitchCase
            value={currentScoreStep}
            caseBy={{
              성적입력: <ScoreCalculator option="SIMULATION" />,
              출결상황: <AttendanceCalculator />,
              봉사시간: <VolunteerCalculator />,
              자격증: <CertificateCalculator />,
            }}
            defaultComponent={<ScoreCalculator option="SIMULATION" />}
          />
        </Column>
      </ScoreSimulationPage>
    </AppLayout>
  );
};

export default ScoreSimulation;

const ScoreSimulationPage = styled.div`
  ${flex({ flexDirection: 'column' })};
  gap: 48px;
  width: 816px;
  padding: 82px 0 172px;
  margin: 0 auto;
`;

const NavigationBar = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  height: 54px;
  background-color: ${color.white};
`;
