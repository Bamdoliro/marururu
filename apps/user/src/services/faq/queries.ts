import { KEY } from '@/constants/common/constant';
import { useSuspenseQuery } from '@suspensive/react-query';
import { getFaqList } from './api';

export const useFaqListQuery = (category: string) => {
  const { data, ...restQuery } = useSuspenseQuery({
    queryKey: [KEY.FAQ_LIST, category] as const,
    queryFn: () => getFaqList(category),
  });

  return { data: data.dataList, ...restQuery };
};
