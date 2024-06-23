import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { PostMessageReq, PostMeisterMessageReq } from '@/types/message/remote';

export const postMessage = async (messageData: PostMessageReq) => {
  const { data } = await maru.post(`/message/status`, messageData, authorization());
  return data;
};

export const postMeisterMessage = async (meisterMessageData: PostMeisterMessageReq) => {
  const { data } = await maru.post(`/message/type`, meisterMessageData, authorization());
  return data;
};
