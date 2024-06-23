import { KEY } from '@/constants/common/constant';
import { getFairList } from './api';
import { useQuery } from '@tanstack/react-query';

export const useFairListQuery = (fairType: string) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.FAIR_LIST, fairType] as const,
    queryFn: () => getFairList(fairType),
  });

  return { data: data?.dataList, ...restQuery };
};
