import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail, getNoticeList } from './api';
import type { AxiosError } from 'axios';
import { refreshToken } from '@/apis/token';
import { useSetAccessTokenStore } from '@/store/auth/auth';

export const useNoticeListQuery = () => {
  const setAccesssToken = useSetAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.NOTICE_LIST],
    queryFn: async () => {
      try {
        return await getNoticeList();
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getNoticeList();
        }
        throw error;
      }
    },
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useNoticeDetailQuery = (id: number) => {
  const setAccesssToken = useSetAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.NOTICE_DETAIL, id] as const,
    queryFn: async () => {
      try {
        return await getNoticeDetail(id);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getNoticeDetail(id);
        }
        throw error;
      }
    },
  });

  return { data: data?.data, ...restQuery };
};
