import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import GradeCalculatorHeader from '../GradeCalculatorHeader/GradeCalculatorHeader';
import NewGradeCalculatorItem from '../NewGradeCalculatorItem/NewGradeCalculatorItem';
import GradeCalculatorItem from '../GradeCalculatorItem/GradeCalculatorItem';
import { subjectListInitialData } from '@/constants/form';
import { Subject } from '@/types/form';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const GradeCalculator = () => {
    const [subjectList, setSubjectList] = useState<Subject[]>(subjectListInitialData);
    const [newSubjectList, setNewSubjectList] = useState<Subject[]>([]);
    const footerRef = useRef<HTMLDivElement>(null);

    const newSubjectIdRef = useRef(0);
    const handleAddNewSubjectButtonClick = () => {
        const newSubject = {
            id: newSubjectIdRef.current++,
            subjectName: '',
            grade2_1: 'A',
            grade2_2: 'A',
            grade3_1: 'A',
        };
        setNewSubjectList((prev) => [...prev, newSubject]);
    };

    useEffect(() => {
        if (newSubjectList.length) footerRef.current?.scrollIntoView();
    }, [newSubjectList]);

    return (
        <StyledGradeCalculator>
            <GradeCalculatorHeader />
            {/* 기존 과목 item */}
            {subjectList.map((item, index) => {
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
                        subjectList={subjectList}
                        setSubjectList={setSubjectList}
                    />
                );
            })}
            {/* 사용자가 과목을 추가했을때 나타나는 item */}
            {newSubjectList.map((item, index) => (
                <NewGradeCalculatorItem
                    id={item.id}
                    key={`new-subject ${index}`}
                    achievementLevels={['A', 'B', 'C', 'D', 'E']}
                    newSubjectList={newSubjectList}
                    setNewSubjectList={setNewSubjectList}
                />
            ))}
            <GradeCalculatorFooter ref={footerRef}>
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
