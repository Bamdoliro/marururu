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

export const postNoticePresignedUrl = async (): Promise<PresignedDatReq[]> => {
  const { data } = await maru.post<PresignedDatReq[]>(
    `/notice/file`,
    null,
    authorization.Binary()
  );
  return data;
};

export const putNoticeFileUrl = async (file: File, presignedData: PresignedDatReq) => {
  const { url } = presignedData;

  const response = await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return response;
};
