import { Date } from '@/utils/formatDate';
import formatDate from '@/utils/formatDate';
import { ChangeEventHandler, useEffect, useState } from 'react';

export interface UserInfo {
    identificationPictureUri: string;
    name: string;
    phoneNumber: string;
    birthday: string;
    gender: string;
}

export const useInput = () => {
    const [date, setDate] = useState<Date>({
        year: '',
        month: '',
        day: '',
    });

    const [userInfo, setUserInfo] = useState<UserInfo>({
        identificationPictureUri: '',
        name: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
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

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    return { setUserInfo, handleUserInfoDataChange, date, setDate };
};
