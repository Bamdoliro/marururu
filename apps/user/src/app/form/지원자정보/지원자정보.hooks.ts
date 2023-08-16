import { useFormStepState } from '@/hooks/state/useFormStepState';
import { useSaveFormMutation } from '@/services/form/mutations';
import { ChangeEventHandler } from 'react';
import { useUserInfoState } from '../../../stores/form/지원자정보.state';
import { useFormState } from '../form.state';

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
