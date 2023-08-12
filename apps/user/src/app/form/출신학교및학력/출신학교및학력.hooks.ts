import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import { ChangeEventHandler } from 'react';
import { useEducationInfoState } from './출신학교및학력.state';
import { useSaveFormMutation } from '@/services/form/mutations';

export const useInput = () => {
    const { setEducationInfo } = useEducationInfoState();

    const handleEducationInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setEducationInfo((prev) => ({ ...prev, [name]: value }));
    };

    return { handleEducationInfoDataChange };
};

export const useCTAButton = () => {
    const { educationInfo } = useEducationInfoState();
    const { setFormStep } = useFormStepState();
    const { form, setForm } = useFormState();
    const { saveFormMutate } = useSaveFormMutation();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, education: educationInfo }));
        setFormStep('전형선택');
        saveFormMutate(form);
    };

    const handlePreviousButtonClick = () => {
        setFormStep('보호자정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
