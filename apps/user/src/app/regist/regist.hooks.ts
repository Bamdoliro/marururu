import { useUploadFormDocumentMutation } from '@/services/regist/mutations';
import { useDownloadRegistFormQuery } from '@/services/regist/queries';
import { useSetRegistFormStore } from '@/store/regist/registForm';
import { useState, type ChangeEventHandler } from 'react';

export const useDownloadRegistForm = () => {
  const { data: registFormData } = useDownloadRegistFormQuery();

  const handleDownloadRegistFormButtonClick = () => {
    if (!registFormData) return;
    const registFormUrl = window.URL.createObjectURL(new Blob([registFormData]));

    const link = document.createElement('a');
    link.href = registFormUrl;
    link.download = '입학 등록원 & 급연 동의서.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(registFormUrl);
  };

  return { handleDownloadRegistFormButtonClick };
};

export const useInput = (openLoader: () => void, closeLoader: () => void) => {
  const setFormDocument = useSetRegistFormStore();
  const { uploadFormDocumentMutate, isLoading } =
    useUploadFormDocumentMutation(setFormDocument);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);

  const handleFormDocumentChange: ChangeEventHandler<HTMLInputElement> = (e) => {
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
  };

  return { handleFormDocumentChange, isUploadSuccessful, isLoading };
};
