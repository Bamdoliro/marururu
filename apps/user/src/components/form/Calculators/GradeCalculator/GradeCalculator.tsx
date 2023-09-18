import { useNewSubjectListStore, useSetFormStore, useSubjectListValueStore } from '@/store';
import { Subject } from '@/types/form/client';
import { color } from '@maru/theme';
import { Button, Column, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import GradeCalculatorHeader from '../ScoreCalculator/GradeCalculator/GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from '../ScoreCalculator/GradeCalculator/GradeCalculatorItem/GradeCalculatorItem';
import NewGradeCalculatorItem from '../ScoreCalculator/GradeCalculator/NewGradeCalculatorItem/NewGradeCalculatorItem';

const GradeCalculator = () => {
    const [newSubjectList, setNewSubjectList] = useNewSubjectListStore();
    const subjectList = useSubjectListValueStore();
    const setForm = useSetFormStore();

    const newSubjectIdRef = useRef(newSubjectList.length);
    const handleAddNewSubjectButtonClick = () => {
        const newSubject: Subject = {
            id: newSubjectIdRef.current++,
            subjectName: '',
            achievementLevel21: 'A',
            achievementLevel22: 'A',
            achievementLevel31: 'A',
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
            <Text fontType="p3" color={color.red}>
                *교과성적이 없는 학기나 학년의 경우 모집요강을 반드시 확인 바랍니다.
                <br /> *해당 과목이 없을 시 과목추가버튼으로 성적을 입력할 수 있습니다.
            </Text>
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
                                    ? ['-', 'A', 'B', 'C']
                                    : ['-', 'A', 'B', 'C', 'D', 'E']
                            }
                        />
                    );
                })}
                {/* 사용자가 과목을 추가했을때 나타나는 item */}
                {newSubjectList.map((item, index) => (
                    <NewGradeCalculatorItem
                        id={item.id}
                        key={`new-subject ${index}`}
                        achievementLevels={['-', 'A', 'B', 'C', 'D', 'E']}
                    />
                ))}
                <GradeCalculatorFooter>
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
