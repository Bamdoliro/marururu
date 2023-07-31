import { useFormState, useFormStep } from '@/hooks';
import formatDate, { Date } from '@/utils/formatDate';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { useUserInfoProvider } from './useUserInfoProvider';

export const useInput = () => {
    const { setUserInfo } = useUserInfoProvider();
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
        }));
    }, [date]);

    return { handleUserInfoDataChange, date, setDate };
};

export const useCTAButton = () => {
    const { userInfo } = useUserInfoProvider();
    const { setForm } = useFormState();
    const { setFormStep } = useFormStep();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, application: userInfo }));
        setFormStep('보호자 정보');
    };

    return { handleNextButtonClick };
};
