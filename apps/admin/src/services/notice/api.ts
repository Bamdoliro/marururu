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

export const downloadFiles = async (fileUrls: string[]) => {
  const downloadPromises = fileUrls.map((fileUrl) =>
    maru.get(fileUrl, {
      responseType: 'blob',
    })
  );

  const responses = await Promise.all(downloadPromises);

  return responses.map((response) => response.data);
};

export const postNotice = async ({ title, content, fileNames }: PostNoticeReq) => {
  const { data } = await maru.post(
    '/notice',
    { title, content, fileNames },
    authorization()
  );
  return data;
};

export const putEditNotice = async (
  id: number,
  { title, content, fileNames }: PutNoticeReq
) => {
  const { data } = await maru.put(
    `/notice/${id}`,
    { title, content, fileNames },
    authorization()
  );
  return { data };
};

export const deleteNotice = async (id: number) => {
  const { data } = await maru.delete(`/notice/${id}`, authorization());
  return data;
};

export const postNoticePresignedUrl = async (
  fileNames: string[]
): Promise<PresignedDatReq> => {
  const response = await maru.post(`/notice/file`, { fileNames }, authorization());

  const { url, fields, fileName: returnedFileName } = response.data.data;

  return {
    url,
    fields: fields || {},
    fileName: returnedFileName,
  } as PresignedDatReq;
};
export const putNoticeFileUrl = async (files: File[], presignedData: PresignedDatReq) => {
  const { url } = presignedData;

  const uploadPromises = files.map((file, index) => {
    return axios.put(url.uploadUrl[index], file, {
      headers: {
        'Content-Type': file.type,
      },
    });
  });

  const responses = await Promise.all(uploadPromises);
  return responses;
};
