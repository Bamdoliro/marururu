import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import { ChangeEventHandler } from 'react';
import { useSaveFormMutation } from '@/services/form/mutations';

export const useCTAButton = () => {
    const { setFormStep } = useFormStepState();
    const { form, setForm } = useFormState();
    const { saveFormMutate } = useSaveFormMutation();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, education: prev.education }));
        setFormStep('전형선택');
        saveFormMutate({ ...form, education: form.education });
    };

    const handlePreviousButtonClick = () => {
        setFormStep('보호자정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};

export const useInput = () => {
    const { setForm } = useFormState();

    const handle출신학교및학력DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, education: { ...prev.education, [name]: value } }));
    };

    return { handle출신학교및학력DataChange };
};
