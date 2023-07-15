import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { uploadProfileImage } from './api';

export const useUploadProfileImageMutation = (
    setProfileImage: Dispatch<SetStateAction<string>>,
) => {
    return useMutation((image: FormData) => uploadProfileImage(image), {
        onSuccess: (res) => {
            setProfileImage(res.data.data.url);
            console.log(res.data.data.url);
        },
        onError: (err) => {
            console.log(err);
        },
    });
};
