import { useFormState, useFormStep } from '@/hooks';
import formatDate, { Date } from '@/utils/formatDate';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfoAtomState } from './지원자정보.store';

export interface UserInfo {
    identificationPictureUri: string;
    name: string;
    phoneNumber: string;
    birthday: string;
    gender: string;
}

export const useInput = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfoAtomState);
    const [date, setDate] = useState<Date>({
        year: '',
        month: '',
        day: '',
    });

    const handleUserInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
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
    const userInfo = useRecoilValue(userInfoAtomState);
    const { form, setForm } = useFormState();
    const { setFormStep } = useFormStep();

    const handleNextButtonClick = () => {
        setForm({ ...form, application: userInfo });
        setFormStep('보호자 정보');
    };

    return { handleNextButtonClick };
};
