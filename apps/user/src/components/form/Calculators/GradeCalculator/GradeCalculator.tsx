import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import NewGradeCalculatorItem from './NewGradeCalculatorItem/NewGradeCalculatorItem';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Subject } from '@/types/form/client';
import styled from 'styled-components';

interface PropsType {
    subjectList: Subject[];
    setSubjectList: Dispatch<SetStateAction<Subject[]>>;
    newSubjectList: Subject[];
    setNewSubjectList: Dispatch<SetStateAction<Subject[]>>;
}

const GradeCalculator = ({
    subjectList,
    setSubjectList,
    newSubjectList,
    setNewSubjectList,
}: PropsType) => {
    const footerRef = useRef<HTMLDivElement>(null);

    const newSubjectIdRef = useRef(0);
    const handleAddNewSubjectButtonClick = () => {
        const newSubject = {
            id: newSubjectIdRef.current++,
            subjectName: '',
            achievementLevel21: 'A',
            achievementLevel22: 'A',
            achievementLevel31: 'A',
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
                            isSpecialSubject
                                ? ['없음', 'A', 'B', 'C']
                                : ['없음', 'A', 'B', 'C', 'D', 'E']
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
                    achievementLevels={['없음', 'A', 'B', 'C', 'D', 'E']}
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
