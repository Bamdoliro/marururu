import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getUser } from './api';
import { useAccessTokenStore } from '@/store/auth/auth';
import type { AxiosError } from 'axios';
import { refreshToken } from '@/apis/token';

export const useUserQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.USER],
    queryFn: async () => {
      try {
        return await getUser(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getUser(accessToken);
        }
        throw error;
      }
    },
    enabled: !!accessToken,
    suspense: false,
  });

  return { data: data, ...restQuery };
};
