import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import { ChangeEventHandler } from 'react';
import { useSaveFormMutation } from '@/services/form/mutations';

export const useCTAButton = () => {
    const { saveFormMutate } = useSaveFormMutation();
    const { form } = useFormState();
    const { setFormStep } = useFormStepState();

    const handleNextButtonClick = () => {
        setFormStep('출신학교및학력');
        saveFormMutate({ ...form, parent: form.parent });
    };

    const handlePreviousButtonClick = () => {
        setFormStep('지원자정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};

export const useInput = () => {
    const { setForm } = useFormState();

    const handle보호자정보DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, parent: { ...prev.parent, [name]: value } }));
    };

    return { handle보호자정보DataChange };
};
