import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAdmissionTicket, getFinalResult, getFirstResult } from './api';
import { useAccessTokenValueStore } from '@/store/auth/auth';

export const useFirstResultQuery = () => {
  const accessToken = useAccessTokenValueStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FIRST_RESULT] as const,
    queryFn: () => getFirstResult(accessToken),
    enabled: !!accessToken,
    suspense: false,
  });

  return { data: data, ...restQuery };
};

export const useFinalResultQuery = () => {
  const accessToken = useAccessTokenValueStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FINAL_RESULT] as const,
    queryFn: () => getFinalResult(accessToken),
    enabled: !!accessToken,
    suspense: false,
  });

  return { data: data, ...restQuery };
};

export const useDownloadAdmissionTicketQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ADMISSION_TICKET],
    queryFn: () => getAdmissionTicket,
    suspense: false,
  });

  return { data, ...restQuery };
};
