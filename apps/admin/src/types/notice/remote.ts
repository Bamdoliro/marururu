import { Notice, NoticeDetail } from './client';

export interface GetNoticeListRes {
    dataList: Notice[];
}

export interface GetNoticeDetailRes {
    data: NoticeDetail;
}

export interface PostNoticeReq {
    title: string;
    content: string;
}
