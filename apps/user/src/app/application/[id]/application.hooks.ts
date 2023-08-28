import { useSaveFormMutation } from '@/services/form/mutations';
import { useFormValueStore, useSetFormStepStore, useSetFormStore } from '@/store';
import { ChangeEventHandler } from 'react';

export const useCTAButton = () => {
    const form = useFormValueStore();
    const { saveFormMutate } = useSaveFormMutation();
    const setFormStep = useSetFormStepStore();

    const handleNextButtonClick = () => {
        setFormStep('출신학교및학력');
        saveFormMutate(form);
    };

    const handlePreviousButtonClick = () => {
        setFormStep('지원자정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};

export const useInput = () => {
    const setForm = useSetFormStore();

    const handle보호자정보DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, parent: { ...prev.parent, [name]: value } }));
    };

    return { handle보호자정보DataChange };
};
