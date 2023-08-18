import { useSaveFormMutation } from '@/services/form/mutations';
import { useSetFormStepStore, useSetFormStore } from '@/store';
import { ChangeEventHandler } from 'react';

export const useCTAButton = () => {
    const setFormStep = useSetFormStepStore();
    const { saveFormMutate } = useSaveFormMutation();

    const handleNextButtonClick = () => {
        setFormStep('보호자정보');
        saveFormMutate();
    };

    return { handleNextButtonClick };
};

export const useInput = () => {
    const setForm = useSetFormStore();

    const handle지원자정보DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, applicant: { ...prev.applicant, [name]: value } }));
    };

    return { handle지원자정보DataChange };
};
