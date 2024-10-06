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

export const downloadFiles = async (fileUrls: Array<string>) => {
  const downloadPromises = fileUrls.map((fileUrl) =>
    maru.get(fileUrl, {
      responseType: 'blob',
    })
  );

  const responses = await Promise.all(downloadPromises);

  return responses.map((response) => response.data);
};

export const postNotice = async ({ title, content, fileNameList }: PostNoticeReq) => {
  const { data } = await maru.post(
    '/notice',
    { title, content, fileNameList },
    authorization()
  );
  return data;
};

export const putEditNotice = async (
  id: number,
  { title, content, fileNameList }: PutNoticeReq
) => {
  const { data } = await maru.put(
    `/notice/${id}`,
    { title, content, fileNameList },
    authorization()
  );
  return { data };
};

export const deleteNotice = async (id: number) => {
  const { data } = await maru.delete(`/notice/${id}`, authorization());
  return data;
};

export const postNoticePresignedUrl = async (
  fileNameList: Array<string>
): Promise<PresignedDatReq[]> => {
  const response = await maru.post(`/notice/file`, { fileNameList }, authorization());
  const dataList = response.data.dataList;

  return dataList.map(
    (fileData: {
      url: { uploadUrl: string; downloadUrl?: string | null };
      fileName: string;
    }) =>
      ({
        url: {
          uploadUrl: fileData.url.uploadUrl,
          downloadUrl: fileData.url.downloadUrl || null,
        },
        fields: {},
        fileName: fileData.fileName,
      } as PresignedDatReq)
  );
};

export const putNoticeFileUrl = async (
  files: File[],
  presignedData: PresignedDatReq[]
) => {
  const uploadPromises = files.map((file, index) => {
    const { url } = presignedData[index];

    return axios.put(url.uploadUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
  });
  const responses = await Promise.all(uploadPromises);
  return responses;
};
