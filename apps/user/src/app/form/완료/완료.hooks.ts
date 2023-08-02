import { useFormState } from '../form.state';

export const useCheckFilledForm = () => {
    const { form } = useFormState();
    const filledApplicantFieldsCount = Object.values(form.applicant).filter(
        (value) => !!value,
    ).length;
    const filledParentFieldsCount = Object.values(form.parent).filter((value) => !!value).length;
    const filledEducationFieldsCount = Object.values(form.education).filter(
        (value) => !!value,
    ).length;
    const filledDocumentFieldsCount = Object.values(form.document).filter(
        (value) => !!value,
    ).length;
    const filledTypeFieldsCount = form.type !== '' ? 1 : 0;

    return {
        filledApplicantFieldsCount,
        filledParentFieldsCount,
        filledEducationFieldsCount,
        filledTypeFieldsCount,
        filledDocumentFieldsCount,
    };
};
