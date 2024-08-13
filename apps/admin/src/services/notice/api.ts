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

export const postNotice = async ({ title, content }: PostNoticeReq) => {
  const { data } = await maru.post('/notice', { title, content }, authorization());
  return data;
};

export const putEditNotice = async (id: number, { title, content }: PutNoticeReq) => {
  const { data } = await maru.put(`/notice/${id}`, { title, content }, authorization());
  return { data };
};

export const deleteNotice = async (id: number) => {
  const { data } = await maru.delete(`/notice/${id}`, authorization());
  return data;
};

export const postNoticePresignedUrl = async (): Promise<PresignedDatReq> => {
  const response = await maru.post(`/notice/file`, null, authorization.Binary());
  const { url, fields } = response.data.data;
  return { url: url.uploadUrl, fields: fields || {} };
};

export const putNoticeFileUrl = async (file: File, presignedData: PresignedDatReq) => {
  const { url, fields } = presignedData;
  let response;

  if (Object.keys(fields).length === 0) {
    response = await axios.put(url, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
  }

  return response;
};
