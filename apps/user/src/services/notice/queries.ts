import { noticeList } from './api';
import * as KEY from '@/constants/key';
import { useQuery } from 'react-query';

// 공지사항 리스트
interface NoticeListType {
    id: number;
    title: string;
    date: string;
}

export const useNoticeListQuery = () => {
    return useQuery<NoticeListType[]>([KEY.NOTICE_LIST], () => noticeList(), { initialData: [] });
};
