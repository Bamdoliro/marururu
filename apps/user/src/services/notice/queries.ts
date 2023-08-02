import { noticeDetail, noticeList } from './api';
import KEY from '@/constants/key';
import { useQuery } from 'react-query';

// 공지사항 리스트

export const useNoticeListQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.NOTICE_LIST] as const,
        queryFn: () => noticeList(),
        initialData: [],
    });

    return { data: data?.dataList, ...restQuery };
};

// 공지사항 상세

export const useNoticeDetailQuery = (id: number) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.NOTICE_DETAIL] as const,
        queryFn: () => noticeDetail(id),
        initialData: { title: '', content: '', createdAt: '' },
    });

    return { data: data?.data, ...restQuery };
};
