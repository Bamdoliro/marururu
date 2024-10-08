import { useApiError } from '@/hooks';
import { useSetFormStepStore } from '@/store';
import type { Form, FormDocument } from '@/types/form/client';
import { useMutation } from '@tanstack/react-query';
import { type Dispatch, type SetStateAction } from 'react';
import {
  getUploadProfile,
  patchSubmitFinalForm,
  postSaveForm,
  postSubmitDraftForm,
  postUploadFormDocumnet,
  postUploadProfileImage,
  putProfileUpoload,
  putUpoloadFormDocument,
} from './api';
import type { FormPresignedUrlData } from '@/types/form/remote';
import { useAccessTokenValueStore } from '@/store/auth/auth';
import { Cookie } from '@/apis/cookie/cookie';

export const useSubmitFinalFormMutation = (formUrl: string) => {
  const setFormStep = useSetFormStepStore();
  const { handleError } = useApiError();
  const accessToken = useAccessTokenValueStore();

  const { mutate: submitFinalFormMutate, ...restQuery } = useMutation({
    mutationFn: () => patchSubmitFinalForm(formUrl, accessToken),
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
  const accessToken = useAccessTokenValueStore();

  const { mutate: submitDraftFormMutate, ...restMutation } = useMutation({
    mutationFn: () => postSubmitDraftForm(formData, accessToken),
    onSuccess: () => setFormStep('초안제출완료'),
    onError: handleError,
  });

  return { submitDraftFormMutate, ...restMutation };
};

export const useSaveFormMutation = () => {
  const { handleError } = useApiError();
  const accessToken = useAccessTokenValueStore();

  const { mutate: saveFormMutate, ...restMutation } = useMutation({
    mutationFn: (form: Form) => postSaveForm(form, accessToken),
    onError: handleError,
  });

  return { saveFormMutate, ...restMutation };
};

export const useUploadFormDocumentMutation = (
  setFormDocument: Dispatch<SetStateAction<FormDocument>>
) => {
  const { handleError } = useApiError();
  const accessToken = useAccessTokenValueStore();

  const { mutate: uploadFormDocumentMutate, ...restMutation } = useMutation({
    mutationFn: async (file: File) => {
      const presignedData = await postUploadFormDocumnet(accessToken);

      await putUpoloadFormDocument(file, presignedData);

      return presignedData;
    },
    onSuccess: (presignedData: FormPresignedUrlData) => {
      setFormDocument((prev) => ({
        ...prev,
        formUrl: presignedData.downloadUrl,
        downloadUrl: presignedData.downloadUrl,
      }));
    },
    onError: handleError,
  });

  return { uploadFormDocumentMutate, ...restMutation };
};

export const useUploadProfileImageMutation = () => {
  const { handleError } = useApiError();
  const accessToken = useAccessTokenValueStore();

  const mutation = useMutation(
    async (file: File) => {
      try {
        const presignedData = await postUploadProfileImage(accessToken);
        await putProfileUpoload(file, presignedData);

        if (presignedData.downloadUrl) {
          const downloadUrl = await getUploadProfile(presignedData.downloadUrl);

          Cookie.setItem('downloadUrl', downloadUrl);
          return downloadUrl;
        } else {
          return null;
        }
      } catch (error) {
        return error;
      }
    },
    {
      onError: handleError,
    }
  );

  return mutation;
};

export const useRefreshProfileImageMutation = () => {
  const { handleError } = useApiError();
  const accessToken = useAccessTokenValueStore();

  const mutation = useMutation(
    async () => {
      const presignedData = await postUploadProfileImage(accessToken);
      const newDownloadUrl = await getUploadProfile(presignedData.downloadUrl);
      return newDownloadUrl;
    },
    {
      onError: handleError,
    }
  );

  return mutation;
};
