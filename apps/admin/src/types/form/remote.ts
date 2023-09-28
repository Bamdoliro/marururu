import { Form, FormDetail } from './client';

export interface GetFormListRes {
    dataList: Form[];
}

export interface PatchSecondRoundResultReq {
    formList: { formId: number; pass: boolean | null }[];
}

export interface GetFormDetail {
    data: FormDetail;
}
