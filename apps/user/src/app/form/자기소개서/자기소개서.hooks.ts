import { useSaveFormMutation } from '@/services/form/mutations';
import { useSetFormStore, useSetFormStepStore, useFormValueStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useCTAButton = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const { saveFormMutate } = useSaveFormMutation();

  const handleMoveNextStep = () => {
    setFormStep('초안작성완료');
    saveFormMutate(form);
  };

  const handleMovePreviousStep = () => {
    setFormStep('성적입력');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};

export const useInput = () => {
  const setForm = useSetFormStore();

  const handle자기소개서Change: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, document: { ...prev.document, [name]: value } }));
  };

  return { handle자기소개서Change };
};
