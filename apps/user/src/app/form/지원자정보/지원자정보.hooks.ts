import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormSetStore, useFormStepSetStore, useFormStore } from '@/store';
import { ChangeEventHandler } from 'react';

export const useCTAButton = () => {
    const form = useFormStore();
    const setFormStep = useFormStepSetStore();
    const { saveFormMutate } = useSaveFormMutation();

    const handleNextButtonClick = () => {
        setFormStep('보호자정보');
        saveFormMutate();
    };

    return { handleNextButtonClick };
};

export const useInput = () => {
    const setForm = useFormSetStore();

    const handle지원자정보DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, applicant: { ...prev.applicant, [name]: value } }));
    };

    return { handle지원자정보DataChange };
};
