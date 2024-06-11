import { maru } from '@/apis/instance/instance';
import type { GetAnalysisListRes } from '@/types/analysis/remote';

export const getAnalysisList = async () => {
  const { data } = await maru.get<GetAnalysisListRes>('/question');
  return data;
};
