import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import { ChangeEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import NewGradeCalculatorItem from './NewGradeCalculatorItem/NewGradeCalculatorItem';

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
    id: number;
    subjectName: string;
    grade2_1: string;
    grade2_2: string;
    grade3_1: string;
}

const GradeCalculator = () => {
    const [subjectListData, setSubjectListData] = useState<SubjectDataType[]>([]);

    const [subjectData, setSubjectData] = useState<SubjectDataType>({
        id: 0,
        subjectName: '',
        grade2_1: '',
        grade2_2: '',
        grade3_1: '',
    });
    const [newSubjects, setNewSubjects] = useState<SubjectDataType[]>([]);

    const newSubjectId = useRef(0);
    const handleAddNewSubjectButtonClick = () => {
        setNewSubjects([
            ...newSubjects,
            {
                id: newSubjectId.current,
                subjectName: '',
                grade2_1: '',
                grade2_2: '',
                grade3_1: '',
            },
        ]);
        newSubjectId.current++;
    };

    const handleDeleteNewSubjectButtonClick = (id: number) => {
        setNewSubjects((prev) => prev.filter((item) => item.id !== id));
    };

    const handleNewSubjectNameChange = (id: number, e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        const isSameNewSubject = newSubjects.find((item) => item.subjectName === value);
        const isSameGeneralSubject = subjects.find((item) => item === value);

        if (isSameNewSubject || isSameGeneralSubject) {
            alert('해당 과목이 이미 존재합니다.');
            return;
        }

        const newSubjectData = newSubjects.find((item) => item.id === id);
        console.log(newSubjectData);

        // setSubjectListData([...subjectListData, {}]);
    };

    const handleSubjectDataChange = (id: number) => {};

    return (
        <StyledGradeCalculator>
            <GradeCalculatorHeader />
            {/* 기존 과목 item */}
            {subjects.map((item, index) => {
                const isSpecialSubject = item === '미술' || item === '음악' || item === '체육';
                return (
                    <GradeCalculatorItem
                        key={`subject ${index}`}
                        subject={item}
                        grades={isSpecialSubject ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D', 'E']}
                    />
                );
            })}
            {/* 사용자가 과목을 추가했을때 나타나는 item */}
            {newSubjects.map((item, index) => (
                <NewGradeCalculatorItem
                    id={item.id}
                    key={`new-subject ${index}`}
                    grades={['A', 'B', 'C', 'D', 'E']}
                    handleDeleteNewSubjectButtonClick={handleDeleteNewSubjectButtonClick}
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
