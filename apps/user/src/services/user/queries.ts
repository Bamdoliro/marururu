import { Storage } from '@/apis/storage/storage';
import KEY from '@/constants/key';
import TOKEN from '@/constants/token';
import { useQuery } from '@tanstack/react-query';
import { getUser } from './api';

export const useUserQuery = () => {
    const { data, ...restQuery } = useQuery({
        queryKey: [KEY.USER] as const,
        queryFn: () => getUser(),
        enabled: !!Storage.getItem(TOKEN.ACCESS),
    });

    return { data: data?.data, ...restQuery };
};
