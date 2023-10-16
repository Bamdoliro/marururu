import { Faq, FaqDetail } from './client';

export interface GetFaqListRes {
    dataList: Faq[];
}

export interface GetFaqDetailRes {
    data: FaqDetail;
}

export interface PostFaqReq {
    title: string;
    content: string;
    category: string;
}

export interface PutFaqReq {
    title: string;
    content: string;
    category: string;
}
