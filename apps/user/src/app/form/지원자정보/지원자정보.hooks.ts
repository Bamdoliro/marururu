import { useFormStepState } from '@/hooks/state/useFormStepState';
import formatDate from '@/utils/formatDate';
import { ChangeEventHandler, useEffect } from 'react';
import { useFormState } from '../form.state';
import { useUserDate, useUserInfoState } from './지원자정보.state';

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
    const { setForm } = useFormState();
    const { setFormStep } = useFormStepState();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, applicant: userInfo }));
        setFormStep('보호자정보');
    };

    return { handleNextButtonClick };
};
