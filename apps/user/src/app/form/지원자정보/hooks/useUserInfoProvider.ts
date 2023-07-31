import { atom, useRecoilState } from 'recoil';

export interface UserInfo {
    identificationPictureUri: string;
    name: string;
    phoneNumber: string;
    birthday: string;
    gender: string;
}

const userInfoAtomState = atom({
    key: 'user-info',
    default: {
        identificationPictureUri: '',
        name: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
    },
});

export const useUserInfoProvider = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfoAtomState);

    return { userInfo, setUserInfo };
};
