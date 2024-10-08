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
import { useAccessTokenValueStore } from '@/store/auth/auth';

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
  const accessToken = useAccessTokenValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.SAVE_FORM],
    queryFn: () => getSaveForm(accessToken),
    enabled: !!accessToken,
    retry: 1,
    suspense: false,
  });

  return { data, ...restQuery };
};

export const useFormStatusQuery = () => {
  const accessToken = useAccessTokenValueStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_STATUS],
    queryFn: () => getFormStatus(accessToken),
    enabled: !!accessToken,
    suspense: false,
    retry: 1,
  });

  return { data: data, ...restQuery };
};
