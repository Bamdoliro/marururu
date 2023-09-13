'use client';

import {
    AttendanceCalculator,
    CertificateCalculator,
    GradePreview,
    VolunteerCalculator,
    검정고시Calculator,
} from '@/components/form';
import { SCORE_STEP_LIST } from '@/constants/form/data';
import { AppLayout } from '@/layouts';
import { color } from '@maru/theme';
import { Column, Text, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';
const ScoreSimulation = () => {
    const [currentScoreStep, setCurrentScoreStep] = useState('성적 입력');

    return (
        <AppLayout header footer>
            <ScoreSimulationPage>
                <Column>
                    <Text fontType="H1" color={color.gray900}>
                        성적 모의 계산
                    </Text>
                    <Text fontType="p2" color={color.gray600}>
                        성적을 입력하면 교과 성적 산출식으로 계산된 결과를 실시간으로 볼 수
                        있습니다.
                    </Text>
                </Column>
                <Column gap={24}>
                    <Text fontType="p3" color={color.red}>
                        *교과 성적 산출 방식에 대한 자세한 정보는 모집요강에서 확인해주시기
                        바랍니다.
                        <br /> *특례입학 대상자는 일반 전형 교과 성적 산출식이 적용됩니다.
                    </Text>
                    <GradePreview />
                </Column>
                <Column gap={24}>
                    <NavigationBar>
                        {SCORE_STEP_LIST.map((scoreStep, index) => (
                            <UnderlineButton
                                key={`field-data ${index}`}
                                active={scoreStep === currentScoreStep}
                                onClick={() => setCurrentScoreStep(scoreStep)}>
                                {scoreStep}
                            </UnderlineButton>
                        ))}
                    </NavigationBar>
                    <SwitchCase
                        value={currentScoreStep}
                        caseBy={{
                            성적입력: <검정고시Calculator />,
                            출결상황: <AttendanceCalculator />,
                            봉사시간: <VolunteerCalculator />,
                            자격증: <CertificateCalculator />,
                        }}
                        defaultComponent={<검정고시Calculator />}
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
