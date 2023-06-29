import { mainNoticeList, mainQuestionList } from './api';
import * as KEY from '@/constants/key';
import { useQuery } from 'react-query';

// 메인 공지사항 리스트
interface MainNoticeListType {
    id: number;
    title: string;
}

export const useMainNoticeListQuery = () => {
    return useQuery<MainNoticeListType[]>({
        queryKey: [KEY.MAIN_NOTICE_LIST] as const,
        queryFn: () => mainNoticeList(),
        initialData: [],
    });
};

// 메인 faq 리스트
interface MainFaqListType {
    id: number;
    question: string;
}

export const useMainFaqListQuery = () => {
    return useQuery<MainFaqListType[]>({
        queryKey: [KEY.MAIN_QUESTION_LIST] as const,
        queryFn: () => mainQuestionList(),
        initialData: [],
    });
};
