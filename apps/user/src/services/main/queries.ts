import { mainQuestionList } from './api';
import KEY from '@/constants/key';
import { useQuery } from 'react-query';

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
