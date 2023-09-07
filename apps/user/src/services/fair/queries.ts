import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getFairList } from './api';

export const useFairListQuery = (type: string) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FAIR_LIST, type] as const,
        queryFn: () => getFairList(type),
    });

    return { data: data?.dataList, ...restQuery };
};
