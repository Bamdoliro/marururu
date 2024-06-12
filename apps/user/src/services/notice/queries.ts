import { KEY } from '@/constants/common/constant';
import { useSuspenseQuery } from '@suspensive/react-query';
import { getNoticeDetail, getNoticeList } from './api';

export const useNoticeListQuery = () => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.NOTICE_LIST] as const,
    queryFn: getNoticeList,
  });

  return { data: data.dataList, ...restQuery };
};

export const useNoticeDetailQuery = (id: number) => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.NOTICE_DETAIL, id] as const,
    queryFn: () => getNoticeDetail(id),
  });

  return { data: data.data, ...restQuery };
};
