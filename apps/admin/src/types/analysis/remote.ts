import type {
  FormTypeMainCategory,
  SchoolOrigin,
  NumberOfApplicants,
  AnalysisApplicantType,
  AreaCategory,
  GradeDistribution,
  GenderRatio,
  AnalysisNumberOfApplicantsType,
} from './client';

export interface GetNumberOfApplicantsRes {
  dataList: NumberOfApplicants[];
}

export interface AnalysisApplicantTypeReq {
  statusList: AnalysisApplicantType[];
}

export interface AnalysisNumberOfApplicantsReq {
  type: AnalysisNumberOfApplicantsType;
}

export interface SchoolStatusReq {
  statusList: AnalysisApplicantType[];
  isBusan: boolean;
  gu?: AreaCategory | null;
}
export interface GetGradeDistributionRes {
  dataList: GradeDistribution[];
}

export interface GenderRatioStatusReq {
  statusList: AnalysisApplicantType[];
  mainCategory: FormTypeMainCategory;
  type: AnalysisNumberOfApplicantsType;
}

export interface GetGenderRatioRes {
  dataList: GenderRatio[];
}

export interface GetSchoolOriginRes {
  dataList: SchoolOrigin[];
}
