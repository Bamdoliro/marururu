import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { RegistFormPresignedUrlData } from '@/types/regist/remote';
import axios from 'axios';

export const postSubmitRegistForm = async (): Promise<RegistFormPresignedUrlData> => {
  const { data } = await maru.post('/form/admission-and-pledge', null, authorization());

  const uploadUrl = data?.data?.uploadUrl;
  const downloadUrl = data?.data?.downloadUrl;

  return {
    uploadUrl,
    downloadUrl,
  } as RegistFormPresignedUrlData;
};

export const putUpoloadRegistFormDocument = async (
  file: File,
  presignedData: RegistFormPresignedUrlData
) => {
  const { uploadUrl } = presignedData;

  const response = await axios.put(uploadUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return response;
};
