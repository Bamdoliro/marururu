import { useUser } from '@/hooks';
import { useDownloadAdmissionTicketQuery } from '@/services/result/queries';

export const useDownloadAdmissionTicket = () => {
  const { data: admissionTicketData } = useDownloadAdmissionTicketQuery();
  const { userData } = useUser();

  const handleDownloadAdmissionTicketButtonClick = () => {
    if (!admissionTicketData) return;
    const admissionTicketUrl = window.URL.createObjectURL(
      new Blob([admissionTicketData])
    );

    const link = document.createElement('a');
    link.href = admissionTicketUrl;
    link.download = `${userData.name} 수험표.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(admissionTicketUrl);
  };

  return { handleDownloadAdmissionTicketButtonClick };
};
