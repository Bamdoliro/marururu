export interface Form {
    applicant: UserInfo | null;
    parent: ParentInfo | null;
    education: EducationInfo | null;
    grade: {
        subjectList: StudentSubject[] | null;
        attendance1: Attendance | null;
        attendance2: Attendance | null;
        attendance3: Attendance | null;
        volunteerTime1: number | null;
        volunteerTime2: number | null;
        volunteerTime3: number | null;
        certificateList: string[] | null;
    };
    document: {
        coverLetter: string | null;
        statementOfPurpose: string | null;
    };
    type: FormType | null;
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
}

export interface EducationInfo {
    graduationType: 'EXPECTED' | 'GRADUATED' | 'QUALIFICATION_EXAMINATION' | '';
    graduationYear: string;
    schoolName: string;
    schoolLocation: string;
    schoolCode: string;
    teacherName: string;
    teacherPhoneNumber: string;
    teacherMobilePhoneNumber: string;
}

export type AchievementLevel = 'A' | 'B' | 'C' | 'D' | 'E' | null;

export interface StudentSubject {
    subjectName: string;
    achievementLevel21: AchievementLevel;
    achievementLevel22: AchievementLevel;
    achievementLevel31: AchievementLevel;
}

export interface Subject {
    id: number;
    subjectName: string;
    achievementLevel21: AchievementLevel;
    achievementLevel22: AchievementLevel;
    achievementLevel31: AchievementLevel;
}

export interface AttendanceInfo {
    attendance1: Attendance;
    attendance2: Attendance;
    attendance3: Attendance;
}

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
    | 'SPECIAL'
    | 'MEISTER_TALENT'
    | 'SPECIAL_ADMISSION'
    | 'NATIONAL_BASIC_LIVING'
    | 'NEAR_POVERTY'
    | 'NATIONAL_VETERANS'
    | 'ONE_PARENT'
    | 'FROM_NORTH_KOREA'
    | 'MULTICULTURAL'
    | 'TEEN_HOUSEHOLDER'
    | 'MULTI_CHILDREN'
    | 'FARMING_AND_FISHING';

export interface FormDocument {
    fileName: string;
    formUrl: string;
}
