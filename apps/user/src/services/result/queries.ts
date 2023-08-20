import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getFinalResult, getFirstResult } from './api';

export const useFirstResultQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FIRST_RESULT] as const,
        queryFn: () => getFirstResult(),
    });

    return { data: data?.data, ...restQuery };
};

export const useFinalResultQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.FINAL_RESULT] as const,
        queryFn: () => getFinalResult(),
    });

    return { data: data?.data, ...restQuery };
};
