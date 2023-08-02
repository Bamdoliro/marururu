import { UserInfo } from '@/types/form';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { uploadProfileImage } from './api';

export const useUploadProfileImageMutation = (setUserInfo: Dispatch<SetStateAction<UserInfo>>) => {
    const { mutate: uploadProfileImageMutate, ...restMutation } = useMutation({
        mutationFn: (image: FormData) => uploadProfileImage(image),
        onSuccess: (res) => {
            setUserInfo((prev) => ({ ...prev, identificationPictureUri: res.data.data.url }));
        },
        onError: (err) => {
            console.log(err);
        },
    });

    return { uploadProfileImageMutate, ...restMutation };
};
