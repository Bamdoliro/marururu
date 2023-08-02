import { Form, UserInfo } from '@/types/form';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { submitDraftForm, uploadProfileImage } from './api';

export const useSubmitDraftFormMutation = (formData: Form) => {
    const { mutate: submitDraftFormMutate, ...restMutation } = useMutation({
        mutationFn: () => submitDraftForm(formData),
        onSuccess: (res) => {
            console.log(res);
            alert('성공!');
        },
        onError: (err) => {
            console.log(err);
            alert('실패!');
        },
    });

    return { submitDraftFormMutate, restMutation };
};

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
