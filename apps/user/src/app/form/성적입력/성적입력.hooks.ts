import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore } from '@/store';

export const useCTAButton = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const { saveFormMutate } = useSaveFormMutation();

  const handleNextButtonClick = () => {
    const isEmptySubjectName = form.grade.subjectList.some(({ subjectName }) => {
      if (subjectName === '') {
        alert('비어있는 과목명이 있어요');
        setFormStep('성적입력');
        return true;
      }
      return false;
    });

    if (!isEmptySubjectName) {
      setFormStep('자기소개서');
      saveFormMutate(form);
    }
  };

  const handlePreviousButtonClick = () => {
    setFormStep('전형선택');
  };

  return { handleNextButtonClick, handlePreviousButtonClick };
};
