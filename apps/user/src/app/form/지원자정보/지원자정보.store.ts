import { atom } from 'recoil';

export interface UserInfo {
    identificationPictureUri: string;
    name: string;
    phoneNumber: string;
    birthday: string;
    gender: string;
}

export const userInfoAtomState = atom({
    key: 'user-info',
    default: {
        identificationPictureUri: '',
        name: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
    },
});
