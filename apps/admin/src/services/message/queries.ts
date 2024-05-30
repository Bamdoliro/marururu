import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getMessageDetail, getMessageList } from './api';

export const useMessageListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.MESSAGE_LIST],
    queryFn: getMessageList,
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useMessageDetailQuery = (id: number) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.MESSAGE_DETAIL, id] as const,
    queryFn: () => getMessageDetail(id),
  });

  return { data: data?.data, ...restQuery };
};
