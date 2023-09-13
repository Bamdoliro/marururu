import { SUBJECT_LIST, 검정고시_SUBJECT_LIST } from '@/constants/form/data';
import { useSetSubjectListStore } from '@/store';
import { color } from '@maru/theme';
import { Row, Switch, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { SwitchCase } from '@toss/react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GradeCalculator from './GradeCalculator/GradeCalculator';
import 검정고시Calculator from './검정고시Calculator/검정고시Calculator';

interface Props {
    option: 'SIMULATION' | 'FORM';
}

const ScoreCalculator = ({ option }: Props) => {
    const setSubjectList = useSetSubjectListStore();
    const [gradeSwitchStep, setGradeSwitchStep] = useState('졸업 예정');

    useEffect(() => {
        if (gradeSwitchStep === '졸업 예정') {
            setSubjectList(SUBJECT_LIST);
        } else if (gradeSwitchStep === '검정고시') {
            setSubjectList(검정고시_SUBJECT_LIST);
        }
    }, [gradeSwitchStep, setGradeSwitchStep]);

    return (
        <StyledScoreCalculator>
            <Row alignItems="center" justifyContent="space-between">
                <Text fontType="p3" color={color.red}>
                    *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
                    <br /> *해당 과목이 없을 시 과목추가버튼으로 성적을 입력할 수 있습니다.
                </Text>
                {option === 'SIMULATION' && (
                    <Switch
                        items={['졸업 예정', '검정고시']}
                        value={gradeSwitchStep}
                        setValue={setGradeSwitchStep}
                    />
                )}
            </Row>
            <SwitchCase
                value={gradeSwitchStep}
                caseBy={{
                    졸업예정: <GradeCalculator />,
                    검정고시: <검정고시Calculator />,
                }}
                defaultComponent={<GradeCalculator />}
            />
        </StyledScoreCalculator>
    );
};

export default ScoreCalculator;

const StyledScoreCalculator = styled.div`
    ${flex({ flexDirection: 'column' })};
    gap: 24px;
    width: 100%;
    height: 100%;
`;
