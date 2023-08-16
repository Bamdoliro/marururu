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
import { useFormStepSetStore, useFormValueStore } from '@/store';

export const useSubmitFinalFormMutation = (formUrl: string) => {
    const setFormStep = useFormStepSetStore();

    const { mutate: submitFinalFormMutate, ...restQuery } = useMutation({
        mutationFn: () => postSubmitFinalForm(formUrl),
        onSuccess: (res) => {
            console.log(res);
            setFormStep('최종제출완료');
            alert('성공!');
        },
        onError: (err) => {
            console.log(err);
            alert('실패!');
        },
    });

    return { submitFinalFormMutate, ...restQuery };
};

export const useSubmitDraftFormMutation = (formData: Form) => {
    const setFormStep = useFormStepSetStore();

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

    return { submitDraftFormMutate, ...restMutation };
};

export const useSaveFormMutation = () => {
    const form = useFormValueStore();

    const { mutate: saveFormMutate, ...restMutation } = useMutation({
        mutationFn: () => postSaveForm(form),
        onSuccess: (res) => {
            console.log(res);
            alert('성공');
        },
        onError: (err) => {
            console.log(err);
            alert('실패');
        },
    });

    return { saveFormMutate, ...restMutation };
};

export const useUploadFormDocumentMutation = (
    setFormDocument: Dispatch<SetStateAction<FormDocument>>,
) => {
    const { mutate: uploadFormDocumentMutate, ...restMutation } = useMutation({
        mutationFn: (file: FormData) => postUploadFormDocumnet(file),
        onSuccess: (res) => {
            console.log(res);
            setFormDocument((prev) => ({ ...prev, formUrl: res.data.url }));
            alert('성공');
        },
        onError: (err) => {
            console.log(err);
            alert('실패');
        },
    });

    return { uploadFormDocumentMutate, ...restMutation };
};

export const useUploadProfileImageMutation = (setForm: Dispatch<SetStateAction<Form>>) => {
    const { mutate: uploadProfileImageMutate, ...restMutation } = useMutation({
        mutationFn: (image: FormData) => postUploadProfileImage(image),
        onSuccess: (res) => {
            console.log(res);
            setForm((prev) => ({
                ...prev,
                applicant: { ...prev.applicant, identificationPictureUri: res.data.url },
            }));
        },
        onError: (err) => {
            console.log(err);
        },
    });

    return { uploadProfileImageMutate, ...restMutation };
};
