import { useFormStepState } from '@/hooks/state/useFormStepState';
import { ChangeEventHandler, useEffect } from 'react';
import { useFormState } from '../form.state';
import { useUserDate, useUserInfoState } from './지원자정보.state';
import { formatDate } from '@/utils';
import { useSaveFormMutation } from '@/services/form/mutations';

export const useInput = () => {
    const { setUserInfo } = useUserInfoState();
    const { date, setDate } = useUserDate();

    const handleUserInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        setUserInfo((prev) => ({
            ...prev,
            birthday: formatDate(date),
        }));
    }, [date]);

    return { handleUserInfoDataChange, date, setDate };
};

export const useCTAButton = () => {
    const { userInfo } = useUserInfoState();
    const { form, setForm } = useFormState();
    const { setFormStep } = useFormStepState();
    const { saveFormMutate } = useSaveFormMutation();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, applicant: userInfo }));
        setFormStep('보호자정보');
        console.log(form);
        saveFormMutate(form);
    };

    return { handleNextButtonClick };
};
