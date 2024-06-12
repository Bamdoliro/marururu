import { Storage } from '@/apis/storage/storage';
import { KEY, TOKEN } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAdmin } from './api';

export const useAdminQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ADMIN] as const,
    queryFn: getAdmin,
    enabled: !!Storage.getItem(TOKEN.ACCESS),
    suspense: false,
  });

  return { data: data?.data, ...restQuery };
};
