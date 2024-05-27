import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type {
  GetMessageDetailRes,
  GetMessageListRes,
  PostMessageReq,
} from '@/types/message/remote';

export const getMessageList = async () => {
  const { data } = await maru.get<GetMessageListRes>('/message');
  return data;
};

export const getMessageDetail = async (id: number) => {
  const { data } = await maru.get<GetMessageDetailRes>(`/message/${id}`);
  return data;
};

export const postMessage = async (messageData: PostMessageReq) => {
  const { data } = await maru.post(`/message`, messageData, authorization());
  return data;
};
