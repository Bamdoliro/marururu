import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import { useState } from 'react';
import styled from 'styled-components';

const subjects = [
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
    grade: number;
    semester: number;
    subjectName: string;
    achievementLevel: string;
}

const GradeCalculator = () => {
    const [subjectListData, setSubjectListData] = useState<SubjectDataType[]>([]);
    const [newSubjects, setNewSubjects] = useState<string[]>([]);

    const handleAddNewSubjectButtonClick = () => {
        setNewSubjects([...newSubjects, '']);
    };

    const handleDeleteNewSubjectButtonClick = (id: number) => {
        setNewSubjects([...newSubjects.filter((_, index) => id !== index)]);
    };

    return (
        <StyledGradeCalculator>
            <GradeCalculatorHeader />
            {/* 기존 과목 item */}
            {subjects.map((item, index) => {
                const isSpecialSubject = item === '미술' || item === '음악' || item === '체육';
                return (
                    <GradeCalculatorItem
                        option={isSpecialSubject ? 'SPECIAL' : 'GENERAL'}
                        key={`subject ${index}`}
                        subject={item}
                        grades={isSpecialSubject ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D', 'E']}
                    />
                );
            })}
            {/* 사용자가 과목을 추가했을때 나타나는 item */}
            {newSubjects.map((_, index) => (
                <GradeCalculatorItem
                    option="NEW"
                    key={`new-subject ${index}`}
                    grades={['A', 'B', 'C', 'D', 'E']}
                    handleDeleteNewSubjectButtonClick={() =>
                        handleDeleteNewSubjectButtonClick(index)
                    }
                />
            ))}
            <GradeCalculatorFooter>
                <Button onClick={handleAddNewSubjectButtonClick} icon="ADD_ICON" size="SMALL">
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
