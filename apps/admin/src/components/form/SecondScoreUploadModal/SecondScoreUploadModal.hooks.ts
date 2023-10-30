import { useUploadSecondScoreFormatMutation } from '@/services/form/mutations';
import { useDownloadSecondScoreFormatQuery } from '@/services/form/queries';

export const useDownloadSecondScoreFormatAction = () => {
  const { data: secondScoreFormatData } = useDownloadSecondScoreFormatQuery();

  const handleDownloadSecondScoreFormatButtonClick = () => {
    if (!secondScoreFormatData) return;
    const excelUrl = window.URL.createObjectURL(new Blob([secondScoreFormatData]));

    const link = document.createElement('a');
    link.href = excelUrl;
    link.download = '2차 전형 점수 양식.xlsx';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(excelUrl);
  };

  return { handleDownloadSecondScoreFormatButtonClick };
};

export const useUploadSecondScoreFormatAction = (
  fileData: File | null,
  removeFileAndCloseModal: () => void
) => {
  const { uploadSecondScoreFormat } = useUploadSecondScoreFormatMutation(
    removeFileAndCloseModal
  );

  const handleUploadSecondScoreFormatButtonClick = () => {
    if (!fileData) return;

    const formData = new FormData();
    formData.append('xlsx', fileData);
    uploadSecondScoreFormat(formData);
  };

  return { handleUploadSecondScoreFormatButtonClick };
};
