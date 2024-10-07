import { KEY } from '@/constants/common/constant';
import { useQuery } from '@tanstack/react-query';
import {
  getNumberOfApplicantsList,
  getGradeDistributionList,
  getSchoolOriginList,
  getGenderRatioList,
} from './api';
import type {
  SchoolStatusReq,
  AnalysisApplicantTypeReq,
  GenderRatioStatusReq,
} from '@/types/analysis/remote';
import { useAccessTokenValueStore } from '@/store/auth/auth';

export const useNumberOfApplicantsListQuery = () => {
  const accessToken = useAccessTokenValueStore();
  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_APPLICANTS_COUNT],
    queryFn: () => getNumberOfApplicantsList(accessToken),
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useGradeDistributionListQuery = (params: AnalysisApplicantTypeReq) => {
  const accessToken = useAccessTokenValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_GRADE_DISTRIBUTION, params],
    queryFn: () => getGradeDistributionList(params, accessToken),
    suspense: false,
  });
  return { data: data?.dataList, ...restQuery };
};

export const useGenderRatioListQuery = (params: GenderRatioStatusReq) => {
  const accessToken = useAccessTokenValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_GENDER_RATIO, params],
    queryFn: () => getGenderRatioList(params, accessToken),
    suspense: false,
  });
  return { data: data?.dataList, ...restQuery };
};

export const useSchoolOriginListQuery = (params: SchoolStatusReq) => {
  const accessToken = useAccessTokenValueStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_SCHOOL_ORIGIN, params],
    queryFn: () => getSchoolOriginList(params, accessToken),
    suspense: false,
  });
  return { data: data?.dataList, ...restQuery };
};
