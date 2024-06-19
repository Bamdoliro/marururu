import type {
  SchoolOrigin,
  NumberOfApplicants,
  AnalysisApplicantType,
  AreaCategory,
} from './client';

export interface GetNumberOfApplicantsRes {
  dataList: NumberOfApplicants[];
}

export interface SchoolStatusReq {
  statusList: AnalysisApplicantType;
  isBusan: boolean;
  gu?: AreaCategory | null;
}
export interface GetSchoolOriginRes {
  dataList: SchoolOrigin[];
}
