import { ChangeEventHandler } from 'react';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormSetStore, useFormStepSetStore, useFormStore } from '@/store';

export const useCTAButton = () => {
    const [form, setForm] = useFormStore();
    const setFormStep = useFormStepSetStore();
    const { saveFormMutate } = useSaveFormMutation();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, education: prev.education }));
        setFormStep('전형선택');
        saveFormMutate();
    };

    const handlePreviousButtonClick = () => {
        setFormStep('보호자정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};

export const useInput = () => {
    const setForm = useFormSetStore();

    const handle출신학교및학력DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, education: { ...prev.education, [name]: value } }));
    };

    return { handle출신학교및학력DataChange };
};
