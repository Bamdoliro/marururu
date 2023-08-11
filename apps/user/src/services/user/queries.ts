import KEY from '@/constants/key';
import { useQuery } from 'react-query';
import { getUserInfo } from './api';

export const useUserInfoQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.USER_INFO] as const,
        queryFn: () => getUserInfo(),
    });

    return { data: data?.data, ...restQuery };
};
