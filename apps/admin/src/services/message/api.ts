import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { PostMessageReq, PostMeisterMessageReq } from '@/types/message/remote';

export const postMessage = async (
  messageData: PostMessageReq,
  accessToken: string | null
) => {
  const { data } = await maru.post(
    `/message/status`,
    messageData,
    authorization(accessToken)
  );
  return data;
};

export const postMeisterMessage = async (
  meisterMessageData: PostMeisterMessageReq,
  accessToken: string | null
) => {
  const { data } = await maru.post(
    `/message/type`,
    meisterMessageData,
    authorization(accessToken)
  );
  return data;
};
