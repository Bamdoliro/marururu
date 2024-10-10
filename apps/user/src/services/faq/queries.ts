import { KEY } from '@/constants/common/constant';
import { useSuspenseQuery } from '@suspensive/react-query';
import { getFaqList } from './api';
import type { AxiosError } from 'axios';
import { refreshToken } from '@/apis/token';
import { useSetAccessTokenStore } from '@/store/auth/auth';

export const useFaqListQuery = (category: string) => {
  const setAccesssToken = useSetAccessTokenStore();
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.FAQ_LIST, category] as const,
    queryFn: async () => {
      try {
        return await getFaqList(category);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFaqList(category);
        }
        throw error;
      }
    },
  });

  return { data: data.dataList, ...restQuery };
};
