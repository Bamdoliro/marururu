import type {
  FormType,
  FormTypeMainCategory,
  SchoolOrigin,
  NumberOfApplicants,
  AnalysisApplicantType,
  AreaCategory,
  GradeDistribution,
  GenderRatio,
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

export interface GenderRatioStatusReq {
  statusList: AnalysisApplicantType;
  mainCategory: FormTypeMainCategory;
}

export interface GetGenderRatioRes {
  dataList: GenderRatio[];
}

export interface GetSchoolOriginRes {
  dataList: SchoolOrigin[];
}
