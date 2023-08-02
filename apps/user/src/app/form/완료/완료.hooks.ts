import { useFormState } from '../form.state';

export const useCheckEmptyForm = () => {
    const { form } = useFormState();
    const filledApplicantFieldsCount = Object.values(form.applicant).filter(
        (value) => !!value,
    ).length;

    return { filledApplicantFieldsCount };
};
