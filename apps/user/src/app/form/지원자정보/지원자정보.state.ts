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

export const useUserInfoState = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfoAtomState);

    return { userInfo, setUserInfo };
};
