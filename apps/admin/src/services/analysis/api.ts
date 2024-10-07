import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type {
  GetNumberOfApplicantsRes,
  AnalysisApplicantTypeReq,
  GetGradeDistributionRes,
  SchoolStatusReq,
  GetSchoolOriginRes,
  GenderRatioStatusReq,
  GetGenderRatioRes,
} from '@/types/analysis/remote';

export const getNumberOfApplicantsList = async (accessToken: string | null) => {
  const { data } = await maru.get<GetNumberOfApplicantsRes>(
    '/analysis/number-of-applicants',
    authorization(accessToken)
  );
  return data;
};

export const getGradeDistributionList = async (
  { statusList }: AnalysisApplicantTypeReq,
  accessToken: string | null
) => {
  const { data } = await maru.get<GetGradeDistributionRes>(
    `/analysis/grade-distribution?statusList=${statusList.join('&statusList=')}`,
    authorization(accessToken)
  );
  return data;
};

export const getGenderRatioList = async (
  { statusList, mainCategory }: GenderRatioStatusReq,
  accessToken: string | null
) => {
  const { data } = await maru.get<GetGenderRatioRes>(
    `/analysis/gender-ratio?statusList=${statusList.join(
      '&statusList='
    )}&mainCategory=${mainCategory}`,
    authorization(accessToken)
  );
  return data;
};

export const getSchoolOriginList = async (
  { statusList, isBusan, gu }: SchoolStatusReq,
  accessToken: string | null
) => {
  const { data } = await maru.get<GetSchoolOriginRes>(
    `/analysis/school-status?statusList=${statusList.join(
      '&statusList='
    )}&isBusan=${isBusan}&gu=${gu}`,
    authorization(accessToken)
  );
  return data;
};
