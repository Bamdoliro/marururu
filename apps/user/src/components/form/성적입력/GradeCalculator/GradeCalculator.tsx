import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import { ChangeEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import NewGradeCalculatorItem from './NewGradeCalculatorItem/NewGradeCalculatorItem';

const subjectListInitialData = [
    { id: 0, subjectName: '국어', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 1, subjectName: '사회', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 2, subjectName: '역사', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 3, subjectName: '도덕', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 4, subjectName: '수학', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 5, subjectName: '과학', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 6, subjectName: '기술가정', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 7, subjectName: '영어', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 8, subjectName: '체육', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 9, subjectName: '음악', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 10, subjectName: '미술', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
    { id: 11, subjectName: '정보', grade2_1: 'A', grade2_2: 'A', grade3_1: 'A' },
];

export interface SubjectDataType {
    id: number;
    subjectName: string;
    grade2_1: string;
    grade2_2: string;
    grade3_1: string;
}

const GradeCalculator = () => {
    // subject에 들어가면 과목을 unique key로
    // new subejct는 id를 unique key로

    const [subjectListData, setSubjectListData] =
        useState<SubjectDataType[]>(subjectListInitialData);

    // const [newSubjects, setNewSubjects] = useState<SubjectDataType[]>([]);

    // const newSubjectId = useRef(0);
    // const handleAddNewSubjectButtonClick = () => {
    //     setNewSubjects([
    //         ...newSubjects,
    //         {
    //             id: newSubjectId.current,
    //             subjectName: '',
    //             grade2_1: '',
    //             grade2_2: '',
    //             grade3_1: '',
    //         },
    //     ]);
    //     newSubjectId.current += 1;
    // };

    // const handleDeleteNewSubjectButtonClick = (id: number) => {
    //     setNewSubjects((prev) => prev.filter((item) => item.id !== id));
    // };

    // const handleSubjectDataChange = (id: number) => {};

    return (
        <StyledGradeCalculator>
            <GradeCalculatorHeader />
            {/* 기존 과목 item */}
            {subjectListData.map((item, index) => {
                const isSpecialSubject =
                    item.subjectName === '미술' ||
                    item.subjectName === '음악' ||
                    item.subjectName === '체육';
                return (
                    <GradeCalculatorItem
                        id={item.id}
                        key={`subject ${index}`}
                        grades={isSpecialSubject ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D', 'E']}
                        subjectListData={subjectListData}
                        setSubjectListData={setSubjectListData}
                    />
                );
            })}
            {/* 사용자가 과목을 추가했을때 나타나는 item */}
            {/* {newSubjects.map((item, index) => (
                <NewGradeCalculatorItem
                    id={item.id}
                    key={`new-subject ${index}`}
                    grades={['A', 'B', 'C', 'D', 'E']}
                    subjects={subjects}
                    newSubjects={newSubjects}
                    handleDeleteNewSubjectButtonClick={handleDeleteNewSubjectButtonClick}
                />
            ))} */}
            <GradeCalculatorFooter>
                <Button /*onClick={handleAddNewSubjectButtonClick}*/ icon="ADD_ICON" size="SMALL">
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
