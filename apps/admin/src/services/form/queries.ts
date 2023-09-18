import { KEY } from '@/constants/common/constant';
import { useFormListTypeValueStore } from '@/store/form/type';
import { useQuery } from '@tanstack/react-query';
import { getFormList, getSecondScoreFormat } from './api';

export const useFormListQuery = () => {
    const formListType = useFormListTypeValueStore();

    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FORM_LIST, formListType],
        queryFn: () => getFormList(formListType),
        suspense: false,
    });

    return { data: data?.dataList, ...restQuery };
};

export const useSecondScoreFormatQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.SECOND_SCORE_FORMAT],
        queryFn: getSecondScoreFormat,
        suspense: false,
    });

    return { data, ...restQuery };
};
