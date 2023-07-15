import { useMutation } from 'react-query';
import { uploadProfileImage } from './api';

export const useUploadProfileImageMutation = (image: FormData) => {
    return useMutation(() => uploadProfileImage(image), {
        onSuccess: (res) => {
            console.log(res);
            alert('성공');
        },
        onError: (err) => {
            console.log(err);
            alert('에러');
        },
    });
};
