export type FormType =
  | 'REGULAR'
  | 'MEISTER_TALENT'
  | 'NATIONAL_BASIC_LIVING'
  | 'NEAR_POVERTY'
  | 'NATIONAL_VETERANS'
  | 'ONE_PARENT'
  | 'FROM_NORTH_KOREA'
  | 'MULTICULTURAL'
  | 'TEEN_HOUSEHOLDER'
  | 'MULTI_CHILDREN'
  | 'FARMING_AND_FISHING'
  | 'SPECIAL_ADMISSION'
  | 'NATIONAL_VETERANS_EDUCATION';

export interface NumberOfApplicants {
  type: FormType;
  count: number;
}

export interface SchoolOrigin {
  applicantName: string;
  schoolName: string;
  schoolAddress: string;
}
export type AnalysisApplicantType = ('FIRST_PASSED' | 'FAILED' | 'PASSED')[];

export type AreaCategory =
  | 'BUSAN'
  | 'OTHER_AREA'
  | '강서구'
  | '금정구'
  | '기장군'
  | '남구'
  | '동구'
  | '동래구'
  | '부산진구'
  | '북구'
  | '사상구'
  | '사하구'
  | '서구'
  | '수영구'
  | '연제구'
  | '영도구'
  | '중구'
  | '해운대구'
  | '';
