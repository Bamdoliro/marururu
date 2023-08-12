import { Attendance, EducationInfo, ParentInfo, School, StudentSubject, UserInfo } from './client';

export interface PostFormReq {
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
    type: string | null;
}

export interface GetSchoolListRes {
    dataList: School[];
}
