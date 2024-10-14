import { Storage } from '@/apis/storage/storage';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSetFormStore } from '@/store';
import type { ChangeEventHandler } from 'react';

export const useCTAButton = () => {
  const form = useFormValueStore();
  const { saveFormMutate } = useSaveFormMutation();
  const setFormStep = useSetFormStepStore();
  const correct = Storage.getItem('correct');

  const handleMoveNextStep = () => {
    if (correct) {
      setFormStep('초안작성완료');
      saveFormMutate(form);
      localStorage.removeItem('correct');
    } else {
      setFormStep('출신학교및학력');
      saveFormMutate(form);
    }
  };

  const handleMovePreviousStep = () => {
    setFormStep('지원자정보');
  };

  return { handleMoveNextStep, handleMovePreviousStep };
};

const formatParentPhoneNumber = (value: string) => {
  return value.replace(/\D/g, '');
};

export const useInput = () => {
  const setForm = useSetFormStore();

  const handle보호자정보Change: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      const partentPhoneNumber = formatParentPhoneNumber(value);
      setForm((prev) => ({
        ...prev,
        parent: { ...prev.parent, phoneNumber: partentPhoneNumber },
      }));
      return;
    }
    setForm((prev) => ({ ...prev, parent: { ...prev.parent, [name]: value } }));
  };

  return { handle보호자정보Change };
};
