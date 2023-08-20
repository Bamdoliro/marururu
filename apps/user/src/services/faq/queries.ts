import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getFaqList } from './api';

export const useFaqListQuery = (category: string) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FAQ_LIST, category] as const,
        queryFn: () => getFaqList(category),
    });

    return { data: data?.dataList, ...restQuery };
};
