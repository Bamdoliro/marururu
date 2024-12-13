import { useApiError } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import {
  patchFormEnter,
  postSubmitRegistForm,
  putUpoloadRegistFormDocument,
} from './api';
import type { RegistFormPresignedUrlData } from '@/types/regist/remote';
import type { Dispatch, SetStateAction } from 'react';
import type { RegistFormDocument } from '@/types/regist/client';
import { useSetRegistFormStore } from '@/store/regist/registForm';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/common/constant';

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

export const useChangeFormEnterMutation = () => {
  const { handleError } = useApiError();
  const setRegistForm = useSetRegistFormStore();
  const router = useRouter();

  const { mutate: changeFormEnterMutate, ...restMutation } = useMutation({
    mutationFn: () => patchFormEnter(),
    onSuccess: () => {
      alert('서류가 제출이 되었습니다.');
      router.replace(ROUTES.MAIN);
      setRegistForm({ fileName: '', formUrl: '' });
    },
    onError: handleError,
  });

  return { changeFormEnterMutate, ...restMutation };
};
