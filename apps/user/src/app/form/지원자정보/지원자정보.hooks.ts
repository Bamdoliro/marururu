import { useFormStepState } from '@/hooks/state/useFormStepState';
import { ChangeEventHandler, useEffect } from 'react';
import { useFormState } from '../form.state';
import { useUserInfoState } from './지원자정보.state';
import { useSaveFormMutation } from '@/services/form/mutations';

export const useInput = () => {
    const { setUserInfo } = useUserInfoState();

    const handleUserInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    return { handleUserInfoDataChange };
};

export const useCTAButton = () => {
    const { userInfo } = useUserInfoState();
    const { form, setForm } = useFormState();
    const { saveFormMutate } = useSaveFormMutation();
    const { setFormStep } = useFormStepState();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, applicant: userInfo }));
        setFormStep('보호자정보');
        saveFormMutate(form);
    };

    console.log(form);

    return { handleNextButtonClick };
};
