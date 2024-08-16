import { useApiError } from '@/hooks';
import { useSetFormStepStore } from '@/store';
import type { Form, FormDocument } from '@/types/form/client';
import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import { type Dispatch, type SetStateAction } from 'react';
import {
  getUploadProfile,
  patchSubmitFinalForm,
  postSaveForm,
  postSubmitDraftForm,
  postUploadFormDocumnet,
  postUploadProfileImage,
  putProfileUpoload,
} from './api';
import { Storage } from '@/apis/storage/storage';

export const useSubmitFinalFormMutation = (formUrl: string) => {
  const setFormStep = useSetFormStepStore();
  const { handleError } = useApiError();

  const { mutate: submitFinalFormMutate, ...restQuery } = useMutation({
    mutationFn: () => patchSubmitFinalForm(formUrl),
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
  const { handleError } = useApiError();

  const mutation = useMutation(
    async (file: File) => {
      const presignedData = await postUploadProfileImage();
      await putProfileUpoload(file, presignedData);
      const downloadUrl = await getUploadProfile(presignedData.downloadUrl);

      Storage.setLocalItem('downloadUrl', downloadUrl);

      return downloadUrl;
    },
    {
      onError: handleError,
      onSuccess: () => {
        alert('프로필 이미지가 업로드되었습니다.');
        // 더 이상 form.applicant.identificationPictureUri를 업데이트하지 않음
      },
    }
  );

  return mutation;
};
