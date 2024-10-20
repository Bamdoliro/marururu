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
  AnalysisNumberOfApplicantsReq,
} from '@/types/analysis/remote';

export const getNumberOfApplicantsList = async ({
  type,
}: AnalysisNumberOfApplicantsReq) => {
  const { data } = await maru.get<GetNumberOfApplicantsRes>(
    `/analysis/number-of-applicants?type=${type}`,
    authorization()
  );
  return data;
};

export const getGradeDistributionList = async ({
  statusList,
}: AnalysisApplicantTypeReq) => {
  const { data } = await maru.get<GetGradeDistributionRes>(
    `/analysis/grade-distribution?statusList=${statusList.join('&statusList=')}`,
    authorization()
  );
  return data;
};

export const getGenderRatioList = async ({
  statusList,
  mainCategory,
  type,
}: GenderRatioStatusReq) => {
  const { data } = await maru.get<GetGenderRatioRes>(
    `/analysis/gender-ratio?statusList=${statusList.join(
      '&statusList='
    )}&mainCategory=${mainCategory}&type=${type}`,
    authorization()
  );
  return data;
};

export const getSchoolOriginList = async ({
  statusList,
  isBusan,
  gu,
}: SchoolStatusReq) => {
  const { data } = await maru.get<GetSchoolOriginRes>(
    `/analysis/school-status?statusList=${statusList.join(
      '&statusList='
    )}&isBusan=${isBusan}&gu=${gu}`,
    authorization()
  );
  return data;
};
