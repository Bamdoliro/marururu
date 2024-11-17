import { useFormStatusQuery } from '@/services/form/queries';
import { useUploadFormDocumentMutation } from '@/services/regist/mutations';
import { useDownloadRegistFormQuery } from '@/services/regist/queries';
import { useSetRegistFormStore } from '@/store/regist/registForm';
import { useState, type ChangeEventHandler } from 'react';

export const useDownloadRegistForm = () => {
  const { data: registFormData } = useDownloadRegistFormQuery();
  const { data: handleFormStatus } = useFormStatusQuery();

  const handleDownloadRegistFormButtonClick = () => {
    if (handleFormStatus?.status === 'PASSED') {
      if (!registFormData) return;
      const registFormUrl = window.URL.createObjectURL(new Blob([registFormData]));

      const link = document.createElement('a');
      link.href = registFormUrl;
      link.download = '입학 등록원 & 급연 동의서.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(registFormUrl);
    } else {
      alert('입학 등록원 & 금연 동의서는 최종 합격자만 다운로드 할 수 있습니다.');
    }
  };

  return { handleDownloadRegistFormButtonClick };
};

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
