import { useUser } from '@/hooks';
import { useDownloadAdmissionTicketQuery } from '@/services/result/queries';
import { useAccessTokenValueStore } from '@/store/auth/auth';

export const useDownloadAdmissionTicket = () => {
  const { data: admissionTicketData } = useDownloadAdmissionTicketQuery();
  const { userData } = useUser();
  const accessToken = useAccessTokenValueStore();

  const handleDownloadAdmissionTicketButtonClick = async () => {
    if (!admissionTicketData) return;

    try {
      const data = await admissionTicketData(accessToken);
      const admissionTicketUrl = window.URL.createObjectURL(new Blob([data]));

      const link = document.createElement('a');
      link.href = admissionTicketUrl;
      link.download = `${userData.name} 수험표.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(admissionTicketUrl);
    } catch (error) {
      console.error('수험표 다운로드 중 오류 발생:', error);
    }
  };

  return { handleDownloadAdmissionTicketButtonClick };
};
