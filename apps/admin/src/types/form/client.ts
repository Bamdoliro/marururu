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

export type GraduationType = 'EXPECTED' | 'GRADUATED' | 'QUALIFICATION_EXAMINATION';

export type FormStatus =
    | '접수됨'
    | '1차 불합격'
    | '불합격'
    | '최종 제출됨'
    | '제출됨'
    | '승인됨'
    | '불참'
    | '1차 합격'
    | '최종 합격'
    | '반려됨';

export interface Form {
    id: number;
    name: string;
    birthday: string;
    graduationType: GraduationType;
    school: string;
    status: FormStatus;
    type: FormType;
    totalScore: number | null;
    hasDocument: boolean;
    firstRoundPassed: boolean | null;
    secondRoundPassed: boolean | null;
}

export type FormListType = '모두 보기' | '검토해야 하는 원서 모아보기';

export type ExportExcelType = '전체 내보내기' | '1차 전형 결과' | '2차 전형 결과' | '최종 합격자';

export type PassStatusType = '합격' | '불합격' | '미정';

export interface FormDetail {
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
    schoolCode: string;
    teacherName: string;
    teacherPhoneNumber: string;
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

export type ApprovalStatus = '승인' | '반려' | '';
