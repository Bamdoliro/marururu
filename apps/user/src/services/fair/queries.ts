import { KEY } from '@/constants/common/constant';
import { useSuspenseQuery } from '@suspensive/react-query';
import { getFairList } from './api';
import type { AxiosError } from 'axios';
import { refreshToken } from '@/apis/token';
import { useSetAccessTokenStore } from '@/store/auth/auth';

export const useFairListQuery = (fairType: string) => {
  const setAccesssToken = useSetAccessTokenStore();
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.FAIR_LIST, fairType] as const,
    queryFn: async () => {
      try {
        return await getFairList(fairType);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFairList(fairType);
        }
        throw error;
      }
    },
  });

  return { data: data.dataList, ...restQuery };
};
