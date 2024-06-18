import type { Analysis, NumberOfApplicants } from './client';

export interface GetAnalysisListRes {
  dataList: Analysis[];
}

export interface GetNumberOfApplicants {
  dataList: NumberOfApplicants[];
}
