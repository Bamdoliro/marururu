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
  fileNames?: string[] | null;
}

export interface PutNoticeReq {
  title: string;
  content: string;
  fileNames?: string[] | null;
}

export interface PresignedDatReq {
  url: {
    uploadUrl: string[];
    downloadUrl?: string[] | null;
  };
  fields: {
    [key: string]: string | Blob;
  };
  fileName: string[];
}
