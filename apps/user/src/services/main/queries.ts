import { mainNoticeList, mainQuestionList } from './api';
import * as KEY from '@/constants/key';
import { useQuery } from 'react-query';

// 메인 공지사항 리스트
interface MainNoticeListType {
    id: number;
    title: string;
}

export const useMainNoticeListQuery = () => {
    return useQuery<MainNoticeListType[]>([KEY.MAIN_NOTICE_LIST], () => mainNoticeList(), {
        refetchOnWindowFocus: false,
        initialData: [],
        staleTime: 1000 * 60,
    });
};

// 메인 faq 리스트
interface MainFaqListType {
    id: number;
    question: string;
}

export const useMainFaqListQuery = () => {
    return useQuery<MainFaqListType[]>([KEY.MAIN_QUESTION_LIST], () => mainQuestionList(), {
        refetchOnWindowFocus: false,
        initialData: [],
        staleTime: 1000 * 60,
    });
};
