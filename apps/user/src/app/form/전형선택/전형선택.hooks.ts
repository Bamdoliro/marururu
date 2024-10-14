import { Storage } from '@/apis/storage/storage';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSetFormStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useInput = () => {
  const setForm = useSetFormStore();

  const handleFormTypeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return { handleFormTypeChange };
};

export const useCTAButton = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const { saveFormMutate } = useSaveFormMutation();
  const correct = Storage.getItem('correct');

  const handleMoveNextStep = () => {
    if (correct) {
      setFormStep('초안작성완료');
      saveFormMutate(form);
      localStorage.removeItem('correct');
    } else {
      setFormStep('성적입력');
      saveFormMutate(form);
    }
  };

  const handleMovePreviousStep = () => {
    setFormStep('출신학교및학력');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};
