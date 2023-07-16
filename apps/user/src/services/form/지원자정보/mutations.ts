import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { uploadProfileImage } from './api';

export const useUploadProfileImageMutation = (
    setProfileImage: Dispatch<SetStateAction<string>>,
) => {
    return useMutation((image: FormData) => uploadProfileImage(image), {
        onSuccess: (res) => {
            setProfileImage(res.data.data.url);
        },
        onError: (err) => {
            alert('사진 사이즈를 규격에 맞게 넣어주세요');
        },
    });
};
