import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSetFormStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useCTAButton = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const { saveFormMutate } = useSaveFormMutation();

  const handleMoveNextStep = () => {
    setFormStep('전형선택');
    saveFormMutate(form);
  };

  const handleMovePreviousStep = () => {
    setFormStep('보호자정보');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};

export const useInput = () => {
  const setForm = useSetFormStore();

  const handle출신학교및학력Change: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, education: { ...prev.education, [name]: value } }));
  };

  return { handle출신학교및학력Change };
};
