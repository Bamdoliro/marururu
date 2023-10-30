import {
  useNewSubjectListValueStore,
  useSetFormStore,
  useSubjectListValueStore,
} from '@/store';
import { color } from '@maru/theme';
import { Button } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useAddNewSubject } from './GradeCalculator.hooks';
import GradeCalculatorHeader from './GradeCalculatorHeader/GradeCalculatorHeader';
import GradeCalculatorItem from './GradeCalculatorItem/GradeCalculatorItem';
import NewGradeCalculatorItem from './NewGradeCalculatorItem/NewGradeCalculatorItem';

const GradeCalculator = () => {
  const newSubjectList = useNewSubjectListValueStore();
  const subjectList = useSubjectListValueStore();
  const setForm = useSetFormStore();
  const { handleAddNewSubjectButtonClick } = useAddNewSubject();

  useEffect(() => {
    const studentSubjectList = [...subjectList, ...newSubjectList].map(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ({ id, ...rest }) => rest
    );

    setForm((prev) => ({
      ...prev,
      grade: { ...prev.grade, subjectList: studentSubjectList },
    }));
  }, [newSubjectList, setForm, subjectList]);

  return (
    <StyledGradeCalculator>
      <GradeCalculatorHeader />
      {/* 기존 과목 item */}
      {subjectList.map(({ id, subjectName }) => {
        const isSpecialSubject =
          subjectName === '미술' || subjectName === '음악' || subjectName === '체육';

        return (
          <GradeCalculatorItem
            id={id}
            key={`subject ${id}`}
            achievementLevels={
              isSpecialSubject ? ['-', 'A', 'B', 'C'] : ['-', 'A', 'B', 'C', 'D', 'E']
            }
          />
        );
      })}
      {/* 사용자가 과목을 추가했을때 나타나는 item */}
      {newSubjectList.map(({ id }) => (
        <NewGradeCalculatorItem
          id={id}
          achievementLevels={['-', 'A', 'B', 'C', 'D', 'E']}
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
