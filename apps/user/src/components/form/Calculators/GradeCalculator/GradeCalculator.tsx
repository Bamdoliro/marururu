import { Subject } from '@/types/form/client';
import { color, font } from '@maru/theme';
import { Button, Column } from '@maru/ui';
import { flex } from '@maru/utils';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import NewGradeCalculatorItem from './NewGradeCalculatorItem/NewGradeCalculatorItem';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNewSubjectStore, useSubjectStore } from '@/store';

const GradeCalculator = () => {
    const [newSubjectList, setNewSubjectList] = useNewSubjectStore();
    const [subjectList, setSubjectList] = useSubjectStore();
    const footerRef = useRef<HTMLDivElement>(null);

    const newSubjectIdRef = useRef(0);
    const handleAddNewSubjectButtonClick = () => {
        const newSubject: Subject = {
            id: newSubjectIdRef.current++,
            subjectName: '',
            achievementLevel21: 'A',
            achievementLevel22: 'A',
            achievementLevel31: 'A',
        };
        setNewSubjectList((prev) => [...prev, newSubject]);
    };

    const isMount = useRef(true);

    useEffect(() => {
        if (isMount.current) {
            isMount.current = false;
            return;
        }
        if (newSubjectList.length) footerRef.current?.scrollIntoView();
    }, [newSubjectList]);

    return (
        <StyledGradeCalculator>
            <Desc style={{ marginBottom: 16 }}>
                *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
                <br />
                *성취수준이 없고 원점수로 되어있는 학기나 학년은 아래표를 참고 바랍니다.
            </Desc>
            <Column>
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
            </Column>
        </StyledGradeCalculator>
    );
};

export default GradeCalculator;

const StyledGradeCalculator = styled.div`
    ${flex({ flexDirection: 'column' })};
    gap: 16px;
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

const Desc = styled.p`
    color: ${color.red};
    ${font.p3}
`;
