import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getUser } from './api';
import { useAccessTokenValueStore } from '@/store/auth/auth';

export const useUserQuery = () => {
  const accessToken = useAccessTokenValueStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.USER],
    queryFn: () => getUser(accessToken),
    enabled: !!accessToken,
    suspense: false,
  });

  return { data: data, ...restQuery };
};
