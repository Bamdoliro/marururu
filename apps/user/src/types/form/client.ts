export type FormStep =
    | '지원자정보'
    | '보호자정보'
    | '출신학교및학력'
    | '전형선택'
    | '성적입력'
    | '자기소개서'
    | '완료';

export interface UserInfo {
    identificationPictureUri: string;
    name: string;
    phoneNumber: string;
    birthday: string;
    gender: string;
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

export type Form =
    | '일반전형'
    | '특별전형'
    | '마이스터인재전형'
    | '특례입학대상자전형'
    | '국가기초생활수급권자'
    | '차상위계층'
    | '국가보훈자녀'
    | '한부모가정'
    | '북한이탈주민'
    | '다문화가정'
    | '소년소녀가장'
    | '다자녀가정자녀'
    | '농어촌지역출신자'
    | '기회균등전형'
    | '사회다양성전형';
