import { useSubmitDraftFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore } from '@/store';
import { Form } from '@/types/form/client';
import { useEffect, useState } from 'react';

export const useSubmitDraftFormAction = () => {
    const form = useFormValueStore();
    const { submitDraftFormMutate } = useSubmitDraftFormMutation(form);

    const handleSubmitDraftFormButtonClick = () => {
        submitDraftFormMutate();
    };

    return { handleSubmitDraftFormButtonClick };
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
    const [isFilledForm, setIsFilledForm] = useState(false);

    const [applicantFieldCount, setApplicantFieldCount] = useState(0);
    const [parentFieldCount, setParentFieldCount] = useState(0);
    const [educationFieldCount, setEducationFieldCount] = useState(0);
    const [typeFieldCount, setTypeFieldCount] = useState(0);
    const [documentFieldCount, setDocumentFieldCount] = useState(0);

    useEffect(() => {
        const filledApplicantFieldsCount = useFilledApplicantFieldsCount(form.applicant);

        const filledParentFieldsCount = useFilledParentFieldsCount(form.parent);
        const filledEducationFieldsCount = useFilledEducationFieldsCount(form.education);
        const filledTypeFieldsCount = form.type ? 1 : 0;
        const filledDocumentFieldsCount = Object.values(form.document).filter(
            (value) => !!value,
        ).length;

        if (
            filledApplicantFieldsCount === 5 &&
            filledParentFieldsCount === 6 &&
            filledEducationFieldsCount === 8 &&
            filledTypeFieldsCount === 1 &&
            filledDocumentFieldsCount === 2
        ) {
            setIsFilledForm(true);
        }

        setApplicantFieldCount(filledApplicantFieldsCount);
        setParentFieldCount(filledParentFieldsCount);
        setEducationFieldCount(filledEducationFieldsCount);
        setTypeFieldCount(filledTypeFieldsCount);
        setDocumentFieldCount(filledDocumentFieldsCount);
    }, []);

    return {
        applicantFieldCount,
        parentFieldCount,
        educationFieldCount,
        typeFieldCount,
        documentFieldCount,
        isFilledForm,
    };
};

export const useCTAButton = () => {
    const setFormStep = useSetFormStepStore();

    const handleAgainCheckFormButtonClick = () => {
        setFormStep('지원자정보');
    };

    return { handleAgainCheckFormButtonClick };
};
