import { UserInfo } from '@/app/form/지원자정보/지원자정보.hooks';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { uploadProfileImage } from './api';

export const useUploadProfileImageMutation = (setUserInfo: Dispatch<SetStateAction<UserInfo>>) => {
    return useMutation((image: FormData) => uploadProfileImage(image), {
        onSuccess: (res) => {
            setUserInfo((prev) => ({ ...prev, identificationPictureUri: res.data.data.url }));
        },
        onError: (err) => {
            console.log(err);
        },
    });
};
