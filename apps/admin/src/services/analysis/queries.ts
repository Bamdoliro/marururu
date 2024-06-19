import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import {
  getNumberOfApplicantsList,
  getGradeDistributionList,
  getSchoolOriginList,
} from './api';
import type { SchoolStatusReq, AnalysisApplicantTypeReq } from '@/types/analysis/remote';

export const useNumberOfApplicantsListQuery = () => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_APPLICANTS_COUNT],
    queryFn: () => getNumberOfApplicantsList(),
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useGradeDistributionListQuery = (params: AnalysisApplicantTypeReq) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_SCHOOL_ORIGIN, params],
    queryFn: () => getGradeDistributionList(params),
    suspense: false,
  });
  return { data: data?.dataList, ...restQuery };
};

export const useSchoolOriginListQuery = (params: SchoolStatusReq) => {
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_SCHOOL_ORIGIN, params],
    queryFn: () => getSchoolOriginList(params),
    suspense: false,
  });
  return { data: data?.dataList, ...restQuery };
};
