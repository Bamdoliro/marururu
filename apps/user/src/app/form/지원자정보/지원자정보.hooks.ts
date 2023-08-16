import { useFormStepState } from '@/hooks/state/useFormStepState';
import { useFormState } from '../form.state';
import { useSaveFormMutation } from '@/services/form/mutations';
import { ChangeEventHandler } from 'react';

export const useCTAButton = () => {
    const { form } = useFormState();
    const { saveFormMutate } = useSaveFormMutation();
    const { setFormStep } = useFormStepState();

    const handleNextButtonClick = () => {
        setFormStep('보호자정보');
        saveFormMutate({ ...form, applicant: form.applicant });
    };

    return { handleNextButtonClick };
};

export const useInput = () => {
    const { setForm } = useFormState();

    const handle지원자정보DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, applicant: { ...prev.applicant, [name]: value } }));
    };

    return { handle지원자정보DataChange };
};
