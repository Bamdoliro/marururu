export type FormStep =
    | '지원자 정보'
    | '보호자 정보'
    | '출신학교 및 학력'
    | '전형 선택'
    | '성적 입력'
    | '자기소개서';

export interface Form {
    application: UserInfo;
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
    type: string;
}

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

export interface Subject {
    id?: number;
    subjectName: string;
    achievementLevel21: string;
    achievementLevel22: string;
    achievementLevel31: string;
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
