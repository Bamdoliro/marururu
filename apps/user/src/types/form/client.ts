export interface Form {
  applicant: UserInfo;
  parent: ParentInfo;
  education: EducationInfo;
  grade: {
    subjectList: StudentSubject[];
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
}

export type FormStep =
  | '지원자정보'
  | '보호자정보'
  | '출신학교및학력'
  | '전형선택'
  | '성적입력'
  | '자기소개서'
  | '초안작성완료'
  | '초안제출완료'
  | '최종제출'
  | '최종제출완료';

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
  schoolCode: string;
  teacherName: string;
  teacherPhoneNumber: string;
  teacherMobilePhoneNumber: string;
}

export type AchievementLevel = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Subject {
  id: number;
  subjectName: string;
  achievementLevel21: AchievementLevel | null;
  achievementLevel22: AchievementLevel | null;
  achievementLevel31: AchievementLevel | null;
  score: number | null;
}

export type StudentSubject = Omit<Subject, 'id'>;

export type AttendanceName = 'attendance1' | 'attendance2' | 'attendance3';

export interface Attendance {
  absenceCount: number;
  latenessCount: number;
  earlyLeaveCount: number;
  classAbsenceCount: number;
}

export interface VolunteerInfo {
  volunteerTime1: number;
  volunteerTime2: number;
  volunteerTime3: number;
}

export interface School {
  name: string;
  location: string;
  code: string;
}

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
  | 'NATIONAL_VETERANS_EDUCATION'
  | 'SPECIAL_ADMISSION';

export type GraduationType = 'EXPECTED' | 'QUALIFICATION_EXAMINATION' | 'GRADUATED';

export interface FormDocument {
  fileName: string;
  formUrl: string;
}

export interface FormStatus {
  id: number;
  name: string;
  status:
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
  type: FormType;
}

export interface School {
  name: string;
  location: string;
  code: string;
}
