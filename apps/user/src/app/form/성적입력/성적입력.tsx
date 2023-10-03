import {
    AttendanceCalculator,
    CertificateCalculator,
    FormController,
    GradePreview,
    ScoreCalculator,
    VolunteerCalculator,
} from '@/components/form';
import { SCORE_STEP_LIST } from '@/constants/form/data';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { color } from '@maru/theme';
import { Column, Text, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import styled from 'styled-components';
import { useCTAButton } from './성적입력.hooks';

const 성적입력 = () => {
    const form = useFormValueStore();
    const [currentScoreStep, setCurrentScoreStep] = useState('성적 입력');
    const { handleNextButtonClick, handlePreviousButtonClick } = useCTAButton();

    const handleScoreStepButtonClick = (scoreStep: string) => {
        if (
            form.education.graduationType === 'QUALIFICATION_EXAMINATION' &&
            (scoreStep === '출결상황' || scoreStep === '봉사시간')
        ) {
            alert('검정고시 지원자는 입력하지 않아도돼요');
            return;
        }
        setCurrentScoreStep(scoreStep);
    };

    return (
        <FormLayout title="성적 입력">
            <Column gap={24}>
                <Text fontType="p3" color={color.red}>
                    *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
                    <br />
                    *성취수준이 없고 원점수로 되어있는 학기나 학년은 아래표를 참고 바랍니다.
                </Text>
                <Column gap={12}>
                    <Text fontType="H4" color={color.gray900}>
                        모의 성적 계산
                    </Text>
                    <GradePreview />
                </Column>
            </Column>
            <NavigationBar>
                {SCORE_STEP_LIST.map((scoreStep, index) => (
                    <UnderlineButton
                        key={`score-step ${index}`}
                        active={scoreStep === currentScoreStep}
                        onClick={() => handleScoreStepButtonClick(scoreStep)}>
                        {scoreStep}
                    </UnderlineButton>
                ))}
            </NavigationBar>
            <SwitchCase
                value={currentScoreStep}
                caseBy={{
                    성적입력: <ScoreCalculator option="FORM" />,
                    출결상황: <AttendanceCalculator />,
                    봉사시간: <VolunteerCalculator />,
                    자격증: <CertificateCalculator />,
                }}
                defaultComponent={<ScoreCalculator option="FORM" />}
            />
            <FormController
                onPrevious={handlePreviousButtonClick}
                onNext={handleNextButtonClick}
                step="성적입력"
            />
        </FormLayout>
    );
};

export default 성적입력;

const NavigationBar = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    margin: 64px 0 16px;
    background-color: ${color.white};
`;
