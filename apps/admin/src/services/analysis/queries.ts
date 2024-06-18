import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getAnalysisList, getNumberOfApplicantsList } from './api';

export const useSchoolOriginListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_LIST],
    queryFn: getAnalysisList,
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useNumberOfApplicantsListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_APPLICANTS_COUNT],
    queryFn: () => getNumberOfApplicantsList(),
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};
