import { maru } from '@/apis/instance/instance';
import type { GetNoticeDetailRes, GetNoticeListRes } from '@/types/notice/remote';

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
