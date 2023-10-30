import {
  useNew검정고시SubjectListValueStore,
  useSetFormStore,
  use검정고시SubjectListValueStore,
} from '@/store';
import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect } from 'react';
import styled from 'styled-components';
import New검정고시CalculatorItem from './New검정고시CalculatorItem/New검정고시CalculatorItem';
import { useAddNew검정고시Subject } from './검정고시Calculator.hooks';
import 검정고시CalculatorHeader from './검정고시CalculatorHeader/검정고시CalculatorHeader';
import 검정고시CalculatorItem from './검정고시CalculatorItem/검정고시CalculatorItem';

const 검정고시Calculator = () => {
  const new검정고시SubjectList = useNew검정고시SubjectListValueStore();
  const 검정고시SubjectList = use검정고시SubjectListValueStore();
  const setForm = useSetFormStore();
  const { handleAddNew검정고시SubjectButtonClick } = useAddNew검정고시Subject();

  useEffect(() => {
    const studentSubjectList = [...검정고시SubjectList, ...new검정고시SubjectList].map(
      ({ id, ...rest }) => rest
    );
    setForm((prev) => ({
      ...prev,
      grade: { ...prev.grade, subjectList: studentSubjectList },
    }));
  }, [검정고시SubjectList, new검정고시SubjectList]);

  return (
    <Styled검정고시Calculator>
      <검정고시CalculatorHeader />
      {검정고시SubjectList.map(({ id, subjectName, score }) => (
        <검정고시CalculatorItem id={id} subject={subjectName} score={score} />
      ))}
      {new검정고시SubjectList.map(({ id, score }) => (
        <New검정고시CalculatorItem id={id} score={score} />
      ))}
      <검정고시CalculatorFooter>
        <Button
          onClick={handleAddNew검정고시SubjectButtonClick}
          icon="ADD_ICON"
          size="SMALL"
        >
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
