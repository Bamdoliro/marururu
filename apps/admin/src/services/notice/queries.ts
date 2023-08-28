import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getNoticeList } from './api';

export const useNoticeListQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.NOTICE_LIST],
        queryFn: getNoticeList,
        suspense: false,
    });

    return { data: data?.dataList, ...restQuery };
};
