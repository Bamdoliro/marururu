import { UserInfo } from '@/types/form';
import { atom, useRecoilState } from 'recoil';

const userInfoAtomState = atom<UserInfo>({
    key: 'user-info',
    default: {
        identificationPictureUri: '',
        name: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
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

export const useUserDate = () => {
    const [date, setDate] = useRecoilState(dateAtomState);

    return { date, setDate };
};
