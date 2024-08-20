import type { ChangeEventHandler } from 'react';
import { useEffect } from 'react';
import { useFormValueStore, useSetFormStepStore, useSetFormStore } from '@/store';
import useUser from '@/hooks/useUser';
import { formatDate } from '@/utils';
import { useSaveFormMutation } from '@/services/form/mutations';

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

const formatBirthday = (value: string) => {
  return formatDate(value.replace(/\D/g, ''));
};

export const useInput = () => {
  const setForm = useSetFormStore();
  const user = useUser();

  useEffect(() => {
    if (user.userData.name && user.userData.phoneNumber) {
      setForm((prev) => ({
        ...prev,
        applicant: {
          ...prev.applicant,
          name: user.userData.name,
          phoneNumber: user.userData.phoneNumber,
        },
      }));
    }
  }, [setForm, user.userData]);

  const handle지원자정보Change: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name === 'birthday') {
      const formattedValue = formatBirthday(value);
      setForm((prev) => ({
        ...prev,
        applicant: { ...prev.applicant, birthday: formattedValue },
      }));
      return;
    }

    if (name === 'name' || name === 'phoneNumber') return;

    setForm((prev) => ({ ...prev, applicant: { ...prev.applicant, [name]: value } }));
  };

  return { handle지원자정보Change };
};
