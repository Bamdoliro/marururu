import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetAnalysisListRes, GetNumberOfApplicants } from '@/types/analysis/remote';

export const getAnalysisList = async () => {
  const { data } = await maru.get<GetAnalysisListRes>('/리스트');
  return data;
};

export const getNumberOfApplicantsList = async () => {
  const { data } = await maru.get<GetNumberOfApplicants>(
    '/analysis/number-of-applicants',
    authorization()
  );
  return data;
};
