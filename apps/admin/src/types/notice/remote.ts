import type { Notice, NoticeDetail } from './client';

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

export interface PutNoticeReq {
  title: string;
  content: string;
}

export interface PresignedDatReq {
  url: string;
  fields: {
    [key: string]: string;
  };
}
