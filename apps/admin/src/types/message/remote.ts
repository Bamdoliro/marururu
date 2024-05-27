import type { Message, MessageDetail } from './client';

export interface GetMessageListRes {
  dataList: Message[];
}

export interface GetMessageDetailRes {
  data: MessageDetail;
}

export interface PostMessageReq {
  title: string;
  content: string;
  category: string;
}
