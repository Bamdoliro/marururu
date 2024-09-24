import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSet성적입력StepStore } from '@/store';

export const useCTAButton = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const set성적입력Step = useSet성적입력StepStore();
  const { saveFormMutate } = useSaveFormMutation();

  const handleMoveNextStep = () => {
    const isEmptySubjectName = form.grade.subjectList.some(({ subjectName }) => {
      if (subjectName === '') {
        alert('비어있는 과목명이 있어요');
        setFormStep('성적입력');
        return true;
      }
      return false;
    });

    if (!isEmptySubjectName) {
      set성적입력Step('자격증');
      saveFormMutate(form);
    }
  };

  const handleMovePreviousStep = () => {
    set성적입력Step('출결상황');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
