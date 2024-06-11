import { KEY } from '@/constants/common/constant';
import { useSuspenseQuery } from '@suspensive/react-query';
import { getFairList } from './api';

export const useFairListQuery = (fairType: string) => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.FAIR_LIST, fairType] as const,
    queryFn: () => getFairList(fairType),
  });

  return { data: data.dataList, ...restQuery };
};
