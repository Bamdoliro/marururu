import { Faq, FaqDetail } from './client';

export interface GetFaqListRes {
    dataList: Faq[];
}

export interface GetFaqDetailRes {
    data: FaqDetail;
}
