import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAdmin } from './api';
import { useAccessTokenStore } from '@/store/auth/auth';
import { refreshToken } from '@/apis/token';
import type { AxiosError } from 'axios';

export const useAdminQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ADMIN],
    queryFn: async () => {
      try {
        return await getAdmin(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getAdmin(accessToken);
        }
        throw error;
      }
    },
    enabled: !!accessToken,
    suspense: false,
  });

  return { data: data, ...restQuery };
};
