import type {
  SchoolOrigin,
  NumberOfApplicants,
  AnalysisApplicantType,
  AreaCategory,
  GradeDistribution,
} from './client';

export interface GetNumberOfApplicantsRes {
  dataList: NumberOfApplicants[];
}

export interface AnalysisApplicantTypeReq {
  statusList: AnalysisApplicantType;
}

export interface SchoolStatusReq {
  statusList: AnalysisApplicantType;
  isBusan: boolean;
  gu?: AreaCategory | null;
}
export interface GetGradeDistributionRes {
  dataList: GradeDistribution[];
}
export interface GetSchoolOriginRes {
  dataList: SchoolOrigin[];
}
