import { useApiError } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { postSubmitRegistForm, putUpoloadRegistFormDocument } from './api';
import type { RegistFormPresignedUrlData } from '@/types/regist/remote';
import type { Dispatch, SetStateAction } from 'react';
import type { RegistFormDocument } from '@/types/regist/client';

export const useUploadFormDocumentMutation = (
  setFormDocument: Dispatch<SetStateAction<RegistFormDocument>>
) => {
  const { handleError } = useApiError();

  const { mutate: uploadFormDocumentMutate, ...restMutation } = useMutation({
    mutationFn: async (file: File) => {
      const presignedData = await postSubmitRegistForm();

      await putUpoloadRegistFormDocument(file, presignedData);

      return presignedData;
    },
    onSuccess: (presignedData: RegistFormPresignedUrlData) => {
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
