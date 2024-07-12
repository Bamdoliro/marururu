import { useEffect } from 'react';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSetFormStore } from '@/store';
import type { ChangeEventHandler } from 'react';
import { useUser } from '@/hooks';

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

  const form = useFormValueStore();

  useEffect(() => {
    if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
      setForm((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          schoolName: '(고입검정)',
          schoolAddress: '-',
          schoolLocation: '-',
          schoolCode: '-',
          teacherPhoneNumber: '-',
          teacherName: '-',
          teacherMobilePhoneNumber: '-',
        },
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        education: {
          ...prev.education,
          schoolName: '',
          schoolAddress: '',
          schoolLocation: '',
          schoolCode: '',
          teacherPhoneNumber: '',
          teacherName: '',
          teacherMobilePhoneNumber: '',
        },
      }));
    }
  }, [form.education.graduationType, setForm]);

  const handle출신학교및학력Change: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    if (
      (name === 'graduationYear' ||
        name === 'teacherPhoneNumber' ||
        name === 'teacherMobilePhoneNumber') &&
      !/^\d*$/.test(value)
    ) {
      return;
    }

    setForm((prev) => ({ ...prev, education: { ...prev.education, [name]: value } }));
  };

  return { handle출신학교및학력Change };
};
