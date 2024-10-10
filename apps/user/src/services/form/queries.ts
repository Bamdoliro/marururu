import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { useSuspenseQuery } from '@suspensive/react-query';
import {
  getExportForm,
  getExportRecipt,
  getFormStatus,
  getSaveForm,
  getSchoolList,
} from './api';
import { useAccessTokenStore } from '@/store/auth/auth';
import { refreshToken } from '@/apis/token';
import type { AxiosError } from 'axios';

export const useSchoolListQuery = (school: string) => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.FORM_SCHOOL_LIST, school],
    queryFn: () => getSchoolList(school),
  });

  return { data: data.dataList, ...restQuery };
};

export const useExportFormQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.EXPORT_FORM],
    queryFn: () => getExportForm,
    retry: 1,
    suspense: false,
  });

  return { data, ...restQuery };
};

export const useExportReciptQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.EXPORT_RECIPT],
    queryFn: () => getExportRecipt,
    retry: 1,
    suspense: false,
  });

  return { data, ...restQuery };
};

export const useSaveFormQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.SAVE_FORM],
    queryFn: async () => {
      try {
        return await getSaveForm(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getSaveForm(accessToken);
        }
        throw error;
      }
    },
    enabled: !!accessToken,
    retry: 1,
    suspense: false,
  });

  return { data, ...restQuery };
};

export const useFormStatusQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_STATUS],
    queryFn: async () => {
      try {
        return await getFormStatus(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getFormStatus(accessToken);
        }
        throw error;
      }
    },
    enabled: !!accessToken,
    suspense: false,
    retry: 1,
  });

  return { data, ...restQuery };
};
