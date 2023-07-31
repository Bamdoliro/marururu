import { useFormState, useFormStep } from '@/hooks';
import { ChangeEventHandler, useState } from 'react';
import { useEducationInfoProvider } from './useEducationInfoProvider';

export const useInput = () => {
    const { setEducationInfo } = useEducationInfoProvider();

    const handleEducationInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setEducationInfo((prev) => ({ ...prev, [name]: value }));
    };

    return { handleEducationInfoDataChange };
};

export const useCTAButton = () => {
    const { educationInfo } = useEducationInfoProvider();
    const { setFormStep } = useFormStep();
    const { setForm } = useFormState();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, education: educationInfo }));
        setFormStep('전형 선택');
    };

    const handlePreviousButtonClick = () => {
        setFormStep('보호자 정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
