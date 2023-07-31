import { useFormState, useFormStep } from '@/hooks';
import { ChangeEventHandler, useState } from 'react';
import { useParentInfoProvider } from './useParentInfoProvider';

export const useInput = () => {
    const { setParentInfo } = useParentInfoProvider();

    const handleParentInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setParentInfo((prev) => ({ ...prev, [name]: value }));
    };

    return { handleParentInfoDataChange };
};

export const useCTAButton = () => {
    const { parentInfo } = useParentInfoProvider();
    const { form, setForm } = useFormState();
    const { setFormStep } = useFormStep();

    const handleNextButtonClick = () => {
        setForm({ ...form, parent: parentInfo });
        console.log(form);
    };

    const handlePreviousButtonClick = () => {
        setFormStep('지원자 정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
