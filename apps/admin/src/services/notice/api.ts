import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type {
  GetNoticeDetailRes,
  GetNoticeListRes,
  PostNoticeReq,
  PresignedDatReq,
  PutNoticeReq,
} from '@/types/notice/remote';
import axios from 'axios';

export const getNoticeList = async () => {
  const { data } = await maru.get<GetNoticeListRes>('/notice');
  return data;
};

export const getNoticeDetail = async (id: number) => {
  const { data } = await maru.get<GetNoticeDetailRes>(`/notice/${id}`);
  return data;
};

export const postNotice = async ({ title, content, fileUuid }: PostNoticeReq) => {
  const { data } = await maru.post(
    '/notice',
    { title, content, fileUuid },
    authorization()
  );
  return data;
};

export const putEditNotice = async (
  id: number,
  { title, content, fileUuid }: PutNoticeReq
) => {
  const { data } = await maru.put(
    `/notice/${id}`,
    { title, content, fileUuid },
    authorization()
  );
  return { data };
};

export const deleteNotice = async (id: number) => {
  const { data } = await maru.delete(`/notice/${id}`, authorization());
  return data;
};

export const postNoticePresignedUrl = async (): Promise<PresignedDatReq> => {
  const response = await maru.post(`/notice/file`, null, authorization.Binary());
  const { url, fields, fileUuid } = response.data.data;

  return {
    url,
    fields: fields || {},
    fileUuid: fileUuid,
  } as PresignedDatReq;
};

export const putNoticeFileUrl = async (file: File, presignedData: PresignedDatReq) => {
  const { url } = presignedData;

  const response = await axios.put(url.uploadUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return response;
};
