import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAdmissionTicket, getFinalResult, getFirstResult } from './api';
import { useAccessTokenStore } from '@/store/auth/auth';
import type { AxiosError } from 'axios';
import { refreshToken } from '@/apis/token';

export const useFirstResultQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FIRST_RESULT] as const,
    queryFn: async () => {
      try {
        return await getFirstResult(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFirstResult(accessToken);
        }
        throw error;
      }
    },
    enabled: !!accessToken,
    suspense: false,
  });

  return { data: data, ...restQuery };
};

export const useFinalResultQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FINAL_RESULT] as const,
    queryFn: async () => {
      try {
        return await getFinalResult(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFinalResult(accessToken);
        }
        throw error;
      }
    },
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
