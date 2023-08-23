import { KEY } from '@/constants/common/constants';
import { useQuery } from '@tanstack/react-query';
import { getFormReviewList } from './api';

export const useFormListQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FORM_LIST],
        queryFn: getFormReviewList,
    });

    return { data: data?.dataList, ...restQuery };
};
