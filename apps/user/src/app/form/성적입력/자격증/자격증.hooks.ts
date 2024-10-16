import { Storage } from '@/apis/storage/storage';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSet성적입력StepStore } from '@/store';

export const useCTAButton = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const set성적입력Step = useSet성적입력StepStore();
  const { saveFormMutate } = useSaveFormMutation();
  const correct = Storage.getItem('correct');

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
      if (correct) {
        setFormStep('초안작성완료');
        saveFormMutate(form);
        localStorage.removeItem('correct');
      } else {
        setFormStep('자기소개서');
        saveFormMutate(form);
      }
    }
  };

  const handleMovePreviousStep = () => {
    set성적입력Step('봉사시간');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
