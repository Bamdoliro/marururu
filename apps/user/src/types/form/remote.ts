import { Attendance, EducationInfo, ParentInfo, School, Subject, UserInfo } from './client';

export interface PostFormReq {
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
    type: string;
}

export interface GetSchoolListRes {
    dataList: School[];
}
