import { useApiError } from '@/hooks';
import { useSetFormStepStore, useSetFormStore } from '@/store';
import type { Form, FormDocument } from '@/types/form/client';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import type { Dispatch, SetStateAction } from 'react';
import {
  postSaveForm,
  postSubmitDraftForm,
  postSubmitFinalForm,
  postUploadFormDocumnet,
  postUploadProfileImage,
  putCorrectionForm,
} from './api';

export const useSubmitFinalFormMutation = (formUrl: string) => {
  const setFormStep = useSetFormStepStore();
  const { handleError } = useApiError();

  const { mutate: submitFinalFormMutate, ...restQuery } = useMutation({
    mutationFn: () => postSubmitFinalForm(formUrl),
    onSuccess: () => {
      setFormStep('최종제출완료');
    },
    onError: handleError,
  });

  return { submitFinalFormMutate, ...restQuery };
};

export const useSubmitDraftFormMutation = (formData: Form) => {
  const setFormStep = useSetFormStepStore();
  const { handleError } = useApiError();

  const { mutate: submitDraftFormMutate, ...restMutation } = useMutation({
    mutationFn: () => postSubmitDraftForm(formData),
    onSuccess: () => setFormStep('초안제출완료'),
    onError: handleError,
  });

  return { submitDraftFormMutate, ...restMutation };
};

export const useSaveFormMutation = () => {
  const { handleError } = useApiError();

  const { mutate: saveFormMutate, ...restMutation } = useMutation({
    mutationFn: (form: Form) => postSaveForm(form),
    onError: handleError,
  });

  return { saveFormMutate, ...restMutation };
};

export const useUploadFormDocumentMutation = (
  setFormDocument: Dispatch<SetStateAction<FormDocument>>
) => {
  const { handleError } = useApiError();

  const { mutate: uploadFormDocumentMutate, ...restMutation } = useMutation({
    mutationFn: (file: FormData) => postUploadFormDocumnet(file),
    onSuccess: (res: AxiosResponse) => {
      setFormDocument((prev) => ({ ...prev, formUrl: res.data.url }));
    },
    onError: handleError,
  });

  return { uploadFormDocumentMutate, ...restMutation };
};

export const useUploadProfileImageMutation = () => {
  const setForm = useSetFormStore();
  const { handleError } = useApiError();

  const { mutate: uploadProfileImageMutate, ...restMutation } = useMutation({
    mutationFn: (image: FormData) => postUploadProfileImage(image),
    onSuccess: (res: AxiosResponse) => {
      setForm((prev) => ({
        ...prev,
        applicant: { ...prev.applicant, identificationPictureUri: res.data.url },
      }));
    },
    onError: handleError,
  });

  return { uploadProfileImageMutate, ...restMutation };
};

export const useCorrectionTestMutation = (formId: number, formData: Form) => {
  const { handleError } = useApiError();
  const setFormStep = useSetFormStepStore();

  const { mutate: correctionFormMutate, ...restMutation } = useMutation({
    mutationFn: () => putCorrectionForm(formId, formData),
    onSuccess: () => {
      setFormStep('최종제출완료');
    },
    onError: handleError,
  });

  return { correctionFormMutate, ...restMutation };
};
