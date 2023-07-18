import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import { useState } from 'react';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import styled from 'styled-components';

const SUBJECT_DATA = [
    '국어',
    '사회',
    '역사',
    '도덕',
    '수학',
    '과학',
    '기술가정',
    '영어',
    '체육',
    '음악',
    '미술',
    '정보',
] as const;

interface SubjectDataType {
    id: number;
    subject: string;
    score2_1: number;
    score2_2: number;
    score3_1: number;
}

const GradeCalculator = () => {
    const [addSubjectData, setAddSubjectData] = useState<SubjectDataType>({
        id: 0,
        subject: '',
        score2_1: 0,
        score2_2: 0,
        score3_1: 0,
    });

    const [addSubjectsData, setAddSubjectsData] = useState<SubjectDataType[]>([]);

    const handleAddSubjectButtonClick = () => {};

    // const isNoneGeneralSubject = subject === '미술' || '영어' || '체육';

    return (
        <StyledGradeCalculator>
            <GradeCalculatorHeader />

            {/* 기존 과목 item */}
            {SUBJECT_DATA.map((item, index) =>
                item === '미술' || item === '음악' || item === '체육' ? (
                    <GradeCalculatorItem
                        option="SPECIAL"
                        key={`subject ${index}`}
                        subject={item}
                        grades={['A', 'B', 'C']}
                    />
                ) : (
                    <GradeCalculatorItem
                        option="GENERAL"
                        key={`subject ${index}`}
                        subject={item}
                        grades={['A', 'B', 'C', 'D', 'E']}
                    />
                ),
            )}

            {/* 사용자가 과목을 추가했을때 나타나는 item */}
            {addSubjectsData.map((item, index) => (
                <GradeCalculatorItem
                    option="ADD"
                    key={`add-subject ${index}`}
                    grades={['A', 'B', 'C', 'D', 'E']}
                />
            ))}
            <GradeCalculatorFooter>
                <Button onClick={handleAddSubjectButtonClick} icon="ADD_ICON" size="SMALL">
                    과목추가
                </Button>
            </GradeCalculatorFooter>
        </StyledGradeCalculator>
    );
};

export default GradeCalculator;

const StyledGradeCalculator = styled.div`
    width: 816px;
    border-radius: 12px;
    overflow: hidden;
`;

const GradeCalculatorFooter = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: 816px;
    height: 64px;
    background-color: ${color.gray100};
    border-radius: 0px 0px 12px 12px;
    border: 1px dashed ${color.gray300};
    border-top: none;
`;
