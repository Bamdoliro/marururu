import { useApiError } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { getAdmisonTicketUrl } from './api';

export const usePrintAdmissionTicket = () => {
  const { handleError } = useApiError();
  const { mutate: PrintAdmissionTicket, ...resMutation } = useMutation({
    mutationFn: (ticketId: number) => getAdmisonTicketUrl([ticketId]),
    onSuccess: (ticketURL) => {
      if (ticketURL.dataList && ticketURL.dataList[0]) {
        if (ticketURL.dataList[0].examinationNumber > 0) {
          window.open(ticketURL.dataList[0].examinationNumber.toString(), '_blank');
        }
      }
    },
    onError: handleError,
  });

  return { PrintAdmissionTicket, ...resMutation };
};
