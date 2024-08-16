import type { Form, FormStatus, School } from './client';

export interface GetSaveFormRes {
  data: Form;
}

export interface GetSchoolListRes {
  dataList: School[];
}

export interface GetFormStatusRes {
  data: FormStatus;
}

export interface PresignedUrlData {
  uploadUrl: string;
  downloadUrl: string;
  fields: {
    [key: string]: string | Blob;
  };
}

export interface FormPresignedUrlData {
  uploadUrl: string;
  downloadUrl: string;
  fields: {
    [key: string]: string | Blob;
  };
}
