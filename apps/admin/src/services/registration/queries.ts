import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getRegistrationList } from './api';

export const useRegistrationListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.REGISTRATION_LIST],
    queryFn: getRegistrationList,
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};
