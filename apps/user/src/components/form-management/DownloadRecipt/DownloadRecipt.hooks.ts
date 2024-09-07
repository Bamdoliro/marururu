import { useUser } from '@/hooks';
import { useExportReciptQuery } from '@/services/form/queries';

export const useDownloadRecipt = () => {
  const { data: reciptData } = useExportReciptQuery();
  const { userData } = useUser();

  const handleDownloadReciptButtonClick = () => {
    if (!reciptData) return;
    const reciptUrl = window.URL.createObjectURL(new Blob([reciptData]));

    const link = document.createElement('a');
    link.href = reciptUrl;
    link.download = `${userData.name} 접수증.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(reciptUrl);
  };

  return { handleDownloadReciptButtonClick };
};
