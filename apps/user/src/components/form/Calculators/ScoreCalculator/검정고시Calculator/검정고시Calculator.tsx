import {
    useFormValueStore,
    useNewSubjectListStore,
    useSetFormStore,
    useSubjectListValueStore,
} from '@/store';
import { Subject } from '@/types/form/client';
import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import New검정고시CalculatorItem from './New검정고시CalculatorItem/New검정고시CalculatorItem';
import 검정고시CalculatorHeader from './검정고시CalculatorHeader/검정고시CalculatorHeader';
import 검정고시CalculatorItem from './검정고시CalculatorItem/검정고시CalculatorItem';

const 검정고시Calculator = () => {
    const [newSubjectList, setNewSubjectList] = useNewSubjectListStore();
    const subjectList = useSubjectListValueStore();
    const form = useFormValueStore();
    const setForm = useSetFormStore();

    const new검정고시SubjectIdRef = useRef(newSubjectList.length);
    const handleAddNew검정고시ItemButtonClick = () => {
        if (newSubjectList.length >= 1) {
            alert('한 개만 추가 할 수 있습니다.');
            return;
        }
        const newSubject: Subject = {
            id: new검정고시SubjectIdRef.current++,
            subjectName: '',
            achievementLevel21: null,
            achievementLevel22: null,
            achievementLevel31: null,
            score: 0,
        };
        setNewSubjectList((prev) => [...prev, newSubject]);
    };

    useEffect(() => {
        const studentSubjectList = [...subjectList, ...newSubjectList].map(
            ({ id, ...rest }) => rest,
        );
        setForm((prev) => ({ ...prev, grade: { ...prev.grade, subjectList: studentSubjectList } }));
    }, [subjectList, newSubjectList]);

    return (
        <Styled검정고시Calculator>
            <검정고시CalculatorHeader />
            {subjectList.map(({ id, subjectName, score }) => (
                <검정고시CalculatorItem id={id} subject={subjectName} score={score} />
            ))}
            {newSubjectList.map(({ id, score }) => (
                <New검정고시CalculatorItem id={id} score={score} />
            ))}
            <검정고시CalculatorFooter>
                <Button onClick={handleAddNew검정고시ItemButtonClick} icon="ADD_ICON" size="SMALL">
                    과목추가
                </Button>
            </검정고시CalculatorFooter>
        </Styled검정고시Calculator>
    );
};

export default 검정고시Calculator;

const Styled검정고시Calculator = styled.div`
    width: 816px;
    height: 100%;
`;

const 검정고시CalculatorFooter = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'center' })}
    width: 816px;
    height: 64px;
    background-color: ${color.gray100};
    border-radius: 0px 0px 12px 12px;
    border: 1px dashed ${color.gray300};
    border-top: none;
`;
