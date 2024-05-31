import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { PostMessageReq } from '@/types/message/remote';

export const postMessage = async (messageData: PostMessageReq) => {
  const { data } = await maru.post(`/message`, messageData, authorization());
  return data;
};
