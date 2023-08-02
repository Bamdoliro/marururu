import { UserInfo } from '@/types/form/client';
import { PostFormReq } from '@/types/form/remote';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import { postSubmitDraftForm, postSubmitFinalForm, postUploadProfileImage } from './api';

export const useSubmitFinalFormMutation = (formUrl: string) => {
    const { mutate: submitFinalFormMutate, ...restQuery } = useMutation({
        mutationFn: () => postSubmitFinalForm(formUrl),
        onSuccess: (res) => {
            console.log(res);
            alert('성공!');
        },
        onError: (err) => {
            console.log(err);
            alert('실패!');
        },
    });

    return { submitFinalFormMutate, ...restQuery };
};

export const useSubmitDraftFormMutation = (formData: PostFormReq) => {
    const { mutate: submitDraftFormMutate, ...restMutation } = useMutation({
        mutationFn: () => postSubmitDraftForm(formData),
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
        mutationFn: (image: FormData) => postUploadProfileImage(image),
        onSuccess: (res) => {
            setUserInfo((prev) => ({ ...prev, identificationPictureUri: res.data.data.url }));
        },
        onError: (err) => {
            console.log(err);
        },
    });

    return { uploadProfileImageMutate, ...restMutation };
};
