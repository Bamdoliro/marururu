import { KEY } from '@/constants/common/constant';
import {
  useFormListTypeValueStore,
  useFormListSortingTypeValueStore,
} from '@/store/form/type';
import { useQuery } from '@tanstack/react-query';
import { getExportExcel, getFormDetail, getFormList, getSecondScoreFormat } from './api';
import type { ExportExcelType } from '@/types/form/client';

export const useFormListQuery = () => {
  const formListType = useFormListTypeValueStore();
  const formListSortingType = useFormListSortingTypeValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_LIST, formListType, formListSortingType],
    queryFn: () => getFormList(formListType, formListSortingType),
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useDownloadSecondScoreFormatQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.SECOND_SCORE_FORMAT],
    queryFn: getSecondScoreFormat,
    suspense: false,
  });

  return { data, ...restQuery };
};

export const useFormListSecodnQuery = () => {
  const formListType = useFormListTypeValueStore();
  const formListSortingType = useFormListSortingTypeValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_LIST, formListType, formListSortingType],
    queryFn: () => getFormList(formListType, formListSortingType),
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useExportExcelQuery = (exportExcelType: ExportExcelType | null) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.EXPORT_EXCEL, exportExcelType],
    queryFn: () => getExportExcel(exportExcelType as ExportExcelType),
    suspense: false,
    enabled: !!exportExcelType,
  });

  return { data, ...restQuery };
};

export const useFormDetailQuery = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_DETAIL, id],
    queryFn: () => getFormDetail(id),
    staleTime: 60000,
    cacheTime: 300000,
  });

  return { data: data?.data, ...restQuery };
};
