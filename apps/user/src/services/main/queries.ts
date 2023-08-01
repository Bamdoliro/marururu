import { mainNoticeList, mainQuestionList } from './api';
import KEY from '@/constants/key';
import { useQuery } from 'react-query';

// 메인 공지사항 리스트
interface MainNoticeList {
    id: number;
    title: string;
}

export const useMainNoticeListQuery = () => {
    return useQuery<MainNoticeList[]>({
        queryKey: [KEY.MAIN_NOTICE_LIST] as const,
        queryFn: () => mainNoticeList(),
        initialData: [],
    });
};

// 메인 faq 리스트
interface MainFaqList {
    id: number;
    question: string;
}

export const useMainFaqListQuery = () => {
    return useQuery<MainFaqList[]>({
        queryKey: [KEY.MAIN_QUESTION_LIST] as const,
        queryFn: () => mainQuestionList(),
        initialData: [],
    });
};
