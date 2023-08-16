import { useFormStepSetStore, useFormValueStore } from '@/store';
import { useSubmitDraftFormMutation } from '@/services/form/mutations';
import { useEffect, useState } from 'react';

export const useSubmitDraftFormAction = () => {
    const form = useFormValueStore();
    const { submitDraftFormMutate } = useSubmitDraftFormMutation(form);

    const handleSubmitDraftFormButtonClick = () => {
        submitDraftFormMutate();
    };

    return { handleSubmitDraftFormButtonClick };
};

export const useCheckFilledForm = () => {
    const form = useFormValueStore();
    const [isFilledForm, setIsFilledForm] = useState(false);

    const [applicantFieldCount, setApplicantFieldCount] = useState(0);
    const [parentFieldCount, setParentFieldCount] = useState(0);
    const [educationFieldCount, setEducationFieldCount] = useState(0);
    const [typeFieldCount, setTypeFieldCount] = useState(0);
    const [documentFieldCount, setDocumentFieldCount] = useState(0);

    useEffect(() => {
        const filledApplicantFieldsCount = form.applicant
            ? Object.values(form.applicant).filter((value) => !!value).length
            : 0;
        const filledParentFieldsCount = form.parent
            ? Object.values(form.parent).filter((value) => !!value).length
            : 0;
        const filledEducationFieldsCount = form.education
            ? Object.values(form.education).filter((value) => !!value).length
            : 0;
        const filledTypeFieldsCount = form.type ? 1 : 0;
        const filledDocumentFieldsCount = form.document
            ? Object.values(form.document).filter((value) => !!value).length
            : 0;

        if (
            filledApplicantFieldsCount === 5 &&
            filledParentFieldsCount === 5 &&
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
    const setFormStep = useFormStepSetStore();

    const handleAgainCheckFormButtonClick = () => {
        setFormStep('지원자정보');
    };

    return { handleAgainCheckFormButtonClick };
};
