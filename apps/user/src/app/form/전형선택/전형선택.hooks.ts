import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSetFormStore } from '@/store';
import { ChangeEventHandler } from 'react';

export const useInput = () => {
  const setForm = useSetFormStore();

  const handleFormTypeDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return { handleFormTypeDataChange };
};

export const useCTAButton = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const { saveFormMutate } = useSaveFormMutation();

  const handleNextButtonClick = () => {
    setFormStep('성적입력');
    saveFormMutate(form);
  };

  const handlePreviousButtonClick = () => {
    setFormStep('출신학교및학력');
  };

  return { handleNextButtonClick, handlePreviousButtonClick };
};
