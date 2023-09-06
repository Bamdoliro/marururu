import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getApplicationList } from './api';

export const useApplicationListQuery = (type: string) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.APPLICATION_LIST, type] as const,
        queryFn: () => getApplicationList(type),
    });

    return { data: data?.dataList, ...restQuery };
};
