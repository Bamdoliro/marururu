import { Form, FormStatus, School } from './client';

export interface GetSaveFormRes {
    data: Form;
}

export interface GetSchoolListRes {
    dataList: School[];
}

export interface GetFormStatusRes {
    data: FormStatus;
}
