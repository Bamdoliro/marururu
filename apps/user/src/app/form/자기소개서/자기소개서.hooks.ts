import { useSaveFormMutation } from '@/services/form/mutations';
import {
  useSetFormStore,
  useSetFormStepStore,
  useFormStore,
  useFormValueStore,
} from '@/store';
import { ChangeEventHandler } from 'react';

export const useFormSubmitAction = () => {
  const form = useFormValueStore();
  const setFormStep = useSetFormStepStore();
  const { saveFormMutate } = useSaveFormMutation();

  const handleFormSubmitButtonClick = () => {
    setFormStep('초안작성완료');
    saveFormMutate(form);
  };

  return { handleFormSubmitButtonClick };
};

export const useCTAButton = () => {
  const setFormStep = useSetFormStepStore();

  const handlePreviousButtonClick = () => {
    setFormStep('성적입력');
  };

  return { handlePreviousButtonClick };
};

export const useInput = () => {
  const setForm = useSetFormStore();

  const handle자기소개서DataChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, document: { ...prev.document, [name]: value } }));
  };

  return { handle자기소개서DataChange };
};
