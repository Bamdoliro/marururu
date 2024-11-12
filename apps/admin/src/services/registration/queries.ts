import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getRegistrationList } from './api';

export const useNoticeListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.NOTICE_LIST],
    queryFn: getRegistrationList,
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};
