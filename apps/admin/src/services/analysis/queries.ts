import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import { getSchoolOrigin, getNumberOfApplicantsList } from './api';
import type { SchoolStatusReq } from '@/types/analysis/remote';

export const useSchoolOriginListQuery = (params: SchoolStatusReq) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_SCHOOL_ORIGIN, params],
    queryFn: () => getSchoolOrigin(params),
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
