import { useUser } from '@/hooks';
import { useExportReciptQuery } from '@/services/form/queries';
import { useAccessTokenValueStore } from '@/store/auth/auth';

export const useDownloadRecipt = () => {
  const { data: reciptData } = useExportReciptQuery();
  const { userData } = useUser();
  const accessToken = useAccessTokenValueStore();

  const handleDownloadReciptButtonClick = async () => {
    if (!reciptData) return;

    try {
      const data = await reciptData(accessToken);
      const reciptUrl = window.URL.createObjectURL(new Blob([data]));

      const link = document.createElement('a');
      link.href = reciptUrl;
      link.download = `${userData.name} 접수증.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(reciptUrl);
    } catch (error) {
      console.error('접수증 다운로드 중 오류 발생:', error);
    }
  };

  return { handleDownloadReciptButtonClick };
};
