import { UserInfo } from '@/types/form/client';
import { formatDate } from '@/utils';
import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const userInfoAtomState = atom<UserInfo>({
    key: 'user-info',
    default: {
        identificationPictureUri: '',
        name: '',
        phoneNumber: '',
        birthday: '',
        gender: 'MALE',
    },
});

const dateAtomState = atom({
    key: 'date',
    default: {
        year: '',
        month: '',
        day: '',
    },
});

export const useUserInfoState = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfoAtomState);

    return { userInfo, setUserInfo };
};

export const useUserInfoDateState = () => {
    const [date, setDate] = useRecoilState(dateAtomState);
    const { setUserInfo } = useUserInfoState();

    useEffect(() => {
        setUserInfo((prev) => ({
            ...prev,
            birthday: formatDate(date),
        }));
    }, [date]);

    return { date, setDate };
};
