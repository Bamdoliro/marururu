import { useEffect, useState } from 'react';
import { useFormState } from '../form.state';

export const useCheckFilledForm = () => {
    const { form } = useFormState();
    const [isFilledForm, setIsFilledForm] = useState(false);

    const [applicantFieldCount, setApplicantFieldCount] = useState(0);
    const [parentFieldCount, setParentFieldCount] = useState(0);
    const [educationFieldCount, setEducationFieldCount] = useState(0);
    const [typeFieldCount, setTypeFieldCount] = useState(0);
    const [documentFieldCount, setDocumentFieldCount] = useState(0);

    useEffect(() => {
        const filledApplicantFieldsCount = Object.values(form.applicant).filter(
            (value) => !!value,
        ).length;
        const filledParentFieldsCount = Object.values(form.parent).filter(
            (value) => !!value,
        ).length;
        const filledEducationFieldsCount = Object.values(form.education).filter(
            (value) => !!value,
        ).length;
        const filledTypeFieldsCount = form.type !== '' ? 1 : 0;
        const filledDocumentFieldsCount = Object.values(form.document).filter(
            (value) => !!value,
        ).length;

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
