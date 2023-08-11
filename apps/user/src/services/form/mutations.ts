import { useFormStepState } from '@/hooks';
import { FormDocument, UserInfo } from '@/types/form/client';
import { PostFormReq } from '@/types/form/remote';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from 'react-query';
import {
    postSubmitDraftForm,
    postSubmitFinalForm,
    postUploadFormDocumnet,
    postUploadProfileImage,
} from './api';

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
    const { setFormStep } = useFormStepState();

    const { mutate: submitDraftFormMutate, ...restMutation } = useMutation({
        mutationFn: () => postSubmitDraftForm(formData),
        onSuccess: (res) => {
            console.log(res);
            setFormStep('초안제출완료');
            alert('성공!');
        },
        onError: (err) => {
            console.log(err);
            alert('실패!');
        },
    });

    return { submitDraftFormMutate, restMutation };
};

export const useUploadFormDocumentMutation = (
    setFormDocument: Dispatch<SetStateAction<FormDocument>>,
) => {
    const { mutate: uploadFormDocumentMutate, ...restMutation } = useMutation({
        mutationFn: (file: File) => postUploadFormDocumnet(file),
        onSuccess: (res) => {
            console.log(res);
            setFormDocument(res.url);
            alert('성공');
        },
        onError: (err) => {
            console.log(err);
            alert('실패');
        },
    });

    return { uploadFormDocumentMutate, ...restMutation };
};

export const useUploadProfileImageMutation = (setUserInfo: Dispatch<SetStateAction<UserInfo>>) => {
    const { mutate: uploadProfileImageMutate, ...restMutation } = useMutation({
        mutationFn: (image: FormData) => postUploadProfileImage(image),
        onSuccess: (res) => {
            setUserInfo((prev) => ({ ...prev, identificationPictureUri: res.data.url }));
        },
        onError: (err) => {
            console.log(err);
        },
    });

    return { uploadProfileImageMutate, ...restMutation };
};
