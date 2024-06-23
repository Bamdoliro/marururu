import { getCheckLogin } from './api';
import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';

export const useLoginCheckQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.LOGIN_CHECK],
    queryFn: getCheckLogin,
    suspense: false,
  });

  return { data, ...restQuery };
};
