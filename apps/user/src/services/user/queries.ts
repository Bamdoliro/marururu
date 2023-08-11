import KEY from '@/constants/key';
import { useQuery } from 'react-query';
import { getUser } from './api';

export const useUserQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.USER] as const,
        queryFn: () => getUser(),
    });

    return { data: data?.data, ...restQuery };
};
