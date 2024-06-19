import type {
  Attendance,
  Education,
  Form,
  FormStatus,
  FormType,
  Parent,
  School,
  StudentSubject,
  User,
} from './client';

export interface GetSaveFormRes {
  data: Form;
}

export interface GetSchoolListRes {
  dataList: School[];
}

export interface GetFormStatusRes {
  data: FormStatus;
}

export interface PutFormReq {
  applicant: User;
  parent: Parent;
  education: Education;
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
