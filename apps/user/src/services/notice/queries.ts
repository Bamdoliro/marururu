import { noticeList } from './api';
import KEY from '@/constants/key';
import { useQuery } from 'react-query';

// 공지사항 리스트
interface NoticeList {
    id: number;
    title: string;
    createdAt: string;
}

export const useNoticeListQuery = () => {
    return useQuery<NoticeList[]>({
        queryKey: [KEY.NOTICE_LIST] as const,
        queryFn: () => noticeList(),
        initialData: [],
    });
};
