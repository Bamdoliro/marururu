import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getFaqDetail, getFaqList } from './api';
import { refreshToken } from '@/apis/token';
import type { AxiosError } from 'axios';
import { useSetAccessTokenStore } from '@/store/auth/auth';

export const useFaqListQuery = () => {
  const setAccesssToken = useSetAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FAQ_LIST],
    queryFn: async () => {
      try {
        return await getFaqList();
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFaqList();
        }
        throw error;
      }
    },
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useFaqDetailQuery = (id: number) => {
  const setAccesssToken = useSetAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FAQ_DETAIL, id] as const,
    queryFn: async () => {
      try {
        return await getFaqDetail(id);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFaqDetail(id);
        }
        throw error;
      }
    },
  });

  return { data: data?.data, ...restQuery };
};
