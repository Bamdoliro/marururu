import { useQuery } from '@tanstack/react-query';
import { KEY } from '@/constants/common/constant';
import { getFaqList } from './api';

export const useFaqListQuery = (category: string) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FAQ_LIST] as const,
        queryFn: () => getFaqList(category),
    });

    return { data: data?.dataList, ...restQuery };
};
