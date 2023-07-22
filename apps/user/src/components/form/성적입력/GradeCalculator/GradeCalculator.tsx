import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import { useEffect, useRef, useState } from 'react';
import NewGradeCalculatorItem from './NewGradeCalculatorItem/NewGradeCalculatorItem';
import { subjectListInitialData } from '@/constants/form/지원자정보';
import styled from 'styled-components';
import { useAddNewSubject } from './GradeCalculator.hooks';

export interface SubjectDataType {
    id: number;
    subjectName: string;
    grade2_1: string;
    grade2_2: string;
    grade3_1: string;
}

const GradeCalculator = () => {
    const [subjectListData, setSubjectListData] =
        useState<SubjectDataType[]>(subjectListInitialData);
    const [newSubjectListData, setNewSubjectListData] = useState<SubjectDataType[]>([]);

    const { handleAddNewSubjectButtonClick } = useAddNewSubject(setNewSubjectListData);

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
                        achievementLevels={
                            isSpecialSubject ? ['A', 'B', 'C'] : ['A', 'B', 'C', 'D', 'E']
                        }
                        subjectListData={subjectListData}
                        setSubjectListData={setSubjectListData}
                    />
                );
            })}
            {/* 사용자가 과목을 추가했을때 나타나는 item */}
            {newSubjectListData.map((item, index) => (
                <NewGradeCalculatorItem
                    id={item.id}
                    key={`new-subject ${index}`}
                    achievementLevels={['A', 'B', 'C', 'D', 'E']}
                    newSubjectListData={newSubjectListData}
                    setNewSubjectListData={setNewSubjectListData}
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
