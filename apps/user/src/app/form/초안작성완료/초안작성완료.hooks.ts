import { useSubmitDraftFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore } from '@/store';
import type { Form } from '@/types/form/client';
import { useEffect, useState } from 'react';

export const useSubmitDraftFormAction = () => {
  const form = useFormValueStore();
  const { submitDraftFormMutate } = useSubmitDraftFormMutation(form);

  const handleDraftFormSubmit = () => {
    submitDraftFormMutate();
  };

  return { handleDraftFormSubmit };
};

const useFilledApplicantFieldsCount = (applicant: Form['applicant']) =>
  Object.entries(applicant).reduce((acc, [key, value]) => {
    if (!value) return acc;

    switch (key) {
      case 'name':
        return acc + Number(value.length <= 20);
      case 'phoneNumber':
        return acc + Number(value.length === 11);
      default:
        return acc + 1;
    }
  }, 0);

const useFilledParentFieldsCount = (parent: Form['parent']) =>
  Object.entries(parent).reduce((acc, [key, value]) => {
    if (!value) return acc;

    switch (key) {
      case 'name':
        return acc + Number(value.length <= 20);
      case 'phoneNumber':
        return acc + Number(value.length === 11);
      case 'address':
      case 'detailAddress':
        return acc + Number(value.length <= 100);
      case 'zoneCode':
        return acc + Number(value.length === 5);
      default:
        return acc + 1;
    }
  }, 0);

const useFilledEducationFieldsCount = (education: Form['education']) =>
  Object.entries(education).reduce((acc, [key, value]) => {
    if (!value) return acc;

    switch (key) {
      case 'schoolName':
      case 'schoolLocation':
      case 'teacherName':
        return acc + Number(value.length <= 20);
      case 'graduationYear':
        return acc + Number(value.length === 4);
      case 'schoolCode':
        return acc + Number(value.length === 7);
      case 'teacherPhoneNumber':
      case 'teacherMobilePhoneNumber':
        return acc + Number(value.length <= 11);
      default:
        return acc + 1;
    }
  }, 0);

export const useCheckFilledForm = () => {
  const form = useFormValueStore();
  const [isFilledForm, setIsFilledForm] = useState(true);

  const [applicantFilledCount, setApplicantFilledCount] = useState(0);
  const [parentFilledCount, setParentFilledCount] = useState(0);
  const [educationFilledCount, setEducationFilledCount] = useState(0);
  const [typeFilledCount, setTypeFilledCount] = useState(0);
  const [documentFilledCount, setDocumentFilledCount] = useState(0);

  const filledApplicantFieldsCount = useFilledApplicantFieldsCount(form.applicant);
  const filledParentFieldsCount = useFilledParentFieldsCount(form.parent);
  const filledEducationFieldsCount = useFilledEducationFieldsCount(form.education);
  const filledTypeFieldCount = form.type ? 1 : 0;
  const filledDocumentFieldsCount = Object.values(form.document).filter(
    (value) => !!value
  ).length;

  useEffect(() => {
    if (
      filledApplicantFieldsCount === 5 &&
      filledParentFieldsCount === 6 &&
      filledEducationFieldsCount === 9 &&
      filledTypeFieldCount === 1 &&
      filledDocumentFieldsCount === 2
    ) {
      setIsFilledForm(true);
    } else {
      setIsFilledForm(false);
    }

    setApplicantFilledCount(filledApplicantFieldsCount);
    setParentFilledCount(filledParentFieldsCount);
    setEducationFilledCount(filledEducationFieldsCount);
    setTypeFilledCount(filledTypeFieldCount);
    setDocumentFilledCount(filledDocumentFieldsCount);
  }, [
    filledApplicantFieldsCount,
    filledDocumentFieldsCount,
    filledEducationFieldsCount,
    filledParentFieldsCount,
    filledTypeFieldCount,
    form.applicant,
    form.document,
    form.education,
    form.parent,
    form.type,
  ]);

  return {
    applicantFilledCount,
    parentFilledCount,
    educationFilledCount,
    typeFilledCount,
    documentFilledCount,
    isFilledForm,
  };
};

export const useCTAButton = () => {
  const setFormStep = useSetFormStepStore();

  const handleCheckAgainForm = () => {
    setFormStep('지원자정보');
  };

  return { handleCheckAgainForm };
};
