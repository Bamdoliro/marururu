import { KEY } from '@/constants/common/constant';
import { useFormListTypeValueStore } from '@/store/form/type';
import { ExportExcelType } from '@/types/form/client';
import { useQuery } from '@tanstack/react-query';
import {
  getExportExcel,
  getFormDetail,
  getFormList,
  getFormUrl,
  getSecondScoreFormat,
} from './api';

export const useFormListQuery = () => {
  const formListType = useFormListTypeValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FORM_LIST, formListType],
    queryFn: () => getFormList(formListType),
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
  });

  return { data: data?.data, ...restQuery };
};
