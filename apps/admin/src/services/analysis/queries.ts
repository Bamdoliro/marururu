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
import { useAccessTokenStore } from '@/store/auth/auth';
import type { AxiosError } from 'axios';
import { refreshToken } from '@/apis/token';

export const useNumberOfApplicantsListQuery = () => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_APPLICANTS_COUNT],
    queryFn: async () => {
      try {
        return await getNumberOfApplicantsList(accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getNumberOfApplicantsList(accessToken);
        }
        throw error;
      }
    },
    suspense: false,
  });

  return { data: data?.dataList, ...restQuery };
};

export const useGradeDistributionListQuery = (params: AnalysisApplicantTypeReq) => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_GRADE_DISTRIBUTION, params],
    queryFn: async () => {
      try {
        return await getGradeDistributionList(params, accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getGradeDistributionList(params, accessToken);
        }
        throw error;
      }
    },
    suspense: false,
  });
  return { data: data?.dataList, ...restQuery };
};

export const useGenderRatioListQuery = (params: GenderRatioStatusReq) => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_GENDER_RATIO, params],
    queryFn: async () => {
      try {
        return await getGenderRatioList(params, accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getGenderRatioList(params, accessToken);
        }
        throw error;
      }
    },
    suspense: false,
  });
  return { data: data?.dataList, ...restQuery };
};

export const useSchoolOriginListQuery = (params: SchoolStatusReq) => {
  const [accessToken, setAccesssToken] = useAccessTokenStore();

  const { data, ...restQuery } = useQuery({
    queryKey: [KEY.ANALYSIS_SCHOOL_ORIGIN, params],
    queryFn: async () => {
      try {
        return await getSchoolOriginList(params, accessToken);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response?.status === 401) {
          await refreshToken(setAccesssToken);
          return await getSchoolOriginList(params, accessToken);
        }
        throw error;
      }
    },
    suspense: false,
  });
  return { data: data?.dataList, ...restQuery };
};
