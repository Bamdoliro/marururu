import { getNoticeDetail, getNoticeList } from './api';
import KEY from '@/constants/key';
import { useQuery } from '@tanstack/react-query';

export const useNoticeListQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.NOTICE_LIST] as const,
        queryFn: () => getNoticeList(),
    });

    return { data: data?.dataList, ...restQuery };
};

export const useNoticeDetailQuery = (id: number) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.NOTICE_DETAIL] as const,
        queryFn: () => getNoticeDetail(id),
    });

    return { data: data?.data, ...restQuery };
};
