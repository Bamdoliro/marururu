import { Form } from './client';

export interface GetFormListRes {
    dataList: Form[];
}

export interface PatchSecondRoundResultReq {
    formList: { formId: number; pass: boolean | null }[];
}
