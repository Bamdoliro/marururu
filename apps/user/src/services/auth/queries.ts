import { refreshToken } from '@/apis/token';
import { getCheckLogin } from './api';
import { KEY } from '@/constants/common/constant';
import { useAccessTokenStore } from '@/store/auth/auth';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useLoginCheckQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.LOGIN_CHECK],
    queryFn: async () => {
      try {
        return await getCheckLogin(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getCheckLogin(accessToken);
        }
        throw error;
      }
    },
    suspense: false,
  });

  return { data, ...restQuery };
};
