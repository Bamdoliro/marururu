import { ChangeEventHandler } from 'react';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormSetStore, useFormStepSetStore } from '@/store';

export const useCTAButton = () => {
    const { saveFormMutate } = useSaveFormMutation();
    const setFormStep = useFormStepSetStore();

    const handleNextButtonClick = () => {
        setFormStep('출신학교및학력');
        saveFormMutate();
    };

    const handlePreviousButtonClick = () => {
        setFormStep('지원자정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};

export const useInput = () => {
    const setForm = useFormSetStore();

    const handle보호자정보DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, parent: { ...prev.parent, [name]: value } }));
    };

    return { handle보호자정보DataChange };
};
