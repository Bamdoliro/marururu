import { useQuery } from 'react-query';
import KEY from '@/constants/key';
import { faqCategoryList, faqList } from './api';

// 카테고리 리스트
interface FaqCategoryListType {
    id: number;
    category: string;
}

export const useFaqCategoryListQuery = () => {
    return useQuery<FaqCategoryListType[]>({
        queryKey: [KEY.FAQ_CATEGORY_LIST] as const,
        queryFn: () => faqCategoryList(),
        initialData: [],
    });
};

// FAQ 리스트
interface FaqList {
    title: string;
    content: string;
}

export const useFaqListQuery = (category: string) => {
    return useQuery<FaqList[]>({
        queryKey: [KEY.FAQ_LIST] as const,
        queryFn: () => faqList(category),
        initialData: [],
    });
};
