import { ROUTES } from '@/constants/common/constant';
import { useUser } from '@/hooks';
import { useDownloadAdmissionTicketQuery } from '@/services/result/queries';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
  const router = useRouter();

  const handleMoveMainPage = () => {
    router.push(ROUTES.MAIN);
  };

  return { handleMoveMainPage };
};

export const useDownloadAdmissionTicket = () => {
  const { data: admissionTicketData } = useDownloadAdmissionTicketQuery();
  const user = useUser();

  const handleDownloadAdmissionTicketButtonClick = () => {
    if (!admissionTicketData) return;
    const admissionTicketUrl = window.URL.createObjectURL(
      new Blob([admissionTicketData])
    );

    const link = document.createElement('a');
    link.href = admissionTicketUrl;
    link.download = user.userData.name + '수험표.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(admissionTicketUrl);
  };

  return { handleDownloadAdmissionTicketButtonClick };
};
