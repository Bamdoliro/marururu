import { useUser } from '@/hooks';
import { useExportFormQuery } from '@/services/form/queries';

export const useDownloadForm = () => {
  const { userData } = useUser();
  const { data: exportFormData } = useExportFormQuery();

  const handlleDownloadFormButtonClick = () => {
    if (!exportFormData) return;
    const pdfBlobUrl = window.URL.createObjectURL(new Blob([exportFormData]));

    const link = document.createElement('a');
    link.href = pdfBlobUrl;
    link.download = `${userData.name} 부산소프트웨어마이스터고등학교 원서.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(pdfBlobUrl);
  };

  return { handlleDownloadFormButtonClick };
};
