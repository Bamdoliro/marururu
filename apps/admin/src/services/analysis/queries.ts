import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAnalysisList } from './api';

export const useSchoolOriginListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_LIST],
    queryFn: getAnalysisList,
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};
