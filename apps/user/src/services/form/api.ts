import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { Form } from '@/types/form/client';
import type {
  GetSchoolListRes,
  GetSaveFormRes,
  GetFormStatusRes,
  PresignedUrlData,
  FormPresignedUrlData,
} from '@/types/form/remote';
import axios from 'axios';

export const patchSubmitFinalForm = async (formUrl: string) => {
  const { data } = await maru.patch('/form', formUrl, authorization());
  return data;
};

export const postSubmitDraftForm = async (formData: Form) => {
  const { data } = await maru.post('/form', formData, authorization());
  return data;
};

export const getExportForm = async () => {
  const { data } = await maru.get('/form/export', {
    ...authorization(),
    responseType: 'blob',
  });
  return data;
};

export const getSaveForm = async () => {
  const { data } = await maru.get<GetSaveFormRes>('/form/draft', authorization());
  return data;
};

export const postSaveForm = async (formData: Form) => {
  const { data } = await maru.post('/form/draft', formData, authorization());
  return data;
};

export const postUploadFormDocumnet = async (): Promise<FormPresignedUrlData> => {
  const { data } = await maru.post('/form/form-document', null, authorization());

  const uploadUrl = data?.data?.uploadUrl;
  const downloadUrl = data?.data?.downloadUrl;
  const fields = data?.data?.fields;

  return {
    uploadUrl,
    downloadUrl,
    fields: fields || {},
  } as PresignedUrlData;
};

export const putUpoloadFormDocument = async (
  file: File,
  presignedData: FormPresignedUrlData
) => {
  const { uploadUrl } = presignedData;

  const response = await axios.put(uploadUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return response;
};

export const postUploadProfileImage = async (): Promise<PresignedUrlData> => {
  const { data } = await maru.post('/form/identification-picture', null, authorization());

  const uploadUrl = data?.data?.uploadUrl;
  const downloadUrl = data?.data?.downloadUrl;
  const fields = data?.data?.fields;

  return {
    uploadUrl,
    downloadUrl,
    fields: fields || {},
  } as PresignedUrlData;
};

export const putProfileUpoload = async (file: File, presignedData: PresignedUrlData) => {
  const { uploadUrl } = presignedData;

  const response = await axios.put(uploadUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return response;
};

export const getUploadProfile = async (fileUrl: string) => {
  const { data } = await maru.get(fileUrl, { responseType: 'blob' });
  return URL.createObjectURL(data);
};

export const getSchoolList = async (school: string) => {
  const { data } = await maru.get<GetSchoolListRes>(`/school?q=${school}`);
  return data;
};

export const getFormStatus = async () => {
  const { data } = await maru.get<GetFormStatusRes>('/form/status', authorization());
  return data;
};
