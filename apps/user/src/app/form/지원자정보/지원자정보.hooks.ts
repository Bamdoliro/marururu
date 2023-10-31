import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSetFormStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useCTAButton = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const { saveFormMutate } = useSaveFormMutation();

  const handleMoveNextStep = () => {
    setFormStep('보호자정보');
    saveFormMutate(form);
  };

  return { handleMoveNextStep };
};

export const useInput = () => {
  const setForm = useSetFormStore();

  const handle지원자정보Change: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, applicant: { ...prev.applicant, [name]: value } }));
  };

  return { handle지원자정보Change };
};
