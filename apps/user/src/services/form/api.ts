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

export const patchSubmitFinalForm = async (
  formUrl: string,
  accessToken: string | null
) => {
  const { data } = await maru.patch('/form', formUrl, authorization(accessToken));
  return data;
};

export const postSubmitDraftForm = async (formData: Form, accessToken: string | null) => {
  const { data } = await maru.post('/form', formData, authorization(accessToken));
  return data;
};

export const getExportForm = async (accessToken: string | null) => {
  const { data } = await maru.get('/form/export', {
    ...authorization(accessToken),
    responseType: 'blob',
  });
  return data;
};

export const getExportRecipt = async (accessToken: string | null) => {
  const { data } = await maru.get('/form/proof-of-application', {
    ...authorization(accessToken),
    responseType: 'blob',
  });

  return data;
};

export const getSaveForm = async (accessToken: string | null) => {
  const { data } = await maru.get<GetSaveFormRes>(
    '/form/draft',
    authorization(accessToken)
  );
  return data;
};

export const postSaveForm = async (formData: Form, accessToken: string | null) => {
  const { data } = await maru.post('/form/draft', formData, authorization(accessToken));
  return data;
};

export const postUploadFormDocumnet = async (
  accessToken: string | null
): Promise<FormPresignedUrlData> => {
  const { data } = await maru.post(
    '/form/form-document',
    null,
    authorization(accessToken)
  );

  const uploadUrl = data?.data?.uploadUrl;
  const downloadUrl = data?.data?.downloadUrl ?? '';
  const fields = data?.data?.fields;

  return {
    uploadUrl,
    downloadUrl,
    fields: fields || {},
  } as FormPresignedUrlData;
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

export const postUploadProfileImage = async (
  accessToken: string | null
): Promise<PresignedUrlData> => {
  const { data } = await maru.post(
    '/form/identification-picture',
    null,
    authorization(accessToken)
  );

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
  try {
    const { uploadUrl } = presignedData;
    const response = await axios.put(uploadUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getUploadProfile = async (fileUrl: string) => {
  const { data } = await maru.get(fileUrl, { responseType: 'blob' });
  return URL.createObjectURL(data);
};

export const getSchoolList = async (school: string) => {
  const { data } = await maru.get<GetSchoolListRes>(`/school?q=${school}`);
  return data;
};

export const getFormStatus = async (accessToken: string | null) => {
  const { data } = await maru.get<GetFormStatusRes>(
    '/form/status',
    authorization(accessToken)
  );
  return data;
};
