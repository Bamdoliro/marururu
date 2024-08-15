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

export const downloadFile = async (fileUrl: string) => {
  const response = await maru.get(fileUrl, {
    responseType: 'blob',
  });
  return response.data;
};

export const postNotice = async ({ title, content, fileName }: PostNoticeReq) => {
  const { data } = await maru.post(
    '/notice',
    { title, content, fileName },
    authorization()
  );
  return data;
};

export const putEditNotice = async (
  id: number,
  { title, content, fileName }: PutNoticeReq
) => {
  const { data } = await maru.put(
    `/notice/${id}`,
    { title, content, fileName },
    authorization()
  );
  return { data };
};

export const deleteNotice = async (id: number) => {
  const { data } = await maru.delete(`/notice/${id}`, authorization());
  return data;
};

export const postNoticePresignedUrl = async (
  fileName: string
): Promise<PresignedDatReq> => {
  const response = await maru.post(`/notice/file`, { fileName }, authorization());

  const { url, fields, fileName: returnedFileName } = response.data.data;

  return {
    url,
    fields: fields || {},
    fileName: returnedFileName,
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
