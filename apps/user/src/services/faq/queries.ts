import { useQuery } from 'react-query';
import KEY from '@/constants/key';
import { faqCategoryList, getFaqList } from './api';

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

export const useFaqListQuery = (category: string) => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FAQ_LIST] as const,
        queryFn: () => getFaqList(category),
    });

    return { data: data?.dataList, ...restQuery };
};
