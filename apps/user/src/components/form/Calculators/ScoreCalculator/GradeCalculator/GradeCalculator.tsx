import { useNewSubjectListStore, useSetFormStore, useSubjectListStore } from '@/store';
import { Subject } from '@/types/form/client';
import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import NewGradeCalculatorItem from './NewGradeCalculatorItem/NewGradeCalculatorItem';

const GradeCalculator = () => {
    const [newSubjectList, setNewSubjectList] = useNewSubjectListStore();
    const [subjectList, setSubjectList] = useSubjectListStore();
    const setForm = useSetFormStore();

    const newSubjectIdRef = useRef(newSubjectList.length);
    const handleAddNewSubjectButtonClick = () => {
        const newSubject: Subject = {
            id: newSubjectIdRef.current++,
            subjectName: '',
            achievementLevel21: null,
            achievementLevel22: null,
            achievementLevel31: null,
            score: null,
        };
        setNewSubjectList((prev) => [...prev, newSubject]);
    };

    useEffect(() => {
        const studentSubjectList = [...subjectList, ...newSubjectList].map(
            ({ id, ...rest }) => rest,
        );
        setForm((prev) => ({ ...prev, grade: { ...prev.grade, subjectList: studentSubjectList } }));
    }, [newSubjectList, subjectList]);

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
    ${flex({ flexDirection: 'column' })};
    width: 816px;
    height: 100%;
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
