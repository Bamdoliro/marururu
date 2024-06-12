import { Storage } from '@/apis/storage/storage';
import { KEY, TOKEN } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAdmissionTicket, getFinalResult, getFirstResult } from './api';

export const useFirstResultQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FIRST_RESULT] as const,
    queryFn: getFirstResult,
    enabled: !!Storage.getItem(TOKEN.ACCESS),
    suspense: false,
  });

  return { data: data?.data, ...restQuery };
};

export const useFinalResultQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FINAL_RESULT] as const,
    queryFn: getFinalResult,
    enabled: !!Storage.getItem(TOKEN.ACCESS),
    suspense: false,
  });

  return { data: data?.data, ...restQuery };
};

export const useDownloadAdmissionTicketQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ADMISSION_TICKET],
    queryFn: getAdmissionTicket,
    suspense: false,
  });

  return { data, ...restQuery };
};
