import { FormDocument } from '@/types/form/client';
import { Form } from '@/types/form/client';
import { Dispatch, SetStateAction } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
    postSaveForm,
    postSubmitDraftForm,
    postSubmitFinalForm,
    postUploadFormDocumnet,
    postUploadProfileImage,
} from './api';
import { useSetFormStepStore, useFormValueStore, useSetFormStore } from '@/store';
import { Axios, AxiosError, AxiosResponse } from 'axios';

export const useSubmitFinalFormMutation = (formUrl: string) => {
    const setFormStep = useSetFormStepStore();

    const { mutate: submitFinalFormMutate, ...restQuery } = useMutation({
        mutationFn: () => postSubmitFinalForm(formUrl),
        onSuccess: (res: AxiosResponse) => {
            console.log(res);
            setFormStep('최종제출완료');
        },
        onError: (err: AxiosError) => {
            console.error(err);
        },
    });

    return { submitFinalFormMutate, ...restQuery };
};

export const useSubmitDraftFormMutation = (formData: Form) => {
    const setFormStep = useSetFormStepStore();

    const { mutate: submitDraftFormMutate, ...restMutation } = useMutation({
        mutationFn: () => postSubmitDraftForm(formData),
        onSuccess: (res: AxiosResponse) => {
            console.log(res);
            setFormStep('초안제출완료');
        },
        onError: (err: AxiosError) => {
            console.error(err);
            alert('원서를 다시 한번 확인해주세요.');
        },
    });

    return { submitDraftFormMutate, ...restMutation };
};

export const useSaveFormMutation = () => {
    const { mutate: saveFormMutate, ...restMutation } = useMutation({
        mutationFn: (form: Form) => postSaveForm(form),
        onSuccess: (res: AxiosResponse) => {
            console.log(res);
        },
        onError: (err: AxiosError) => {
            console.error(err);
        },
    });

    return { saveFormMutate, ...restMutation };
};

export const useUploadFormDocumentMutation = (
    setFormDocument: Dispatch<SetStateAction<FormDocument>>,
) => {
    const { mutate: uploadFormDocumentMutate, ...restMutation } = useMutation({
        mutationFn: (file: FormData) => postUploadFormDocumnet(file),
        onSuccess: (res: AxiosResponse) => {
            console.log(res);
            setFormDocument((prev) => ({ ...prev, formUrl: res.data.url }));
        },
        onError: (err: AxiosError) => {
            alert(err.message);
        },
    });

    return { uploadFormDocumentMutate, ...restMutation };
};

export const useUploadProfileImageMutation = () => {
    const setForm = useSetFormStore();

    const { mutate: uploadProfileImageMutate, ...restMutation } = useMutation({
        mutationFn: (image: FormData) => postUploadProfileImage(image),
        onSuccess: (res: AxiosResponse) => {
            console.log(res);
            setForm((prev) => ({
                ...prev,
                applicant: { ...prev.applicant, identificationPictureUri: res.data.url },
            }));
        },
        onError: (err: AxiosError) => {
            alert(err.message);
        },
    });

    return { uploadProfileImageMutate, ...restMutation };
};
