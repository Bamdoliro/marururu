import { KEY } from '@/constants/common/constant';
import {
  useFormListTypeValueStore,
  useFormListSortingTypeValueStore,
} from '@/store/form/type';
import { useQuery } from '@tanstack/react-query';
import { getExportExcel, getFormDetail, getFormList, getSecondScoreFormat } from './api';
import type { ExportExcelType } from '@/types/form/client';
import { useAccessTokenStore } from '@/store/auth/auth';
import type { AxiosError } from 'axios';
import { refreshToken } from '@/apis/token';

export const useFormListQuery = () => {
  const formListType = useFormListTypeValueStore();
  const formListSortingType = useFormListSortingTypeValueStore();
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_LIST, formListType, formListSortingType],
    queryFn: async () => {
      try {
        return await getFormList(accessToken, formListType, formListSortingType);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFormList(accessToken, formListType, formListSortingType);
        }
        throw error;
      }
    },
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useDownloadSecondScoreFormatQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.SECOND_SCORE_FORMAT],
    queryFn: async () => {
      try {
        return await getSecondScoreFormat(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getSecondScoreFormat(accessToken);
        }
        throw error;
      }
    },
    suspense: false,
  });

  return { data, ...restQuery };
};

export const useFormListSecodnQuery = () => {
  const formListType = useFormListTypeValueStore();
  const formListSortingType = useFormListSortingTypeValueStore();
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_LIST, formListType, formListSortingType],
    queryFn: async () => {
      try {
        return await getFormList(accessToken, formListType, formListSortingType);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFormList(accessToken, formListType, formListSortingType);
        }
        throw error;
      }
    },
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useExportExcelQuery = (exportExcelType: ExportExcelType | null) => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.EXPORT_EXCEL, exportExcelType],
    queryFn: async () => {
      try {
        return await getExportExcel(exportExcelType as ExportExcelType, accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getExportExcel(exportExcelType as ExportExcelType, accessToken);
        }
        throw error;
      }
    },
    suspense: false,
    enabled: !!exportExcelType,
  });

  return { data, ...restQuery };
};

export const useFormDetailQuery = (id: number) => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_DETAIL, id],
    queryFn: async () => {
      try {
        return await getFormDetail(id, accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFormDetail(id, accessToken);
        }
        throw error;
      }
    },
  });

  return { data: data?.data, ...restQuery };
};
