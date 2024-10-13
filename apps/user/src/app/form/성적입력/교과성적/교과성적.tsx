import { FormController, GradePreview, ScoreCalculator } from '@/components/form';
import { FormLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Column, Text, UnderlineButton } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useCTAButton } from './교과성적.hooks';
import {
  useFormValueStore,
  useNewSubjectListValueStore,
  useSubjectListValueStore,
} from '@/store';
import { useState } from 'react';

const 교과성적 = () => {
  const { handleMovePreviousStep, handleMoveNextStep } = useCTAButton();
  const subjectList = useSubjectListValueStore();
  const newSubjectList = useNewSubjectListValueStore();
  const form = useFormValueStore();
  const [subjectError, setSubjectError] = useState<boolean[]>([]);
  const [newSubjectError, setNewSubjectError] = useState<boolean[]>([]);

  const validateSubjects = () => {
    const type = form.education.graduationType === 'QUALIFICATION_EXAMINATION';

    if (type) {
      return true;
    }

    const subjectErrors = subjectList.map(
      (subject) =>
        subject.achievementLevel21 === '-' ||
        subject.achievementLevel22 === '-' ||
        subject.achievementLevel31 === '-'
    );

    const newSubjectErrors = newSubjectList.map(
      (subject) =>
        subject.achievementLevel21 === '-' ||
        subject.achievementLevel22 === '-' ||
        subject.achievementLevel31 === '-'
    );

    setSubjectError(subjectErrors);
    setNewSubjectError(newSubjectErrors);

    const hasError =
      subjectErrors.some((error) => error) || newSubjectErrors.some((error) => error);

    if (hasError) {
      alert('‘-‘을 미이수 또는 자신의 성취수준으로 입력해주세요');
    }

    return !hasError;
  };

  const handleNextStep = () => {
    if (validateSubjects()) {
      handleMoveNextStep();
    }
  };

  return (
    <FormLayout title="성적 입력">
      <Column gap={12}>
        <Text fontType="H4" color={color.gray900}>
          지원자 성적 총점
        </Text>
        <GradePreview location="GRADE" />
      </Column>
      <NavigationBar>
        <UnderlineButton active={true}>교과성적</UnderlineButton>
      </NavigationBar>
      <ScoreCalculator
        subjectError={subjectError}
        newSubjectError={newSubjectError}
        option="FORM"
      />
      <FormController
        onPrevious={handleMovePreviousStep}
        onNext={handleNextStep}
        step="성적입력"
      />
    </FormLayout>
  );
};

export default 교과성적;

const NavigationBar = styled.div`
  ${flex({ alignItems: 'center' })}
  width: 100%;
  margin: 64px 0 16px;
  background-color: ${color.white};
`;
