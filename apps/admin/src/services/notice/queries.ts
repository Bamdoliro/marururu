import { KEY } from '@/constants/common/constants';
import { useQuery } from '@tanstack/react-query';
import { getNoticeList } from './api';

export const useNoticeListQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.NOTICE_LIST],
        queryFn: getNoticeList,
    });

    return { data: data?.dataList, ...restQuery };
};