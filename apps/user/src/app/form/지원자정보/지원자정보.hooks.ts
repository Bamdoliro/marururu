import { useFormState } from '../form.state';
import { useFormStepState } from '@/hooks/state/useFormStepState';
import formatDate, { Date } from '@/utils/functions/formatDate';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { useUserInfoState } from './지원자정보.state';

export const useInput = () => {
    const { userInfo, setUserInfo } = useUserInfoState();
    const [date, setDate] = useState<Date>({
        year: '',
        month: '',
        day: '',
    });

    const handleUserInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        setUserInfo((prev) => ({
            ...prev,
            birthday: formatDate(date),
            gender: userInfo.gender === '남자' ? 'MALE' : 'FEMALE',
        }));
    }, [date, userInfo.gender]);

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
