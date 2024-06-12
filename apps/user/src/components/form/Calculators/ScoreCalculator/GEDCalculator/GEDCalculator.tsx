import {
  useNewGEDSubjectListValueStore,
  useSetFormStore,
  useGEDSubjectListValueStore,
} from '@/store';
import { color } from '@maru/design-token';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect } from 'react';
import styled from 'styled-components';
import NewGEDCalculatorItem from './NewGEDCalculatorItem/NewGEDCalculatorItem';
import { useAddNewGEDSubject } from './GEDCalculator.hooks';
import GEDCalculatorHeader from './GEDCalculatorHeader/GEDCalculatorHeader';
import GEDCalculatorItem from './GEDCalculatorItem/GEDCalculatorItem';

const GEDCalculator = () => {
  const newGEDSubjectList = useNewGEDSubjectListValueStore();
  const GEDSubjectList = useGEDSubjectListValueStore();
  const setForm = useSetFormStore();
  const { handleAddNewGEDSubject } = useAddNewGEDSubject();

  useEffect(() => {
    const studentSubjectList = [...GEDSubjectList, ...newGEDSubjectList].map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ id, ...rest }) => rest
    );
    setForm((prev) => ({
      ...prev,
      grade: { ...prev.grade, subjectList: studentSubjectList },
    }));
  }, [GEDSubjectList, newGEDSubjectList, setForm]);

  return (
    <StyledGEDCalculator>
      <GEDCalculatorHeader />
      {GEDSubjectList.map(({ id, subjectName, score }) => (
        <GEDCalculatorItem id={id} subject={subjectName} score={score} />
      ))}
      {newGEDSubjectList.map(({ id, score }) => (
        <NewGEDCalculatorItem id={id} score={score} />
      ))}
      <GEDCalculatorFooter>
        <Button onClick={handleAddNewGEDSubject} icon="ADD_ICON" size="SMALL">
          과목추가
        </Button>
      </GEDCalculatorFooter>
    </StyledGEDCalculator>
  );
};

export default GEDCalculator;

const StyledGEDCalculator = styled.div`
  width: 816px;
  height: 100%;
`;

const GEDCalculatorFooter = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 816px;
  height: 64px;
  background-color: ${color.gray100};
  border-radius: 0px 0px 12px 12px;
  border: 1px dashed ${color.gray300};
  border-top: none;
`;
