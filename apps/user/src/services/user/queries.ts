import { Storage } from '@/apis/storage/storage';
import { KEY, TOKEN } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getUser } from './api';

export const useUserQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.USER] as const,
    queryFn: getUser,
    enabled: !!Storage.getItem(TOKEN.ACCESS),
    suspense: false,
  });

  return { data: data?.data, ...restQuery };
};
