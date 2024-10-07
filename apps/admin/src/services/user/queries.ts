import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAdmin } from './api';
import { useAccessTokenValueStore } from '@/store/auth/auth';

export const useAdminQuery = () => {
  const accessToken = useAccessTokenValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ADMIN],
    queryFn: () => getAdmin(accessToken),
    enabled: !!accessToken,
    suspense: false,
  });

  return { data: data, ...restQuery };
};
