import { useFormStatusQuery } from '@/services/form/queries';
import { useUploadFormDocumentMutation } from '@/services/regist/mutations';
import { useSetRegistFormStore } from '@/store/regist/registForm';
import { useState, type ChangeEventHandler } from 'react';

export const useInput = (openLoader: () => void, closeLoader: () => void) => {
  const setFormDocument = useSetRegistFormStore();
  const { uploadFormDocumentMutate, isLoading } =
    useUploadFormDocumentMutation(setFormDocument);
  const { data: handleFormStatus } = useFormStatusQuery();
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);

  const handleFormDocumentChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (handleFormStatus?.status === 'PASSED') {
      const { files } = e.target;
      if (!files || files.length === 0) return;

      const file = files[0];

      setFormDocument((prev) => ({ ...prev, fileName: file.name }));

      openLoader();

      uploadFormDocumentMutate(file, {
        onSuccess: () => {
          setIsUploadSuccessful(true);
          closeLoader();
        },
        onError: () => {
          setIsUploadSuccessful(false);
          closeLoader();
          alert('파일 업로드에 실패했습니다. 다시 시도해주세요.');
        },
      });
    } else {
      alert('파일 업로드는 최종 합격자만 가능합니다.');
    }
  };

  return { handleFormDocumentChange, isUploadSuccessful, isLoading };
};
