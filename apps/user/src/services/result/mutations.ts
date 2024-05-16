import { useApiError } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { getAdmisonTicketUrl } from './api';

export const usePrintAdmissionTicket = () => {
  const { handleError } = useApiError();
  const { mutate: printAdmissionTicket, ...resMutation } = useMutation({
    mutationFn: (ticketId: number) => getAdmisonTicketUrl([ticketId]),
    onSuccess: (ticketURL) => {
      if (
        ticketURL &&
        Array.isArray(ticketURL.dataList) &&
        ticketURL.dataList.length > 0
      ) {
        const firstItem = ticketURL.dataList[0];
        if (
          firstItem &&
          typeof firstItem.examinationNumber === 'number' &&
          firstItem.examinationNumber > 0
        ) {
          window.open(firstItem.examinationNumber.toString(), '_blank');
        } else {
          console.error('Invalid examination number or no examination number available.');
        }
      } else {
        console.error('Data list is empty or not properly formatted.');
      }
    },
    onError: handleError,
  });

  return { printAdmissionTicket, ...resMutation };
};
