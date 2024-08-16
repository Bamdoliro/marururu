import { useApiError } from '@/hooks';
import { useSetFormStepStore, useSetFormStore } from '@/store';
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
  const setForm = useSetFormStore();

  const mutation = useMutation(
    async (file: File) => {
      // 1. Presigned URL 가져오기
      const presignedData = await postUploadProfileImage();

      // 2. 파일 업로드
      await putProfileUpoload(file, presignedData);

      // 3. 업로드된 파일의 다운로드 URL 가져오기
      const downloadUrl = await getUploadProfile(presignedData.downloadUrl);

      return downloadUrl; // 다운로드 URL 반환 (미리보기용 URL)
    },
    {
      onError: handleError,
      onSuccess: (downloadUrl) => {
        // 4. 성공 시 사용자에게 알림 및 상태 업데이트
        alert('프로필 이미지가 업로드되었습니다.');

        // 5. 업로드된 파일의 미리보기 URL을 이용해 상태 업데이트
        setForm((prev) => ({
          ...prev,
          applicant: { ...prev.applicant, identificationPictureUri: downloadUrl },
        }));
      },
    }
  );

  return mutation;
};
