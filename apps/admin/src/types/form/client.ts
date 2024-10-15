export type FormStatus =
  | 'RECEIVED'
  | 'FIRST_FAILED'
  | 'FAILED'
  | 'FINAL_SUBMITTED'
  | 'SUBMITTED'
  | 'APPROVED'
  | 'NO_SHOW'
  | 'FIRST_PASSED'
  | 'PASSED'
  | 'REJECTED';

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

export type FormCategory =
  | 'REGULAR'
  | 'SPECIAL'
  | 'SUPERNUMERARY'
  | 'SOCIAL_INTEGRATION'
  | 'MEISTER_TALENT'
  | 'NATIONAL_VETERANS_EDUCATION'
  | 'SPECIAL_ADMISSION'
  | 'EQUAL_OPPORTUNITY'
  | 'SOCIETY_DIVERSITY';

export type GraduationType = 'EXPECTED' | 'GRADUATED' | 'QUALIFICATION_EXAMINATION';

export interface Form {
  id: number;
  examinationNumber: number | null;
  name: string;
  birthday: string;
  graduationType: GraduationType;
  school: string;
  status: FormStatus;
  type: FormType;
  isChangedToRegular: boolean;
  totalScore: number | null;
  hasDocument: boolean | null;
  firstRoundPassed: boolean | null;
  secondRoundPassed: boolean | null;
}

export type FormListType = '모두 보기' | '검토해야 하는 원서 모아보기' | '정렬';

export type FormSort = 'total-score-asc' | 'total-score-desc';
export interface FormListSortingType {
  status: FormStatus | null;
  type: FormCategory | null;
  sort: FormSort | null;
}

export type ExportExcelType =
  | '전체 내보내기'
  | '1차 전형 결과'
  | '2차 전형 결과'
  | '최종 합격자';

export type PassStatusType = '합격' | '불합격' | '미정';

export interface FormDetail {
  examinationNumber: number | null;
  applicant: UserInfo;
  parent: ParentInfo;
  education: EducationInfo;
  grade: {
    subjectList: Subject[];
    attendance1: Attendance;
    attendance2: Attendance;
    attendance3: Attendance;
    volunteerTime1: number;
    volunteerTime2: number;
    volunteerTime3: number;
    certificateList: string[];
  };
  document: {
    coverLetter: string;
    statementOfPurpose: string;
  };
  type: FormType;
  changedToRegular: boolean;
}

export interface UserInfo {
  identificationPictureUri: string;
  name: string;
  phoneNumber: string;
  birthday: string;
  gender: 'MALE' | 'FEMALE';
}

export interface ParentInfo {
  name: string;
  phoneNumber: string;
  zoneCode: string;
  address: string;
  detailAddress: string;
  relation: string;
}

export interface EducationInfo {
  graduationType: GraduationType;
  graduationYear: string;
  schoolName: string;
  schoolLocation: string;
  schoolAddress: string;
  schoolCode: string;
  teacherName: string;
  schoolPhoneNumber: string;
  teacherMobilePhoneNumber: string;
}

export type AchievementLevel = 'A' | 'B' | 'C' | 'D' | 'E';

export interface AchievementLevelsGroup {
  subjectName: string;
  achievementLevels: AchievementLevel[];
}

export interface Subject {
  subjectName: string;
  achievementLevel: AchievementLevel;
  grade: number;
  semester: number;
}

export interface Attendance {
  absenceCount: number;
  latenessCount: number;
  earlyLeaveCount: number;
  classAbsenceCount: number;
}

export type ApprovalStatus = '승인' | '반려' | '확인 중' | '';
