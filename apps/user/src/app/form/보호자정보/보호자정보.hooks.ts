import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import { ChangeEventHandler } from 'react';
import { useParentInfoState } from './보호자정보.state';

export const useInput = () => {
    const { setParentInfo } = useParentInfoState();

    const handleParentInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setParentInfo((prev) => ({ ...prev, [name]: value }));
    };

    return { handleParentInfoDataChange };
};

export const useCTAButton = () => {
    const { parentInfo } = useParentInfoState();
    const { setForm } = useFormState();
    const { setFormStep } = useFormStepState();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, parent: parentInfo }));
        setFormStep('출신학교및학력');
    };

    const handlePreviousButtonClick = () => {
        setFormStep('지원자정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
